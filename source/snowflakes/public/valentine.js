class Valentine {
  constructor(stage) {
    this.stage = stage
    this.valentineContainer = new PIXI.Container();
    stage.addChild(this.valentineContainer);
    this.valentineParts = []
    this.leftSnowflake = new Snowflake(stage);
    this.leftSnowflake.snowflakeContainer.position.x = stageWidth / 4
    this.leftSnowflake.snowflakeContainer.position.y = stageHeight / 4
    this.valentineParts.push(this.leftSnowflake);
    this.valentineContainer.addChild(this.leftSnowflake);

    this.middleSnowflake = new Snowflake(stage);
    this.middleSnowflake.snowflakeContainer.position.y = 3 * stageHeight / 4
    this.valentineParts.push(this.middleSnowflake);
    this.valentineContainer.addChild(this.middleSnowflake);

    let heartTexture = PIXI.Texture.from("wideheartmask.png");
    let heartContainer = new PIXI.Sprite(heartTexture);
    stage.addChild(heartContainer);
    heartContainer.x = -stageWidth / 2
    heartContainer.y = 0
    heartContainer.width = stageWidth
    heartContainer.height = stageHeight
    this.valentineContainer.addChild(heartContainer)
    this.valentineContainer.snowflakeContainer.mask = heartContainer
    this.points = this.middleSnowflake.points
  }

  // this.valentineParts.forEach((part)=>{
  //   addLine(event);
  //   previewLine(event);
  //   animate();
  //
  // })

  addLine(event) {
    this.leftSnowflake.addLine(event)
    this.middleSnowflake.addLine(event)
}
  previewLine(event) {
    this.leftSnowflake.previewLine(event)
    this.middleSnowflake.previewLine(event)
  }
  fillSnowflake() {
    this.leftSnowflake.fillSnowflake()
    this.middleSnowflake.fillSnowflake()
  }
  animate() {
    this.leftSnowflake.animate()
    this.middleSnowflake.animate()
  }
}