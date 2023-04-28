//Pac-Man Simulation by Steven Cude
//Creates Simulation where Pac-Man and Ghosts go back and forth

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
  
  //Speed of breeders
  addX = -7;
  //how many breeders there are
  breedersToStart = 5;
  //how many catchers there are
  catchersToStart = 5;

  //creates background fruits that jitter around
  for (let i = 0; i < 13; i++) {
    cherry[i] = new Cherry(random(1, 900), random(1, 500), random(0.5, 2));
    orange[i] = new Orange(random(1, 900), random(1, 500), random(0.5, 2));
    melon[i] = new Melon(random(1, 900), random(1, 500), random(0.5, 2));
    smallKey[i] = new SmallKey(random(1, 900), random(1, 500), random(0.5, 2));
  }

  //creates breeders that randomly spawn on the screen
  breeders = [];
  for (let breedersDefined = 0; breedersDefined < breedersToStart; breedersDefined++) {
    let x = random(width);
    let y = random(height);
    breeders.push(new Ghost(x, y, 1));
  }

  //creates catchers that randomly spawn on the screen
  catchers = [];
  for (let catchersDefined = 0; catchersDefined < catchersToStart; catchersDefined++) {
    let x = random(width);
    let y = random(height);
    catchers.push(new Pacman(x, y, 1.5));
  }
}

function draw() {
  background("hsl(244,78%,7%)");
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
  }
}
