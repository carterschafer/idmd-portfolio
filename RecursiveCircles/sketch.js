var distance;
var mapped;
var xMapped;
var yMapped;

function drawCircle(x, y, dia) {
  ellipse(x, y, dia, dia);
  if (dia > 2) {
    xMapped = map(dia, 2, 500, width/2, mouseX)
    yMapped = map(dia, 2, 500, height/2, mouseY)
    //print(xMapped, yMapped)
    drawCircle(xMapped, yMapped, dia / mapped);
  }
}


function setup() {
  createCanvas(800, 800);
  background(220);
  noFill();
  //drawCircle(width/2, height/2, 300);
}

function draw() {
  background(220);
  distance = dist(width / 2, height / 2, mouseX, mouseY);
  mapped = map(distance, 0, (width * sqrt(2)) / 2, 1.05, 1.8);
  drawCircle(mouseX, mouseY, 500);
}