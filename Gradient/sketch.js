var y;
var m;

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < height; i++) {
    m = map(i,0,height,0,255);
    stroke(m,150,230);
    line(0,i,width,i);
  }
}

function draw() {
  
}