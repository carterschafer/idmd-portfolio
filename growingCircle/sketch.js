var d;
var RCRad = 30; // Red circle radius
//var BCRad = 30; // Black circle radius
var circles = 15;

function setup() {
  createCanvas(400, 400);
  background(220);
  noStroke();
  fill(255, 0, 0, RCRad)
  // Make an ellipse in the middle of the canvas
  ellipse(width/2, height/2, 2*RCRad, 2*RCRad);
  r = createButton('Reset');
  r.position(width-75, height-50);
  r.mousePressed(reset);
}

function draw() {
  // Check where mouse is in relation to middle of canvas
  d = int(dist(width/2, height/2, mouseX, mouseY));
  if (d < 2*RCRad) {
    RCRad ++;
    fill(255, 0, 0, RCRad/5)
    ellipse(width/2, height/2, 2*RCRad, 2*RCRad);
  } else {
    background(220);
    fill(255, 0, 0, RCRad);
    RCRad = 30;
    ellipse(width/2, height/2, 2*RCRad, 2*RCRad);
  }
  
  if (RCRad > width/2 || RCRad > height/2) {
    fill(50);
    for (let i = 0; i < circles; i++) {
      ellipse(random(width), random(height), random(20,70), random(20,70))
    }
  }
}

function reset() {
  clear();
  background(220);
  RCRad = 30;
  ellipse(width/2, height/2, 2*RCRad, 2*RCRad);
}
