function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  strokeWeight(2);
  for (y = 20; y < height - 20; y = y + 5) {
    for (x = 20; x < width - 20; x = x + 5) {
      if (mouseX == x && mouseY == y) {
        strokeWeight(4);
        point(x, y);
      } else {
        strokeWeight(1);
        point(x, y);
      }
    }
  }
  
  
}