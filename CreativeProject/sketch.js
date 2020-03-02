// Initial variables: x, y, and radius
var x;
var y;
var fCount; // Frame count
var rad = 30;
var mGrad; // Gradient
var on = true;
var fr = 17; // Frame rate

function setup() {
  createCanvas(1440, 800);
  Gradient();
  // Slowing frame rate creates faded trail of circles
  frameRate(fr);
  textSize(50);
  textAlign(CENTER);
}

function draw() {
  x = mouseX;
  y = mouseY;
  
  Circle();
  Gradient();
  if (mouseIsPressed) {
    Line(x,y,0,0);
    Line(x,y,width,0);
    Line(x,y,width,height);
    Line(x,y,0,height);
  }
  
  
  if (keyIsPressed) {
    fill(fCount-30,mGrad-30,255-fCount-30);
    strokeWeight(1);
    if (keyCode == UP_ARROW) {
      fr += 1;
    } else if (keyCode == DOWN_ARROW) {
      fr -= 1;
    }
    frameRate(fr);
    text(fr, width/2, height-50);
  }
}


function Gradient() {
  strokeWeight(1);
  // Access frame count and animate gradient
  fCount = smoothNum(frameCount % 256);
  
  for (let i = 0; i < height; i++) {
    mGrad = map(i,0,height,0,255);
    stroke(fCount,mGrad,255-fCount);
    line(0,i,width,i);
  }
}

// Access mouse position and draw circles
function Circle() {
  noStroke();
  fill(255);
  ellipse(x,y,rad*2,rad*2);
  if (mouseIsPressed) {
    fill(0);
    ellipse(x,y,rad*2,rad*2);
  }
}

function Line(x1,y1,x2,y2) {
  strokeWeight(8);
  stroke(random(fCount-50,fCount+50),random(fCount-50,fCount+50),random(fCount-50,fCount+50));
  line(x1,y1,x2,y2);
}


// Creates a smooth gradient animation
function smoothNum(number) {// Instead of looping 0,1...254,255,0,1...    loop: 0,1...254,255,254...
  
  if (on == true) {
    
    if (number == 255) {
      on = false;
    }
    return(number);
  } else {
    if (number == 255) {
      on = true;
    }
    return(255-number);
  }
}


