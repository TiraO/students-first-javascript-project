let previousSnowflakePoints = [];
let arraysMatch = (array1, array2) => {
  if (array1.length != array2.length) {
    return false;
  }

  let foundMismatch = false;
  array1.forEach((point, index) => {
    if (foundMismatch == false) {
      foundMismatch = (point.x != array2[index].x) || (point.y != array2[index].y)
    }
  })
  return !foundMismatch
}
let snowflakeAlreadyExists = (points) => {
  return arraysMatch(previousSnowflakePoints, points)
}
let socket;
let serverTalk = (stage) => {
  socket = io(window.location.href);
  socket.on("hello world", (data) => {
    console.log("hello world happened", data);
  });
  socket.on("snowflake", (points) => {

    if (!snowflakeAlreadyExists(points)) {
      let snowflake = new Snowflake(stage)
      snowflake.points = points
      snowflake.fillSnowflake();
      snowflake.animate();
    }

  })
}

let stageHeight;
let stageWidth;
let fallenSnow;

let initialize = () => {
  stageHeight = window.innerHeight
  stageWidth = window.innerWidth
  const app = new PIXI.Application({
    antialias: true,
    width: stageWidth,
    height: stageHeight,
    resizeTo: window,
    transparent: true
  });
  serverTalk(app.stage)
  let glContext = app.renderer.context.gl
  fallenSnow = new FallenSnow(app, glContext);


// The application will create a canvas element for you that you
// can then insert into the DOM.
  document.body.appendChild(app.view);
  let valentine = new Valentine(app.stage)


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
      valentine.fillSnowflake(point);
    } else if (valentine.isFinished) {

    } else {
      valentine.addLine(point);
      console.log(point)
    }
  }
  let onMove = (point) => {
    if (valentine.points.length > 0) {
      valentine.previewLine(point);
    }
  }
  app.view.addEventListener("mousedown", (event) => {
    let point = {x: event.offsetX, y: event.offsetY}
    onTap(point);
  });
  app.view.addEventListener("touchend", (event) => {
    let point = {x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY}
    onTap(point);
  })
  app.view.addEventListener("mousemove", (event) => {
    let point = {x: event.offsetX, y: event.offsetY}
    onMove(point)
  })
  app.view.addEventListener("touchmove", (event) => {
    let point = {x: event.touches[0].clientX, y: event.touches[0].clientY}
    onMove(point)
  })

  window.onGoButtonPress = () => {
    valentine.animate()
    socket.emit("upload snowflake", valentine.points)
    previousSnowflakePoints = valentine.points
    valentine = new Valentine(app.stage);
    let instructions = document.getElementsByClassName("instructions")[0]
    instructions.style = "display:none"

  }
  window.onDeleteButtonPress = () => {
    app.stage.removeChild(valentine.snowflakeContainer);
    valentine = new Valentine(app.stage, window.innerWidth, window.innerHeight);
  }
}


window.addEventListener('load', initialize);