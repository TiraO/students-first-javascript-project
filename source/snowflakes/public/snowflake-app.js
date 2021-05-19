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

    let onTap = (event) => {
        if (isDoubleClick()) {
            snowflake.finishSnowflake(event);
        } else if (snowflake.isFinished) {

        } else {
            snowflake.addLine(event);
            console.log(event)
        }
    }
    app.view.addEventListener("mousedown", (event)=>{
        let point = {x: event.offsetX, y: event.offsetY}
        onTap(point);
    });
    app.view.addEventListener("touchstart", (event)=>{
        let point = {x: event.touches[0].clientX, y: event.touches[0].clientY}
        onTap(point);
    })
    window.onGoButtonPress = ()=> {
        snowflake.velocity = Math.sqrt(snowflake.calculateSize()) * 4
        snowflake.isFinished = true
        snowflake.shrink()
        snowflake.moveToTop()
        setInterval(snowflake.renderFrame, 1000 / frameRate);
        snowflake = new Snowflake(app.stage, window.innerWidth, window.innerHeight);
        let instructions = document.getElementsByClassName("instructions")[0]
        instructions.style="display:none"
    }
    window.onDeleteButtonPress = ()=> {
        app.stage.removeChild(snowflake.snowflakeContainer);
        snowflake = new Snowflake(app.stage, window.innerWidth, window.innerHeight);
    }
}



window.addEventListener('load', initialize);