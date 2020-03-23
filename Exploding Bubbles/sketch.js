// Notes: text in the bubbles is static, countdown timer updates


var elapsed = 0;
var x;
var y;
var xFactor;
var yFactor;
var rad = 25;
var index;
var xArray = [];
var yArray = [];
var timeAddedArray = [];
var explode = false;

function setup() {
  createCanvas(800, 600);
  background(220);
  stroke(0);
  
}

function draw() {
  if (frameCount % 60 == 0) {
    elapsed++;
    if (elapsed % 2 == 0 && elapsed <= 30) {
      newBubble();
    }

    if (elapsed >= 50 && elapsed < 60) { // Countdown timer
      fill(220);
      noStroke();
      square(width - 60, height - 60, 60);
      fill(20);
      textSize(30);
      text(60 - elapsed, width - 40, height - 25);
    }
  }

  if (elapsed >= 30 && elapsed < 59) {
    explode = false;
    shake();
  }

  if (elapsed >= 59) { // Explode bubbles
    explode = true;
    shake();
  }

}

function newBubble() {
  fill(random(255), random(255), random(255));
  stroke(0);
  x = int(random(width));
  y = int(random(height));
  xArray.push(x);
  yArray.push(y);
  timeAddedArray.push(elapsed);
  ellipse(x, y, rad * 2, rad * 2);
  fill(150);
  textSize(20);
  text(elapsed, x - 8, y + 5);

}

function shake() { // Make bubbles start randomly shaking
  if (explode == false) { // Only shake, don't explode
    xFactor = random(8);
    yFactor = random(8);
  } else { // Explode the bubbles!
    xFactor = random(30);
    yFactor = random(30);
  }
  
  for (let i = 0; i < xArray.length; i++) {
    fill(random(255), random(255), random(255));
    ellipse(xArray[i] + xFactor, yArray[i] + yFactor, rad * 2, rad * 2);
    fill(150);
    textSize(20);
    text(timeAddedArray[i], xArray[i] + xFactor - 8, yArray[i] + yFactor + 5);
  }
  if (elapsed == 60) {
    reset();
  }
}

function reset() {
  background(220);
  xArray = [];
  yArray = [];
  timeAddedArray = [];
  elapsed = 0;
}