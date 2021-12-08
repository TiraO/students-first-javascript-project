let frameRate = 60
let scaleFactor = 1 / 8

class Snowflake {
  constructor(stage) {
    this.stage = stage
    this.isFinished = false
    this.snowflakeContainer = new PIXI.Container();
    stage.addChild(this.snowflakeContainer);
    this.branches = []
    let branchCount = 0;
    this.snowflakeContainer.position.x = stageWidth/2;
    this.snowflakeContainer.position.y = stageHeight/2;
    while (branchCount < 12) {
      let branch = new PIXI.Graphics();
      branch.rotation = branchCount * 2 * Math.PI / 12;
      branch.lineStyle(2, 0xFFFFFF, 0.8);
      if (branchCount % 2 == 1) {
        branch.scale.x = -1;
      }
      this.branches.push(branch)
      this.snowflakeContainer.addChild(branch);
      branchCount = branchCount + 1
    }
    this.previewBranches = []
    branchCount = 0;
    while (branchCount < 12) {
      let branch = new PIXI.Graphics();
      branch.rotation = branchCount * 2 * Math.PI / 12;
      branch.lineStyle(2, 0xFFFFFF, 0.8);
      if (branchCount % 2 == 1) {
        branch.scale.x = -1;
      }
      this.previewBranches.push(branch)
      this.snowflakeContainer.addChild(branch);
      branchCount = branchCount + 1
    }
    this.points = [];
    this.snowflakeSize = {
      height: stageHeight * scaleFactor,
      width: stageWidth * scaleFactor
    }
    this.velocity = null
    this.animationOffset = 0
  }

  previewLine(event) {
    let point = {x: event.x - stageWidth/2, y: event.y - stageHeight/2};
    let previousPointIndex = (this.points.length - 1) % this.points.length;
    console.log("previousPointIndex", previousPointIndex)
    let previousPoint = this.points[previousPointIndex];
    let branchIndex = 0;
    while (branchIndex < this.previewBranches.length) {
      this.previewBranches[branchIndex].clear();
      this.previewBranches[branchIndex].lineStyle(2, 0xFFFFFF, 0.8);
      this.previewBranches[branchIndex].moveTo(previousPoint.x, previousPoint.y);
      this.previewBranches[branchIndex].lineTo(point.x, point.y);
      branchIndex = branchIndex + 1;
    }
  }

  addLine(event) {
    let point = {x: event.x - stageWidth/2, y: event.y - stageHeight/2};
    this.points.push(point);
    let previousPointIndex = (this.points.length - 2) % this.points.length;
    console.log("previousPointIndex", previousPointIndex)
    let previousPoint = this.points[previousPointIndex];
    let branchIndex = 0;
    while (branchIndex < this.branches.length) {
      this.branches[branchIndex].moveTo(previousPoint.x, previousPoint.y);
      this.branches[branchIndex].lineTo(point.x, point.y);
      branchIndex = branchIndex + 1;
    }

  }

  calculateSize() {
    let biggestPoint = {
      x: 0,
      y: 0
    }
    this.points.forEach((point) => {
      if ((point.x**2 + point.y**2) > (biggestPoint.x**2 + biggestPoint.y**2))
      {
        biggestPoint = point
      }
    })
    let snowflakeSize = Math.sqrt(biggestPoint.x**2 + biggestPoint.y**2) * 2
    return snowflakeSize
  }


  fillSnowflake() {
    console.log("filling snowflake");
    let branchIndex = 0
    while (branchIndex < this.branches.length) {
      this.branches[branchIndex].clear();
      this.branches[branchIndex].lineStyle(4, 0xFFFFFF, 0.8);
      this.branches[branchIndex].beginFill(0xFFFFFF, 0.9);
      this.branches[branchIndex].moveTo(this.points[0].x, this.points[0].y);
      this.points.forEach((point) => {
        this.branches[branchIndex].lineTo(point.x, point.y);
      })
      this.branches[branchIndex].closePath();
      this.branches[branchIndex].endFill();
      branchIndex = branchIndex + 1;
    }
  }

  animateSnowflake() {
    this.velocity = Math.sqrt(this.calculateSize()) * 4
    this.isFinished = true
    this.deletePreview()
    this.shrink()
    this.moveToTop()
    setInterval(this.renderFrame, 1000 / frameRate);
  }

  renderFrame = () => {
    let snowflakeTouchesBottom = (this.snowflakeContainer.position.y >= stageHeight)
        && (this.snowflakeContainer.position.y < stageHeight + this.velocity / frameRate)

    if (snowflakeTouchesBottom) {

      fallenSnow.crumpleSnowflake(this)

    }
    let snowflakeBelowBottom = this.snowflakeContainer.position.y >= stageHeight + this.snowflakeSize.height
    if (snowflakeBelowBottom) {
      this.moveToTop();
    } else {
      this.snowflakeContainer.position.y += this.velocity / frameRate;
      let xSpeed = Math.random() / frameRate
          * Math.sin((this.snowflakeContainer.position.y + this.animationOffset) / 50)
          * Math.sin((this.snowflakeContainer.position.y + this.animationOffset) / 500);
      this.snowflakeContainer.position.x += xSpeed * this.calculateSize() / 5;
      this.snowflakeContainer.rotation -= xSpeed
    }
  }



  shrink = () => {
    this.snowflakeContainer.scale.x *= scaleFactor
    this.snowflakeContainer.scale.y *= scaleFactor
  }

  moveToTop = () => {
    let snowflakeX = Math.random() * stageWidth
    this.snowflakeContainer.position.y = -1 * this.snowflakeSize.height
    this.snowflakeContainer.position.x = snowflakeX
    this.animationOffset = stageHeight * Math.random()
  }

  deletePreview = () => {
    this.previewBranches.forEach((branch) => {
      branch.clear()
    })
  }


}


