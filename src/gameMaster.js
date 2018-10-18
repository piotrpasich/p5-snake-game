function GameMaster() {
  this.snake = new Snake()
  this.food = new Food()

  this.update = function() {
    this.food.show()
    this.snake.update()

    if(this.didHitWalls() || this.didHitSnake()) {
      this.snake = new Snake()
      this.food = new Food()

      return false
    }

    if(this.ateFood()) {
      this.snake.eatFood()
      this.food = new Food()
    }

    this.snake.show()
  }

  this.didHitSnake = function() {
    for(var i = 0;i < this.snake.length - 1; i++) {
      if(this.snake.tail[i].x === this.snake.x &&
         this.snake.tail[i].y === this.snake.y ) {
        return true
      }
    }
    return false
  }

  this.didHitWalls = function() {
    if(this.snake.x < 0 || this.snake.y < 0 ||
      this.snake.x > windowWidth ||
      this.snake.y > windowHeight ) {

      return true
    }
    return false
  }

  this.keyPressed = function(keyCode) {
    switch(keyCode.key) {
      case 'ArrowUp':
        this.snake.moveUp()
        break
      case 'ArrowDown':
        this.snake.moveDown()
        break
      case 'ArrowLeft':
        this.snake.moveLeft()
        break
      case 'ArrowRight':
        this.snake.moveRight()
        break
    }
  }

  this.ateFood = function() {
    return (this.snake.x === this.food.x &&
        this.snake.y === this.food.y)
  }
}