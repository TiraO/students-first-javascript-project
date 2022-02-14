class Valentine {
  constructor(stage) {
    this.stage = stage
    this.valentineContainer = new PIXI.Container();
    stage.addChild(this.valentineContainer);
    this.valentineParts = []
    this.leftSnowflake = new Snowflake(stage);
    this.leftSnowflake.snowflakeContainer.position.x = stageWidth / 3
    this.leftSnowflake.snowflakeContainer.position.y = stageHeight / 3
    this.valentineParts.push(this.leftSnowflake);
    this.valentineContainer.addChild(this.leftSnowflake.snowflakeContainer);

    this.middleSnowflake = new Snowflake(stage);
    this.middleSnowflake.snowflakeContainer.position.y = 2 * stageHeight / 3
    this.valentineParts.push(this.middleSnowflake);
    this.valentineContainer.addChild(this.middleSnowflake.snowflakeContainer);

    this.rightSnowflake = new Snowflake(stage);
    this.rightSnowflake.snowflakeContainer.position.x = 2 * stageWidth / 3
    this.rightSnowflake.snowflakeContainer.position.y = stageHeight / 3
    this.valentineParts.push(this.rightSnowflake)
    this.valentineContainer.addChild(this.rightSnowflake.snowflakeContainer)

    this.valentineSize = stageHeight

    let heartTexture = PIXI.Texture.from("wideheartmask.png");
    let heartContainer = new PIXI.Sprite(heartTexture);
    stage.addChild(heartContainer);
    heartContainer.x = 0
    heartContainer.y = 0
    heartContainer.width = stageWidth
    heartContainer.height = stageHeight
    this.valentineContainer.addChild(heartContainer)
    this.valentineContainer.mask = heartContainer
    this.points = this.middleSnowflake.points
  }



  addLine(event) {
    event = this.middleSnowflake.snowflakeContainer.toLocal(
        new PIXI.Point(event.x + stageWidth / 2, event.y + stageHeight / 2));
    this.valentineParts.forEach((part)=>{
      part.addLine(event);
    })
  }

  previewLine(event) {
    event = this.middleSnowflake.snowflakeContainer.toLocal(
        new PIXI.Point(event.x + stageWidth / 2, event.y + stageHeight / 2));
    this.valentineParts.forEach((part)=>{
      part.previewLine(event)
    })
  }

  fillSnowflake() {
    this.valentineParts.forEach((part)=>{
      part.fillSnowflake()
    })
  }

  animate() {
    this.velocity = Math.sqrt(this.valentineSize) * 4
    this.isFinished = true
    this.deletePreview()
    this.shrink()
    this.moveToTop()
    setInterval(this.renderFrame, 1000 / frameRate);
  }

  renderFrame = () => {
    let valentineBelowBottom = this.valentineContainer.position.y >= stageHeight + this.valentineSize
    if (valentineBelowBottom) {
      this.moveToTop();
    } else {
      this.valentineContainer.position.y += this.velocity / frameRate;
      let xSpeed = Math.random() / frameRate
          * Math.sin((this.valentineContainer.position.y + this.animationOffset) / 50)
          * Math.sin((this.valentineContainer.position.y + this.animationOffset) / 500);
      this.valentineContainer.position.x += xSpeed * this.valentineSize / 5;
      this.valentineContainer.rotation -= xSpeed
    }
  }



  shrink = () => {
    this.valentineContainer.scale.x *= scaleFactor
    this.valentineContainer.scale.y *= scaleFactor
  }

  moveToTop = () => {
    let snowflakeX = Math.random() * stageWidth
    this.valentineContainer.position.y = -1 * this.valentineSize
    this.valentineContainer.position.x = snowflakeX
    this.animationOffset = stageHeight * Math.random()
  }

  deletePreview = () => {
    // this.previewBranches.forEach((branch) => {
    //   branch.clear()
    // })
  }


}