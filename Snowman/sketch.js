// Everything relates to this point
  var posX = 200
  var posY = 200

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(150, 150, 255, 10);
  
  //snow(random(width));
  
  
  if (keyIsDown(LEFT_ARROW)) {
    posX -= 3;
  }
  
  if (keyIsDown(RIGHT_ARROW)) {
    posX += 3;
  }
  if (keyIsDown(UP_ARROW)) {
    posY -= 3;
  }
  
  if (keyIsDown(DOWN_ARROW)) {
    posY += 3;
  }
  
  
  // Body type specifications
  var legWidth = 20
  var legHeight = 60
  var headWidth = 40
  var eyeWidth = 15
  var pupilWidth = 7
  
  var mx = map(mouseX, 0, width, 0, eyeWidth)
  var my = map(mouseY, 0, width, 0, eyeWidth)
  
  
  //var leg1 = rect(posX-legWidth,posY,legWidth,legHeight)
  //var leg2 = rect(posX,posY,legWidth,legHeight)
  stroke(0)
  fill(255)
  strokeWeight(5)
  var arm1 = line(posX-10,posY-55,posX-50,posY-20)
  var arm2 = line(posX+10,posY-55,posX+50,posY-20)
  strokeWeight(1)
  noStroke()
  var head = ellipse(posX,posY-88,headWidth,headWidth)
  var middle = ellipse(posX,posY-35,60,60)
  var lower = ellipse(posX,posY+40,85,85)
  stroke(0)
  var eye1 = rect(posX-eyeWidth-5,posY-105,eyeWidth,eyeWidth)
  var eye2 = rect(posX+5,posY-105,eyeWidth,eyeWidth)
  fill(0)
  var pupil1 = ellipse(posX-eyeWidth/2-5,posY-105+eyeWidth/2,pupilWidth,pupilWidth)
  var pupil2 = ellipse(posX+5+eyeWidth/2,posY-105+eyeWidth/2,pupilWidth,pupilWidth)
  
}

function snow(randX) {
  var flake = ellipse(randX,0,10,10)
}



