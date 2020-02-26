function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  
}

function keyTyped() {
  if ((key === 'r') || (key === 'R')) {
    background(255,0,0);
  } else if ((key === 'g') || (key === 'G')) {
    background(0,255,0);
  } else if ((key === 'b') || (key === 'B')) {
    background(0,0,255);
  } else {
    background(220);
    textSize(30)
    text(key,width/2,height/2);
  }
  // uncomment to prevent any default behavior
  // return false;
}