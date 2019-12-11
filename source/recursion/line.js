const LineSegment = require("./line_segment.js");

function printLine(lineSegment) {
    if (lineSegment) {
        console.log(lineSegment.content);
        printLine(lineSegment.next);
    } else {
        console.log("End");
    }
}

function makeLine(length) {
    let lineSegment;
    for (let i = 0; i < length; i++) {
        lineSegment = new LineSegment("birds" + i, lineSegment);
    }
    return lineSegment;
}

let lineSegment = makeLine(23);

printLine(lineSegment);
