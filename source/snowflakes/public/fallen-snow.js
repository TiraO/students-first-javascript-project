class FallenSnow {
  glContext

  constructor(app, glContext) {
    this.app = app;
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
   let gl = document.getElementsByTagName("canvas")[0].getContext('webgl2', {preserveDrawingBuffer: true});
    let width = 1;
    let height = 1;


    // gl.clearColor(.25, .5, .75, 1);
    // gl.clear(gl.COLOR_BUFFER_BIT);

    let imageData = new Uint8Array(width*height*4);
    gl.readPixels(Math.round(point.x), Math.round(stageHeight - point.y),
      width, height, gl.RGBA, gl.UNSIGNED_BYTE, imageData);
    console.log(imageData)

    let hexColor = (1 << 24) + (imageData[0] << 16) + (imageData[1] << 8) + (imageData[2])

    // let i  = gl.copyTexImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 0, 0, 512, 512, 0);
    //     gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, imageData);
// console.log(imageData)

    return hexColor
  }

  getSnowDepth = (point) => {
    // the pixels will be empty unless you get them right after rendering >_<
    this.app.renderer.render(this.app.stage);
    console.log("snow depth at: ", point)

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