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
        if(isCollision()) {
            await onCollision();
            await delay(2)
        } else{
            await delay(0.1)
        }
    }
}
function isCollision() {
    let acceleration = Math.sqrt((getAcceleration().x ** 2) + (getAcceleration().y ** 2) + (getAcceleration().z ** 2))
    if(acceleration > 2) {
        return true
    } else if(Math.sqrt((getVelocity().x ** 2) + (getVelocity().y ** 2))<10) {
        return true
    } else {
        return false
    }
}

let locations = []

async function onCollision() {
    locations.push(getLocation())
    setMainLed(getDistinctColor())
    let nearPreviousLocation = false
    if(nearPreviousLocation) {
        setHeading(getHeading() - 90)
        await speak("Left", false);
    } else{
        setHeading(getHeading() + 90)
        await speak("right", false);
    }
    setSpeed(150)

}