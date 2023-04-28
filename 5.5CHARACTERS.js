//creates ghost class
class Ghost {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.ghostColor = random(randomColor);
    this.isMovingRight = false;
    this.addX = addX;
  }
  move() {
    this.x = this.x + this.addX;
    //reverse if ghost hits wall
    let isTooFarLeft = this.x < 0;
    let isTooFarRight = this.x > width;
    if (isTooFarLeft || isTooFarRight) {
      this.addX = -this.addX;
      this.isMovingRight = !this.isMovingRight;
      this.y = random(height);
    }
  }
  show() {
    push();
    translate(this.x, this.y);
    scale(this.r);
    noStroke();
    fill(this.ghostColor);
    arc(0, 0, 41, 40, 180, 0);
    rect(-21, 0, 42, 15);
    triangle(-21, 15, -7, 15, -14, 28);
    triangle(-7, 15, 7, 15, 0, 28);
    triangle(7, 15, 21, 15, 14, 28);
    
    //changes Ghost to face moving direction
    if (this.isMovingRight) {
      push();
      fill("white");
      ellipse(-2, -1, 10, 14);
      ellipse(12, -1, 10, 14);
      pop();
      push();
      fill("blue");
      ellipse(14, -1, 6, 7);
      ellipse(0, -1, 6, 7);
      pop();
    } else {
      push();
      fill("white");
      ellipse(-11, -1, 10, 14);
      ellipse(3, -1, 10, 14);
      pop();
      push();
      fill("blue");
      ellipse(-13, -1, 6, 7);
      ellipse(1, -1, 6, 7);
      pop();
    }
    pop();
  }
}

//creates Pacman class
class Pacman {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.addX = -addX;
    this.isMovingRight = true;
    this.health = startHealth; 
  }
  move() {
    this.x = this.x + this.addX;
    //reverse if Pac-Man hits wall
    let isTooFarLeft = this.x < 0;
    let isTooFarRight = this.x > width;
    if (isTooFarLeft || isTooFarRight) {
      this.addX = -this.addX;
      this.isMovingRight = !this.isMovingRight;
      this.y = random(height);
    }
    //slowly removes health from Pac-Man
    this.health--;
  }
  show() {
    push();
  translate(this.x, this.y);
    scale(this.r)
  noStroke();
    let saturationAsPercent = 100 * (this.health)/ startHealth;
    fill("hsla(60," + saturationAsPercent + "%,50%,1)");
    //changes Pac-Man to face moving direction
    if(this.isMovingRight){
       arc(0, 0, 40, 40, 35, 325);
    }else{
    arc(0, 0, 40, 40, 210, 150);
    }
  pop();
}
}

