var x = 25;
var y = 25;
var xdir = 1;
var ydir = 1;
var ballRad = 25
var speed = 5

function setup() {
  createCanvas(500, 500);
  background(120, 200, 255);
}

function draw() {
  background(120, 200, 255);
  noStroke();
  fill(255, 0, 0);
  ellipse(x, y, 50, 50);
  if (x > width-ballRad || x < ballRad) {
    xdir = xdir * -1;
  }
  if (y > height-ballRad || x < ballRad) {
    ydir = ydir * -1;
  }
  x = x + xdir*speed;
  y = y + ydir*speed;
  // x = (x + 1) % 275;
  // x = min(x + 1, 275);
  // x = x + 1;
}