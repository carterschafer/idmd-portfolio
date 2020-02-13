function setup() {
  createCanvas(600, 600);
  background(220);
  r = createButton('Reset');
  r.position(width-75, height-50);
  r.mousePressed(reset);
}

function draw() {
  if (mouseIsPressed) {
    line(width/2, height/2, mouseX, mouseY);
    fill(random(255), random(255), random(255));
    ellipse(mouseX, mouseY, 20);
  }
}

function reset() {
  clear();
  background(220);
}
