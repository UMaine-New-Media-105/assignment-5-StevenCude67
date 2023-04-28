//Pac-Man Simulation by Steven Cude
//Creates Simulation where Pac-Man and Ghosts go back and forth. The ghosts will bredd of they make contact, but only after a certain amoutn of time.

//creates array for the background fruits
cherry = [];
orange = [];
melon = [];
smallKey = [];
//creates random arra of colors for ghosts
randomColor = ["red", "orange", "cyan", "pink"];

function setup() {
  createCanvas(960, 540);
  angleMode(DEGREES);
  //Can change these to set parimeters for simulation
  spriteWidth = 80;
  //sets the value of how long until ghosts can spawn
  spawnDelay = 90;
  //Speed of breeders
  addX = -7;
  //sets health of Pac-Man
  startHealth = 600
  //how many breeders there are
  breedersToStart = 50;
  //how many catchers there are
  catchersToStart = 2;
  //Variables that will change as the simulation goes
  framesDelayed = 0;

  //creates background fruits that jitter around
  for (let i = 0; i < 13; i++) {
    cherry[i] = new Cherry(random(1, 900), random(1, 500), random(0.5, 2));
    orange[i] = new Orange(random(1, 900), random(1, 500), random(0.5, 2));
    melon[i] = new Melon(random(1, 900), random(1, 500), random(0.5, 2));
    smallKey[i] = new SmallKey(random(1, 900), random(1, 500), random(0.5, 2));
  }

  //creates breeders that randomly spawn on the screen
  breeders = [];
  for (
    let breedersDefined = 0;
    breedersDefined < breedersToStart;
    breedersDefined++
  ) {
    let x = random(width);
    let y = random(height);
    breeders.push(new Ghost(x, y, 1));
  }

  //creates catchers that randomly spawn on the screen
  catchers = [];
  for (
    let catchersDefined = 0;
    catchersDefined < catchersToStart;
    catchersDefined++
  ) {
    let x = random(width);
    let y = random(height);
    catchers.push(new Pacman(x, y, 1.5));
  }
}

function draw() {
  background("hsl(244,78%,7%)");
  framesDelayed++; //This will stop one ghost from breeding multiple times
  for (let i = 0; i < cherry.length; i++) {
    //spawns cherries
    cherry[i].move();
    cherry[i].show();

    //spawns oranges
    orange[i].move();
    orange[i].show();

    //spawns melons
    melon[i].move();
    melon[i].show();

    //spawns keys
    smallKey[i].move();
    smallKey[i].show();
  }

  //spawns breeders
  for (
    let breedersShown = 0;
    breedersShown < breeders.length;
    breedersShown++
  ) {
    let thisBreeder = breeders[breedersShown];
    thisBreeder.move();
    thisBreeder.show();
    //look through potential mates to check for any overlaps
    //but only if there's been a delay
    if (framesDelayed > spawnDelay) {
      for (
        let matesChecked = 0;
        matesChecked < breeders.length;
        matesChecked++
      ) {
        let proposedMate = breeders[matesChecked];
        let isDifferentBreeder = breedersShown !== matesChecked;
        let spriteDistance = dist(
          thisBreeder.x,
          thisBreeder.y,
          proposedMate.x,
          proposedMate.y
        );
        //only breeds if certain distance away
        if (isDifferentBreeder && isTouching(thisBreeder, proposedMate)) {
          let x = random(width);
          let y = random(height);
          breeders.push(new Ghost(x, y, 1));
          framesDelayed = 0;
          break;
        }
      }
    }
  }

  //spawns catchers
  for (
    let catchersShown = 0;
    catchersShown < catchers.length;
    catchersShown++
  ) {
    let thisCatcher = catchers[catchersShown];
    thisCatcher.move();
    thisCatcher.show();
    //Remove catcher if it starves
    if (thisCatcher.health < 0){
      catchers.splice(catchersShown, 1);
    }
    //Removes breeder if a catcher touches it
    //Look at the breeders and checks for an overlap
    for (let breedersLeft = 0; breedersLeft < breeders.length; breedersLeft++){
      let proposedCatch = breeders[breedersLeft];
      if (isTouching(thisCatcher, proposedCatch)){
        breeders.splice(breedersLeft, 1);
        thisCatcher.health = startHealth
        break;
      }
    }
  }

  //function that checks for distane between sprites
  function isTouching(sprite1, sprite2) {
    let spriteDistance = dist(sprite1.x, sprite1.y, sprite2.x, sprite2.y);
    if (spriteDistance < spriteWidth) {
      return true;
    } else {
      return false;
    }
  }
}
