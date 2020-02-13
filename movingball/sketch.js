var x = 25;
var dir = 1;
var speed = 5;

function setup() {
  createCanvas(300, 200);
  background(120, 200, 255);
  fill(255, 0, 0);
}

function draw() {
  background(120, 200, 255);
  noStroke();
  ellipse(x, 100, 50, 50);
  if (x > 275 || x < 25) {
    dir = dir * -1;
    fill(changeColor());
  }
  x = x + dir*speed;
  // x = (x + 1) % 275;
  // x = min(x + 1, 275);
  // x = x + 1;
}

function changeColor() {
  return color(random(255), random(255), random(255));
}

