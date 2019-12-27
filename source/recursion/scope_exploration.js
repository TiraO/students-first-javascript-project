function getOtherThing() {
    let scopeTest = "available";
    function someName() {
        console.log(scopeTest);
    }
    return someName
}
let otherThing = getOtherThing()
otherThing()