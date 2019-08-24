class Player {
  constructor(game) {
    this.canvas = game.canvas
    this.image = game.image
    this.x = 250;
    this.y = 350;
  }


  drawPlayer() {
    this.image = new Image();
    this.image.src = 'images/car.png';

    this.image.addEventListener('load', function () {
      context.drawImage(this.image, this.y, this.x, 50, 65);
    });
  }
}