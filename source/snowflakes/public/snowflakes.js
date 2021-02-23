let frameRate = 60

class Snowflake {
  constructor(stage, stageWidth, stageHeight) {
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
    this.points = [];
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
  }

  addLine(event) {
    let point = {x: event.offsetX - this.stageWidth/2, y: event.offsetY - this.stageHeight/2};
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

  finishSnowflake() {
    console.log("finishing snowflake");
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
    this.isFinished = true
  }

  renderFrame = () => {
    let velocity = this.stageHeight / 8
    let snowflakeAtBottom = this.snowflakeContainer.position.y >= this.stageHeight
    if (snowflakeAtBottom) {
      this.moveToTop();
    } else {
      this.snowflakeContainer.position.y += velocity / frameRate;
    }
  }

  shrink = () => {
    this.snowflakeContainer.scale.x *= 1 / 8
    this.snowflakeContainer.scale.y *= 1 / 8
  }

  moveToTop = () => {
    let snowflakeX = Math.random() * this.stageWidth
    this.snowflakeContainer.position.y = 0
    this.snowflakeContainer.position.x = snowflakeX
  }


}


let initialize = () => {
  const app = new PIXI.Application({antialias: true, width: window.innerWidth, height: window.innerHeight});

// The application will create a canvas element for you that you
// can then insert into the DOM.
  document.body.appendChild(app.view);
  let snowflake = new Snowflake(app.stage, window.innerWidth, window.innerHeight);

  let previousClickTime = new Date().valueOf();
  let isDoubleClick = () => {
    let now = new Date().valueOf();
    let timeSinceLastClick = now - previousClickTime;
    previousClickTime = new Date().valueOf();
    console.log(timeSinceLastClick);
    return timeSinceLastClick < 250;
  }
  app.view.addEventListener("mousedown", (event) => {
    if (isDoubleClick()) {
      snowflake.finishSnowflake(event);
    } else if (snowflake.isFinished) {
      snowflake.shrink()
      snowflake.moveToTop()
      setInterval(snowflake.renderFrame, 1000 / frameRate);
    } else {
      snowflake.addLine(event);
    }
  });


}


window.addEventListener('load', initialize);