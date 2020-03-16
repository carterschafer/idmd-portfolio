// Created by Carter Schafer on 3/5/20
// Using data from https://w2.weather.gov/climate/xmacis.php?wfo=sew
// Data for Seattle in January 2020

var dates;
var temps;
var precip;
var tempFactor;
var precipFactor;
var speed = 0;
var lineX;
var spacing;
var thickness;
var xDiff;
var index;

// Where the chart starts and ends
var minX;
var maxX;


function setup() {
  createCanvas(1200, 900);
  background(220);
  dates = ["Jan 1","Jan 2","Jan 3","Jan 4","Jan 5","Jan 6","Jan 7","Jan 8","Jan 9","Jan 10","Jan 11","Jan 12","Jan 13","Jan 14","Jan 15","Jan 16","Jan 17","Jan 18","Jan 19","Jan 20","Jan 21","Jan 22","Jan 23","Jan 24","Jan 25","Jan 26","Jan 27","Jan 28","Jan 29","Jan 30","Jan 31"];
  temps = [53,50,62,46,48,51,55,45,39,44,46,45,37,36,46,45,42,51,54,53,53,50,55,52,52,54,51,53,51,51,59];
  precip = [0.00,0.21,0.39,0.10,0.14,1.19,0.28,0.04,0.06,0.50,0.09,0.18,0.09,0.01,0.01,0.00,0.02,0.34,0.03,0.00,0.52,0.22,0.99,0.47,0.16,0.35,0.61,0.67,0.37,0.41,0.78];
  
  // SETUP VARIABLES
  thickness = 25;
  spacing = thickness + 10; // 5 pixels in between lines
  // Multiply by these to get a bigger graph
  tempFactor = 2.5;
  precipFactor = 80;
  
  
}

function draw() {
  gradients();
  var x = min(mouseX, width);
  speed = 0.03*thickness*(x - width/2);
  strokeWeight(thickness);
  drawTemp();
  drawPrecip();
  labels();
  
  // Horizontal line in the middle
  stroke(100);
  strokeWeight(10);
  //line(0,height/2,width,height/2);
  
  titles();
  
}


function drawTemp() {
  // Temperature graph goes upward
  for(var t = 0; t < temps.length; t++) {
    if (t == index && mouseX > minX && mouseX < maxX && mouseY<height*3/4 && mouseY>height/4) {
      stroke(220,190,50);
    } else {
      stroke(200,80,80);
    }
    lineX = (spacing*t)-speed;
    line(lineX,height/2,lineX,height/2 - (tempFactor)*temps[t]);
  }
}

function drawPrecip() {
  // Percipitation graph goes downward
  for(var p = 0; p < precip.length; p++) {
    if (p == index && mouseX>minX && mouseX<maxX && mouseY<height*3/4 && mouseY>height/4) {
      stroke(220,190,50);
    } else {
      stroke(90,120,230);
    }
    lineX = (spacing*p)-speed;
    line(lineX,height/2,lineX,height/2 + (precipFactor)*precip[p]);
  }
}  

function labels() {
  // Determine minX and maxX
  minX = -speed-thickness/2;
  maxX = -speed+spacing*(dates.length-1)+thickness/2;
  // Add labels when the mouse is between minX and maxX
  if (mouseX > minX && mouseX < maxX) {
    noStroke();
    textSize(24);
    xDiff = mouseX-minX;
    index = int(map(xDiff, 0, maxX-minX, 0, dates.length));
    if (mouseY < height/2 && mouseY > height/4) { // Display temperature
      text(temps[index], mouseX+15, mouseY+7);
    } else if (mouseY >= height/2 && mouseY < height*3/4) { // Display precipitation
      text(precip[index], mouseX+15, mouseY+7);
    }
    
  }
}

function gradients() {
  strokeWeight(1);
  for (let i = 0; i < height; i++) {
    m = map(i,0,height,0,255);
    stroke(255-m,100,m+50);
    line(0,i,width,i);
  }
  
}



function titles() {
  // Title text
  textFont("Trebuchet MS");
  noStroke();
  fill(255);
  textSize(35);
  text("Max Daily Temp. vs. Precipitation", 150-speed*0.5, 75);
  
  // Labeling temp and precip
  fill(200);
  textFont("Courier New");
  textSize(45);
  text("temp", -1.3*speed-300, height/2-50);
  text("rain", -1.3*speed-300, height/2+50);
  
  // Labeling date
  textSize(25);
  if (mouseX > minX && mouseX < maxX) {
    text(dates[index], index*spacing+minX-30, height/5);
  }
}

