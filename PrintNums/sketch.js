function setup() {
  createCanvas(500, 500);
  background(220);
  textSize(30);
  var nums = [2, 4, 6];
  for (var i = 0; i < nums.length; i++) {
    text(nums[i], 180+i*50, 200);
  }
}

function draw() {
}