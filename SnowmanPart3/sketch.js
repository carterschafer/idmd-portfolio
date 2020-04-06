// Created on 2/12/20 by Carter Schafer
// A snowman that moves, jumps, and moves eyes
// Jiggles when spacebar is pressed




// AS OF 4/6: Snowman is now an object, and there can be multiple snowmen, but they don't move. This is because they are passed one value for their position (this.posX, this.posY) and changing the global variable (posX, posY) doesn't change their position anymore.




// Direction of travel: -1=left, 1=right, 0=stationary
var dir = 0;
var ID;

// Everything relates to this point
var posX;
var posY;

// Body part definitions
var arm1;
var arm2;
var head;
var middle;
var lower;
var eye1;
var eye2;
var pupil1;
var pupil2;


// Body type specifications
var legWidth = 20
var legHeight = 60
var headWidth = 40
var eyeWidth = 15
var pupilWidth = 7

// Moving eyes
var eyeDirection = 0;

// Five individual Snowmen
var snowman;
var Snowmen = [];
var numSnowmen;



function setup() {
  createCanvas(800, 600);
  // Draw ground
  line(0, height - 50, width, height - 50);

  // Create Snowman objects and pass in parameters
  numSnowmen = 5;
  for (var i = 0; i < numSnowmen; i++) {
    snowman = new Snowman(130 * (i + 1), 465, i);
    Snowmen.push(snowman);
  }

}

function draw() {
  background(150, 150, 255);
  fill(50);
  textSize(20);
  text("Press space to animate", 280, 50);
  // Ground
  line(0, height - 50, width, height - 50);

  if (keyIsPressed && keyCode == 32) {
    translate(random(7), random(7));
  }

  // Call the methods on our new Snowman object
  for (var i = 0; i < 5; i++) {
    Snowmen[i].build();
  }

  //snow(random(width));


  if (keyIsDown(LEFT_ARROW)) {
    posX -= 3;
    dir = -1;
  } else if (keyIsDown(RIGHT_ARROW)) {
    posX += 3;
    dir = 1;
  } else {
    dir = 0;
  }

  // Jump when up arrow pressed
  if (keyIsDown(LEFT_ARROW) && posY == 465) {
    //posY -= 100;
    if (posY <= 465) {
      //posY += 50;
    }
  }

  eyeDirection = min(map(mouseX, 0, width, -5, 5), 5);


  /*
  if (keyIsDown(UP_ARROW)) {
    posY -= 3;
  }

  if (keyIsDown(DOWN_ARROW)) {
    posY += 3;
  }
  */
}


// Jump when up arrow pressed
/*
function keyPressed() {
  if (keyCode === UP_ARROW) {
    background(150, 150, 255);
    posY -= 5;
    drawMonster();
  }
}
*/

function Snowman(tempX, tempY, tempID) { // Constructor function

  var mx = map(mouseX, 0, width, 0, eyeWidth)
  var my = map(mouseY, 0, width, 0, eyeWidth)

  this.posX = tempX;
  this.posY = tempY;
  this.ID = tempID;

  this.build = function() {
    if (dir == 0) { // Snowman is not moving
      // ARMS
      stroke(0);
      fill(255);
      strokeWeight(5);
      if (dir == 0) {
        arm1 = line(this.posX - 10, this.posY - 55, this.posX - 50, this.posY - 20);
        arm2 = line(this.posX + 10, this.posY - 55, this.posX + 50, this.posY - 20);
      } else {
        arm1 = line(this.posX, this.posY - 55, this.posX, this.posY - 20);
      }


      // BODY
      strokeWeight(1);
      noStroke();
      fill(255);
      head = ellipse(this.posX, this.posY - 88, headWidth, headWidth);
      middle = ellipse(this.posX, this.posY - 35, 60, 60);
      lower = ellipse(this.posX, this.posY + 40, 85, 85);


    } else { // Snowman is moving right or left
      // BODY
      strokeWeight(1);
      noStroke();
      fill(255);
      head = ellipse(this.posX, this.posY - 88, headWidth, headWidth);
      middle = ellipse(this.posX, this.posY - 35, 60, 60);
      lower = ellipse(this.posX, this.posY + 40, 85, 85);


      // ARMS
      stroke(0);
      fill(255);
      strokeWeight(5);
      if (dir == 0) {
        arm1 = line(this.posX - 10, this.posY - 55, this.posX - 50, this.posY - 20);
        arm2 = line(this.posX + 10, this.posY - 55, this.posX + 50, this.posY - 20);
      } else {
        arm1 = line(this.posX, this.posY - 55, this.posX, this.posY - 20);
      }
    }


    // EYES
    stroke(0);
    strokeWeight(1);
    if (dir == 0) {
      eye1 = rect(this.posX - eyeWidth - 5, this.posY - 105, eyeWidth, eyeWidth);
      eye2 = rect(this.posX + 5, this.posY - 105, eyeWidth, eyeWidth);
      fill(0);
      pupil1 = ellipse(this.posX - eyeWidth / 2 - 5 + eyeDirection, this.posY - 105 + eyeWidth / 2, pupilWidth, pupilWidth);
      pupil2 = ellipse(this.posX + eyeWidth / 2 + 5 + eyeDirection, this.posY - 105 + eyeWidth / 2, pupilWidth, pupilWidth);
    } else if (dir == -1) { // Left
      //eye1 = rect(this.posX - eyeWidth - 5, this.posY - 105, eyeWidth, eyeWidth);
      fill(0);
      pupil1 = ellipse(this.posX - eyeWidth / 2 - 5, this.posY - 105 + eyeWidth / 2, pupilWidth, pupilWidth);
    } else if (dir == 1) { // Right
      //eye2 = rect(this.posX + 5, this.posY - 105, eyeWidth, eyeWidth);
      fill(0);
      pupil2 = ellipse(this.posX + eyeWidth / 2 + 5, this.posY - 105 + eyeWidth / 2, pupilWidth, pupilWidth);
    }
  }
}


//function snow(randX) {
//  var flake = ellipse(randX, 0, 10, 10);
//}