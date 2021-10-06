class FallenSnow {
  glContext

  constructor(glContext) {
    this.glContext = glContext
  }


  crumpleSnowflake = (snowflake) => {
    let snowPile = new PIXI.Graphics();
    let landingPoint = {x: snowflake.snowflakeContainer.position.x, y: stageHeight};
    let snowDepth = this.getSnowDepth(landingPoint)
    snowflake.stage.addChild(snowPile);
    snowPile.lineStyle(20, 0xFFFFFF, 0.8);
    let length = snowflake.calculateSize() * scaleFactor;
    let lineStart = {x: snowflake.snowflakeContainer.position.x, y: stageHeight - snowDepth};
    snowPile.moveTo(lineStart.x - length / 2, lineStart.y);
    snowPile.lineTo(lineStart.x + length / 2, lineStart.y);
  }

  getPixelColor = (point) => {
    let gl = this.glContext;
    let width = 1;
    let height = 1;
    let pixels = new Uint8Array(width * height * 4);
    let rgba = gl.readPixels(point.x, point.y, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);

    return rgba
  }

  getSnowDepth = (point) => {
    let white = 0xFFF;
    let pixelColor = white;
    let depth = 0;
    while (pixelColor == white) {

      depth += 1
      pixelColor = this.getPixelColor({x: point.x, y: point.y - depth});

    }
    return depth
  }
}