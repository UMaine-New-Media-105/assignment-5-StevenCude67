//creates cherry class
class Cherry {
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
    translate(this.x, this.y);
    scale(this.r);
    push();
    noStroke();
    fill("hsla(0,100%,50%,0.5)");
    ellipse(10, 3, 15);
    ellipse(0, 0, 15);
    pop();
    push();
    strokeWeight(2);
    stroke("hsla(119,100%,20%,0.3)");
    line(1, -6, 15, -18);
    line(12, -4, 15, -18);
    pop();
    pop();
  }
}

//creates orange class
class Orange {
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
    translate(this.x, this.y);
    scale(this.r);
    noStroke();
    fill("hsla(31,100%,58%, 0.5)");
    ellipse(0, 0, 30);
    fill("black");
    rect(-1, -13, 2);
    pop();
  }
}

//creates melon class
class Melon {
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
    translate(this.x, this.y);
    scale(this.r);
    noStroke();
    fill("hsla(109,97%,61%, 0.5)");
    ellipse(0, 0, 30);
    fill("hsla(151,93%,23%, 0.5)");
    rect(-3, -18, 5, 4);
    rect(-10, -20, 19, 3);
    pop();
  }
}

//creates key class
class SmallKey {
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
    translate(this.x, this.y);
    scale(this.r);
    noStroke();
    fill("hsla(0,0%,100%,0.5)");
    rect(0, -10, 6, 20);
    triangle(0, 10, 3, 14, 6, 10);
    rect(5, 5, 5, 3);
    rect(5, -1, 5, 3);
    fill("hsla(186,82%,85%,0.5)");
    rect(-3, -17, 12, 9);
    rect(-1, -21, 8, 4);
    fill("hsla(0,0%,0%, 0.5)");
    rect(-1, -18, 8, 3);
    pop();
  }
}
