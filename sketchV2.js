
let theta = 0;
let test;
let balcd

function setup() {
  createCanvas(windowWidth, windowHeight);
  test = new SpinningSquare(width / 2, height / 2, 0, 200, 43, color(255), true, 5, color(0));
  balcd = new SpinningSquare(width / 2, height / 2, 0, 200, 43, color(0), true, 5, color(255));
  background(255)
}

function draw() {
  //background(0);
  fill(0, 10);
  rect(0, 0, width + 10, height + 10);

  
   balcd.show();
   test.show();

  balcd.totalSize = abs(sin(theta*1.5) * dist(balcd.centerX,balcd.centerY,width,height)*2) + 20;
  balcd.holeSize = abs(sin(theta) * (balcd.totalSize / 2)) + balcd.totalSize / 4;
  balcd.rotation = radians(cos(theta*10) * 45);

  test.totalSize = abs(cos(theta) * dist(test.centerX,test.centerY,width,height)*2) + 20;
  test.holeSize = abs(cos(theta/2) * test.totalSize / 2) + test.totalSize / 4;
  test.rotation = radians(cos(theta) * 180);

  theta += radians(1);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  test.centerX = width / 2;
  test.centerY = height / 2;
  balcd.centerX = width / 2;
  balcd.centerY = height / 2;
}
