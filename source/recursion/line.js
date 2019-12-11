const LineSegment = require("./line_segment.js");

function printLine(lineSegment) {
    console.log(lineSegment.content);
    console.log("************************");
    console.log(lineSegment.next.content);
    console.log("************************");
    console.log(lineSegment.next.next.content);
}
function makeLine(length) {
    let lineSegment;
    for (let i=0; i<length; i++) {
        lineSegment = new LineSegment("birds" +i, lineSegment);
    }
    return lineSegment;
}

let lineSegment = makeLine(23);

printLine(lineSegment);
