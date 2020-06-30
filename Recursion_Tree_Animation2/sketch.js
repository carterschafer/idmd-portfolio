let count = 20;
let len = 270;
let red = 0.65;
let angle = 45;
let thresh = 8;

var frames;
var fTH = 1292; // frame threshold
var m;

function setup() {
  createCanvas(1440, 810);
}

function draw() {
  if (frameCount % fTH < (fTH / 2)) {
    frames = frameCount % fTH;
  } else {
    frames = (fTH / 2) - (frameCount % fTH - (fTH / 2));
  }


  strokeWeight(1);
  for (let i = 0; i < height; i++) {
    m = map(i, 0, height, 0, 255);
    stroke(m, frames / 2, 255 - frames / 2);
    line(0, i, width, i);
  }


  strokeWeight(2);
  stroke(30, 30, 60);
  translate(width / 2, height);
  angle = map(frames, 0, width, 0, 7);
  // thresh = map(frames, 0, 1292, 3, 8);
  // thresh = 2;
  branch(len);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  len *= red;
  count--;
  if (len > thresh) {
    push();
    rotate(angle);
    //line(0, 0, 0, -len);
    branch(len)
    pop();
    push();
    rotate(-angle);
    //line(0, 0, 0, -len);
    branch(len);
    pop();
  }
}