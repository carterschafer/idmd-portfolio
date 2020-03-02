var x;
var y;
var Mx;
var My;
var map1;
var map2;

function setup() {
  createCanvas(1440, 800);
  background(220);
  frameRate(30);
}

function draw() {
  Mx = mouseX;
  My = mouseY;
  map1 = map(Mx,0,width,0,255);
  map2 = map(My,0,height,0,255);
  background(200,map1,map2);
  for(let i = 0; i < width; i++) {
    x = i;
    Line(Mx,My,i,0);
    Line(Mx,My,i,height);
  }
  
}

function Line(x1,y1,x2,y2) {
  strokeWeight(8);
  //stroke(random(fCount-50,fCount+50),random(fCount-50,fCount+50),random(fCount-50,fCount+50));
  line(x1,y1,x2,y2);
}