function setup() {
  createCanvas(960, 540);
  bubble1 = new Bubble(100, 450, 30);
  bubble2 = new Bubble(200, 200, 45);
  bubble3 = new Bubble(400, 190, 20);
  bubble4 = new Bubble(600, 250, 15);
  bubble5 = new Bubble(800, 320, 40);
}

function draw() {
  background("black");

  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
  bubble3.move();
  bubble3.show();
  bubble4.move();
  bubble4.show();
  bubble5.move();
  bubble5.show();
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
  show() {
    push();
    stroke(255);
    strokeWeight(4);
    fill("teal");
    ellipse(this.x, this.y, this.r * 2);
    pop();
  }
}
