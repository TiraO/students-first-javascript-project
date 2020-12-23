class Snowflake {
  constructor(stage) {
    this.branches = []
    let branchCount = 0;
    while (branchCount < 6) {
      let branch = new PIXI.Graphics();
      branch.rotation = branchCount * 2 * Math.PI / 6;
      branch.lineStyle(2, 0xFFFFFF, 0.8);
      this.branches.push(branch)
      stage.addChild(branch);
      branchCount = branchCount + 1
    }
    this.points = [];
  }

  addLine(event) {
    let point = {x: event.offsetX, y: event.offsetY};
    this.points.push(point);
    let previousPointIndex = (this.points.length - 2) % this.points.length;
    console.log("previousPointIndex", previousPointIndex)
    let previousPoint = this.points[previousPointIndex];
    this.branches[0].moveTo(previousPoint.x, previousPoint.y);
    this.branches[0].lineTo(point.x, point.y);
  }

  finishSnowflake() {
    console.log("finishing snowflake");
    this.branches[0].clear();
    this.branches[0].lineStyle(4, 0xFFFFFF, 0.8);
    this.branches[0].beginFill(0xFFFFFF, 0.9);
    this.branches[0].moveTo(this.points[0].x, this.points[0].y);
    this.points.forEach((point) => {
      this.branches[0].lineTo(point.x, point.y);
    })
    this.branches[0].closePath();
    this.branches[0].endFill();
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
    } else {
      snowflake.addLine(event);
    }
  });


}


window.addEventListener('load', initialize);