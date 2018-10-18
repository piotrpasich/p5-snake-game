
function Snake() {
  this.x = 0
  this.y = 0
  this.xspeed = 1
  this.yspeed = 0
  this.length = 1
  this.tail = []

  this.update = function() {
    this.x = this.x + (this.xspeed * rectangleSize)
    this.y = this.y + (this.yspeed * rectangleSize)
    for (var i = 0; i < this.length-1;i++) {
      this.tail[i] = this.tail[i+1]
    }
    this.tail[this.length-1] = { x: this.x, y: this.y }
  }

  this.show = function() {
    fill(255)

    for (var i = 0; i < this.length;i++) {
      rect(this.tail[i].x, this.tail[i].y, rectangleSize, rectangleSize)
    }
  }

  this.eatFood = function() {
    this.length++
    this.tail[this.length-1] = { x: this.x, y: this.y }
  }

  this.moveUp = function() {
    if (this.yspeed == 1) {
      return false
    }
    this.xspeed = 0
    this.yspeed = -1
  }

  this.moveDown = function() {
    if (this.yspeed == -1) {
      return false
    }
    this.xspeed = 0
    this.yspeed = 1
  }

  this.moveLeft = function() {
    if (this.xspeed == 1) {
      return false
    }
    this.xspeed = -1
    this.yspeed = 0
  }

  this.moveRight = function() {
    if (this.xspeed == -1) {
      return false
    }
    this.xspeed = 1
    this.yspeed = 0
  }
}
