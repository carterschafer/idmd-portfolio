function setup() {
  createCanvas(400, 400);
  strokeWeight(4);
}

function draw() {
  background(204);
  
  for(j = 10; j < mouseY; j = j + 18) {
    line(0, j, width, j); 
    for(i = 10; i < mouseX; i = i + 18) {
      line(i, 0, i, height);
    }
  }
}