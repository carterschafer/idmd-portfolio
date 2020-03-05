let img;
var imgWidth;
var aspectRatio;

function preload() {
  img = loadImage("Matterhorn.jpg")
  aspectRatio = 1908 / 1146;
  imgWidth = 600;
}

function setup() {
  createCanvas(600, 600);
  image(img,0,0,imgWidth, imgWidth / aspectRatio);
}

function draw() {
}