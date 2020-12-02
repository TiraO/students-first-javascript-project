class Rain {
  go(direction, onWhat = {name: ""}) {
    console.log("Rain went " + direction + " " + onWhat.name)
  }
}

class Spider {
  go(direction, onWhat = {name: ""}) {
    console.log("Spider went " + direction + " " + onWhat.name)

  }
}


class Spout {
  constructor() {
    this.name = "waterspout"
  }
}

let up = "up"
let down = "down"
let spider = new Spider();
let spout = new Spout();
let rain = new Rain();
let sun = {
  name: "The Sun",
  go: (direction, onWhat = {name: ""}) => {
    console.log("Sun went " + direction + " " + onWhat.name)

  }
}

spider.go(up, spout);
rain.go(down);
sun.go(up);
spider.go(up, spout);