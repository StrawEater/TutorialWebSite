
let theta = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  translate(width/2,height/2);
  rotate(theta);


  for (let i = 0; i < 10; i++) {

    fill((255/10)*i);
    push();
    translate(0,100);
    rotate(theta*(i/10));
    rectMode(CENTER);
    Size = 250 - 10*i
    square(0, 0, Size);
    pop();

  }

  /*
  fill(0,0,255)
  square(-50, 50, 100);

  push();
  fill(0,255,0);
  translate(0,100);
  rotate(theta);
  square(-50, -50, 100);
  pop();
  */
  theta += radians(1);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
