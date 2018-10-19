function Food() {
  this.x = floor(random(windowWidth/rectangleSize))*rectangleSize
  this.y = rectangleSize;//floor(random(windowHeight/rectangleSize))*rectangleSize

  this.show = function() {
    fill(255)
    rect(this.x, this.y, rectangleSize, rectangleSize)
  }
}
