class FallenSnow {
  glContext

  constructor(app, glContext) {
    this.app = app;
    this.glContext = glContext
    this.layerThickness = 10
    this.snowHeights = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    this.snowPile = new PIXI.Graphics();
    this.app.stage.addChild(this.snowPile);
    this.renderSnowHeight()
  };

  renderSnowHeight = () => {
    this.snowPile.clear();
    let x = 0
    this.snowPile.lineStyle(this.layerThickness, 0xFFFFFF, 1);
    this.snowPile.beginFill(0xFFFFFF, 0.5);
    this.snowPile.moveTo(0,stageHeight)
    this.snowPile.lineTo(0, stageHeight - this.snowHeights[0]);
    this.snowHeights.forEach((snowHeight, index)=>{
      let previousX = x
      let previousY = stageHeight - (this.snowHeights[index-1] || this.snowHeights[index])
      x+= stageWidth/this.snowHeights.length
      let y = stageHeight - snowHeight
      this.snowPile.quadraticCurveTo((x + 3*previousX) / 4, previousY,(x + previousX) / 2, (y + previousY) / 2);
      this.snowPile.quadraticCurveTo((3*x + previousX) / 4, y, x, y);
    })
    this.snowPile.lineTo(stageWidth, stageHeight);
    this.snowPile.lineTo(0, stageHeight);
    this.snowPile.endFill();
  };

  crumpleSnowflake = (snowflake) => {
    snowflake.hasCrumpled = true;
    let landingPoint = {x: snowflake.snowflakeContainer.position.x, y: stageHeight};
    let hillWidth = stageWidth / this.snowHeights.length
    let whichHeight = Math.floor(landingPoint.x / hillWidth);
    whichHeight = this.clampHillIndex(whichHeight);
    let left = this.clampHillIndex(whichHeight -1);
    let middle = this.clampHillIndex(whichHeight);
    let right = this.clampHillIndex(whichHeight +1);
    if(this.snowHeights[middle] > this.snowHeights[left]
      && this.snowHeights[middle] > this.snowHeights[right]){
      this.snowHeights[middle]+= this.layerThickness * 0.6;
    } else {
      this.snowHeights[middle]+= this.layerThickness
    }
    if(this.snowHeights[left] < this.snowHeights[middle]){
      this.snowHeights[left]+= this.layerThickness * 0.4
    }
    if(this.snowHeights[right] < this.snowHeights[middle]){
      this.snowHeights[right]+= this.layerThickness * 0.4
    }

    this.renderSnowHeight()
  };

  handleSnowflake(snowflake){
    if (!snowflake.hasCrumpled && fallenSnow.isBelowHill(snowflake.snowflakeContainer.position)) {
      fallenSnow.crumpleSnowflake(snowflake)
    }
  }
  isBelowHill(point){
    let hillIndex = this.getHillIndex(point.x);
    let hillHeight = this.snowHeights[hillIndex];
    return (stageHeight - point.y) < hillHeight; //
  }
  getHillIndex(x){
    let hillWidth = stageWidth / this.snowHeights.length
    let whichHeight = Math.floor(x / hillWidth);
    return this.clampHillIndex(whichHeight)
  }

  clampHillIndex(index){
    return Math.max(0, Math.min(index, this.snowHeights.length - 1));
  }


  getSnowDepth = (point) => {

  };
};