let bubble = [];

function setup() {
  createCanvas(960, 540);
  
  for (let i = 0; i < 50; i++){
    bubble[i] = new Bubble(random(1, 900), random(1, 500), 20)
  }

}

function draw() {
  background("black");
 for (let i = 0; i < bubble.length; i++){
   bubble[i].move();
   bubble[i].show();
 }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  move() {
    this.x = this.x + random(-3, 3);
    this.y = this.y + random(-3, 3);
  }
  show() {
    push();
    stroke(255);
    strokeWeight(2);
    fill("red");
    ellipse(this.x, this.y, this.r * 2);
    pop();
  }
}
