class FallenSnow {


    crumpleSnowflake = (snowflake) => {
        let snowPile = new PIXI.Graphics();
        let landingPoint = {x: snowflake.snowflakeContainer.position.x, y: stageHeight};
        let snowDepth = this.getSnowDepth(landingPoint)
        snowflake.stage.addChild(snowPile);
        snowPile.lineStyle(20, 0xFFFFFF, 0.8);
        let length = snowflake.calculateSize() * scaleFactor;
        let lineStart = {x: snowflake.snowflakeContainer.position.x, y: stageHeight - snowDepth};
        snowPile.moveTo(lineStart.x - length / 2, lineStart.y);
        snowPile.lineTo(lineStart.x + length / 2, lineStart.y);
    }
getPixelColor = (point) => {
    let canvas = document.getElementsByTagName("canvas")[0]
    let context = canvas.getContext("2d");
    let rgba = context.getImageData(point.x, point.y, 1, 1).data;
    return rgba
}

    getSnowDepth = (point) => {
        let white = 0xFFF;
        let pixelColor = white;
        let depth = 0;
        while (pixelColor == white) {

             depth += 1
            pixelColor = this.getPixelColor({x: point.x, y: point.y - depth});

        }
        return depth
    }
}