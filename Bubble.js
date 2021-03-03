class Bubble {
  constructor(color, speed) {
    this.x = width / 2;
    this.y = height / 2;
    this.color = color;
    this.speed = speed;
  }


  wiggle() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }


  appear() {
    strokeWeight(2);
    fill(this.color);
    stroke(200);
    ellipse(this.x, this.y, 20, 20);
  }
}