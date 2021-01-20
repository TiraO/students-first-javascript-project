let frameRate = 60

class Snowflake {
  constructor(stage) {
    this.branches = []
    let branchCount = 0;
    while (branchCount < 12) {
      let branch = new PIXI.Graphics();
      branch.position.x = 400;
      branch.position.y = 300;
      branch.rotation = branchCount * 2 * Math.PI / 12;
      branch.lineStyle(2, 0xFFFFFF, 0.8);
      if (branchCount % 2 == 1) {
        branch.scale.x = -1;
      }
      this.branches.push(branch)
      stage.addChild(branch);
      branchCount = branchCount + 1
    }
    this.points = [];
  }

  addLine(event) {
    let point = {x: event.offsetX - 400, y: event.offsetY - 300};
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

  }

  renderFrame = ()=> {
    let velocity = 600 / 4
    this.branches.forEach((branch)=>{
      branch.position.y += velocity / frameRate;
    })
  }

  shrink = ()=> {
    this.branches.forEach((branch)=>{
      branch.scale.x *= 1/8
      branch.scale.y *= 1/8
    })
  }

  moveToTop = ()=> {
    let snowflakeX = Math.random() * 800
    this.branches.forEach((branch)=>{
      branch.position.y = 0
      branch.position.x = snowflakeX
    })
  }


}

let initialize = () => {
  const app = new PIXI.Application({antialias: true});

// The application will create a canvas element for you that you
// can then insert into the DOM.
  document.body.appendChild(app.view);
  let snowflake = new Snowflake(app.stage);

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
      snowflake.shrink()
      snowflake.moveToTop()
      setInterval(snowflake.renderFrame, 1000 / frameRate);
    } else {
      snowflake.addLine(event);
    }
  });


}


window.addEventListener('load', initialize);