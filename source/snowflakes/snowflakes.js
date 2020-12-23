class Snowflake {
  constructor(graphics) {
    this.graphics = graphics;
    this.graphics.lineStyle(2, 0xFFFFFF, 0.8);
    this.points = [];
  }

  addLine(event) {
    let point = {x: event.offsetX, y: event.offsetY};
    this.points.push(point);
    let previousPointIndex = (this.points.length - 2) % this.points.length;
    console.log("previousPointIndex", previousPointIndex)
    let previousPoint = this.points[previousPointIndex];
    this.graphics.moveTo(previousPoint.x, previousPoint.y);
    this.graphics.lineTo(point.x, point.y);
  }

  finishSnowflake() {
    console.log("finishing snowflake");
    this.graphics.clear();
    this.graphics.lineStyle(4, 0xFFFFFF, 0.8);
    this.graphics.beginFill(0xFFFFFF, 0.9);
    this.graphics.moveTo(this.points[0].x, this.points[0].y);
    this.points.forEach((point)=>{
      this.graphics.lineTo(point.x, point.y);
    })
    this.graphics.lineTo(this.points[0].x, this.points[0].y);
    this.graphics.closePath();
    this.graphics.endFill();
  }


}

let initialize = () => {
  const app = new PIXI.Application({antialias: true});

// The application will create a canvas element for you that you
// can then insert into the DOM.
  document.body.appendChild(app.view);
  const graphics = new PIXI.Graphics();

  app.stage.addChild(graphics);
  graphics.lineStyle(2, 0xFEEB77, 1);
  graphics.lineTo(150, 100);
  let snowflake = new Snowflake(graphics);
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