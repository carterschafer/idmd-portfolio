function setup() { // 100 circles with diameters of 40p
  var width = 400
  var height = 400
  var numCircles = (width/40)*(height/40)
  createCanvas(width, height);
  background(50);
  
}

function draw() {
  noFill()
  for (let x = 0; x < width/20; x++) {
    for (let y = 0; y < height/10; y++) {
      stroke(makeColor())
      ellipse(x*20+10, y*20+10, width/20, height/20);
      
    }
  }
}

function makeColor() { // Creates a color for a circle given position
  var red = random(255)
  var green = random(255)
  var blue = random(255)
  var randColor = color(red, green, blue)
  return randColor
}