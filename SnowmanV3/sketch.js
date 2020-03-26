// Created on 2/12/20 by Carter Schafer
// A snowman that moves, jumps, and moves eyes
// Currently not using the page method


var page;
// Direction of travel: -1=left, 1=right, 0=stationary
var dir = 0;

// Everything relates to this point
var posX = 300;
var posY = 465;

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


function setup() {
  createCanvas(600, 600);
  // Draw ground
  line(0, height - 50, width, height - 50);
}

function draw() {
  background(150, 150, 255);
  // Ground
  line(0, height - 50, width, height - 50);
  drawSnowman();

  if (page == 0) {
    // add code here as you complete step 4
  } else {
    // add code here as you complete step 5
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

function drawSnowman() {

  var mx = map(mouseX, 0, width, 0, eyeWidth)
  var my = map(mouseY, 0, width, 0, eyeWidth)

  // Order of drawing matters!
  if (dir == 0) { // Snowman is not moving
    arms();
    body();
    eyes();
  } else { // Right or left
    body();
    arms();
    eyes();
  }

}

// Move arms based on movement
function arms() {
  stroke(0);
  fill(255);
  strokeWeight(5);
  if (dir == 0) {
    arm1 = line(posX - 10, posY - 55, posX - 50, posY - 20);
    arm2 = line(posX + 10, posY - 55, posX + 50, posY - 20);
  } else {
    arm1 = line(posX, posY - 55, posX, posY - 20);
  }

}

function body() {
  if (keyIsPressed && keyCode == 32) {
    translate(random(7), random(7));
  }
  strokeWeight(1);
  noStroke();
  fill(255);
  head = ellipse(posX, posY - 88, headWidth, headWidth);
  middle = ellipse(posX, posY - 35, 60, 60);
  lower = ellipse(posX, posY + 40, 85, 85);
}

function eyes() {
  stroke(0);
  strokeWeight(1);
  if (dir == 0) {
    eye1 = rect(posX - eyeWidth - 5, posY - 105, eyeWidth, eyeWidth);
    eye2 = rect(posX + 5, posY - 105, eyeWidth, eyeWidth);
    fill(0);
    pupil1 = ellipse(posX - eyeWidth / 2 - 5 + eyeDirection, posY - 105 + eyeWidth / 2, pupilWidth, pupilWidth);
    pupil2 = ellipse(posX + eyeWidth / 2 + 5 + eyeDirection, posY - 105 + eyeWidth / 2, pupilWidth, pupilWidth);
  } else if (dir == -1) { // Left
    //eye1 = rect(posX - eyeWidth - 5, posY - 105, eyeWidth, eyeWidth);
    fill(0);
    pupil1 = ellipse(posX - eyeWidth / 2 - 5, posY - 105 + eyeWidth / 2, pupilWidth, pupilWidth);
  } else if (dir == 1) { // Right
    //eye2 = rect(posX + 5, posY - 105, eyeWidth, eyeWidth);
    fill(0);
    pupil2 = ellipse(posX + eyeWidth / 2 + 5, posY - 105 + eyeWidth / 2, pupilWidth, pupilWidth);
  }

}



function snow(randX) {
  var flake = ellipse(randX, 0, 10, 10);
}