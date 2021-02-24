let getDistinctColor = ()=>{
    let blue = {r: 0, g: 0, b: 255}
    let red = {r: 255, g: 0, b: 0}
    let green = {r: 0, g: 255, b: 0}
    let purple = {r: 127, g:0, b: 255}
    let yellow = {r: 255, g: 255, b: 0}
    let orange = {r: 255, g: 127, b: 0}
    let black = {r: 0, g: 0, b: 0}

    let colors = [blue, red, green, purple, yellow, orange, black]
    let randomChoice = Math.floor(Math.random() * colors.length)
    return colors[randomChoice]
}

async function startProgram() {
    // while(true) {
    //     let randomAngle = Math.random() * 360
    //
    //     setMainLed(getDistinctColor())
    //     await roll(randomAngle, 30, 2)
    // }
    while(true) {
        let acceleration = Math.sqrt((getAcceleration().x ** 2) + (getAcceleration().y ** 2) + (getAcceleration().z ** 2))
        if(acceleration > 1) {
            await onCollision();
            await delay(2)
        } else{
            await delay(0.1)
        }
    }
}

async function onCollision() {
    await speak("Collision", false);
    setMainLed(getDistinctColor())
    let catEvasion = 90 + Math.floor(Math.random() * 18) * 10
    setHeading(getHeading() + catEvasion)
    setSpeed(20)
}

// registerEvent(EventType.onCollision, onCollision);
