let snowflakeAlreadyExists = (points)=>{
 return previousSnowflakePoints == points
}
let socket;
let serverTalk = (stage) => {
  socket = io(window.location.href);
  socket.on("hello world", (data) => {
    console.log("hello world happened", data);
  });
  socket.on("snowflake", (points)=> {

    if (!snowflakeAlreadyExists(points)) {
      let snowflake = new Snowflake(stage)
      snowflake.points = points
      snowflake.fillSnowflake();
      snowflake.animateSnowflake();
    }

  })
}

let stageHeight;
let stageWidth;
let previousSnowflakePoints;

let initialize = () => {
  stageHeight = window.innerHeight
  stageWidth = window.innerWidth
  const app = new PIXI.Application({antialias: true, width: stageWidth, height: stageHeight, resizeTo: window});
  serverTalk(app.stage)

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

  let onTap = (point) => {
    if (isDoubleClick()) {
      snowflake.fillSnowflake(point);
    } else if (snowflake.isFinished) {

    } else {
      snowflake.addLine(point);
      console.log(point)
    }
  }
  let onMove = (point) => {
    snowflake.previewLine(point);
  }
  app.view.addEventListener("mousedown", (event) => {
    let point = {x: event.offsetX, y: event.offsetY}
    onTap(point);
  });
  app.view.addEventListener("touchstart", (event) => {
    let point = {x: event.touches[0].clientX, y: event.touches[0].clientY}
    onTap(point);
  })
  app.view.addEventListener("mousemove", (event) => {
    let point = {x: event.offsetX, y: event.offsetY}
    onMove(point)
  })
  window.onGoButtonPress = () => {
    snowflake.animateSnowflake()
    socket.emit("upload snowflake", snowflake.points)
    previousSnowflakePoints = snowflake.points
    snowflake = new Snowflake(app.stage);
    let instructions = document.getElementsByClassName("instructions")[0]
    instructions.style = "display:none"

  }
  window.onDeleteButtonPress = () => {
    app.stage.removeChild(snowflake.snowflakeContainer);
    snowflake = new Snowflake(app.stage, window.innerWidth, window.innerHeight);
  }
}


window.addEventListener('load', initialize);