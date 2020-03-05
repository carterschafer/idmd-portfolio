function setup() {
  createCanvas(400, 400);
  background(255);
  stroke(0);
  noFill();
  var i = 0;
  while (i <= 10) {
    ellipse(width/2,height/2,i*10, i*20);
    i++;
  }
}
function draw() {
  // nothing needs to go here
}