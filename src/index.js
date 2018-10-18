
let gameMaster
const rectangleSize = 10
const windowHeight = 500
const windowWidth = 500

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30)
  gameMaster = new GameMaster()
}

function draw() {
  background(51)
  gameMaster.update()
}

function keyPressed(keyCode) {
  gameMaster.keyPressed(keyCode)
}


