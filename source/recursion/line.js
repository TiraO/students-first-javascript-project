const LineSegment = require("./line_segment.js");

function printLine(lineSegment) {
    console.log(lineSegment);
}
function makeLine(length) {
    let content = "wood";
    let next = null;
    let lineSegment = new LineSegment(content, next);
    let branchSegment;
    for (let i=0; i<length; i++) {
        branchSegment = new LineSegment("birds" +i, branchSegment);
    }
    return branchSegment;
}

let lineSegment = makeLine(23);

printLine(lineSegment);
