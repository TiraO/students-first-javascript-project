class FallenSnow {
  glContext

  constructor(app, glContext) {
    this.app = app;
    this.glContext = glContext
    this.layerThickness = 5
    this.snowHeights = [0, 25, 50, 35, 70, 10, 30, 10, 35, 70, 0, 25, 50, 35, 70, 10, 30, 10, 35, 70]
    this.snowPile = new PIXI.Graphics();
    this.app.stage.addChild(this.snowPile);
    this.renderSnowHeight()
  };

  renderSnowHeight = () => {
    let x = 0
    this.snowPile.lineStyle(this.layerThickness, 0xFFFFFF, 1);
    this.snowPile.moveTo(0,stageHeight)
    this.snowHeights.forEach((snowHeight, index)=>{
      let previousX = x
      let previousY = this.snowHeights[index-1] || 0
      x+= stageWidth/this.snowHeights.length
      let y = stageHeight - snowHeight
      this.snowPile.quadraticCurveTo((x + 3*previousX) / 4, previousY,(x + previousX) / 2, (y + previousY) / 2);
      this.snowPile.quadraticCurveTo((3*x + previousX) / 4, y, x, y);
    })
  };

  crumpleSnowflake = (snowflake) => {
    let landingPoint = {x: snowflake.snowflakeContainer.position.x, y: stageHeight};
    let hillWidth = stageWidth / this.snowHeights.length
    let whichHeight = Math.floor(landingPoint.x / hillWidth);
    this.snowHeights[whichHeight]+= this.layerThickness
    this.renderSnowHeight()
  };



  getSnowDepth = (point) => {

  };
};