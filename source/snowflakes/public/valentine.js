class Valentine {
  constructor(stage) {
    this.stage = stage
    this.snowflake = new Snowflake(stage, window.innerWidth, window.innerHeight);
    let heartTexture = PIXI.Texture.from("heartmask.png");
    let heartContainer = new PIXI.Sprite(heartTexture);
    stage.addChild(heartContainer);
    heartContainer.x = -stageWidth / 2
    heartContainer.y = -stageHeight / 2
    heartContainer.width = stageWidth
    heartContainer.height = stageHeight
    this.snowflake.snowflakeContainer.addChild(heartContainer)
    this.snowflake.snowflakeContainer.mask = heartContainer
    this.points = this.snowflake.points
  }
  addLine(event) {
    this.snowflake.addLine(event)
  }
  previewLine(event) {
    this.snowflake.previewLine(event)
  }
  fillSnowflake() {
    this.snowflake.fillSnowflake()
  }
  animate() {
    this.snowflake.animate()
  }
}