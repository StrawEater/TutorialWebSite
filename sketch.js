p5.disableFriendlyErrors = true;

class SpinningSquare {
  constructor(centerX, centerY, rotation, totalSize, holeSize, fillColor, haveStroke, strokeSize = 0, strokeColor = 0) {

    this.centerX = centerX;
    this.centerY = centerY;
    this.rotation = rotation;
    this.totalSize = totalSize;
    this.holeSize = holeSize;
    this.fillColor = fillColor;
    this.haveStroke = haveStroke;
    this.strokeSize = strokeSize;
    this.strokeColor = strokeColor;

  }

  show() {
    push()
    translate(this.centerX, this.centerY);
    rotate(this.rotation);

    let inicialX = (-this.totalSize / 2); //- algo;
    let inicialY = (-this.totalSize / 2); //- algo;

    let gapSize = (this.totalSize - this.holeSize) / 2;

    if (this.haveStroke) {

      let totalStrokeSize = this.totalSize + this.strokeSize
      let holeStrokeSize = this.holeSize - this.strokeSize
      let gapStrokeSize = (totalStrokeSize - holeStrokeSize) / 2

      let inicialStrokeX = (-totalStrokeSize / 2); //- algo;
      let inicialStrokeY = (-totalStrokeSize / 2); //- algo;

      fillArea([inicialStrokeX, inicialStrokeY], totalStrokeSize, gapStrokeSize, true, this.strokeColor);
      fillArea([inicialStrokeX + (totalStrokeSize - gapStrokeSize), inicialStrokeY], totalStrokeSize, gapStrokeSize, false, this.strokeColor);
      fillArea([inicialStrokeX, inicialStrokeY + (totalStrokeSize - gapStrokeSize)], totalStrokeSize, gapStrokeSize, true, this.strokeColor);
      fillArea([inicialStrokeX, inicialStrokeY], totalStrokeSize, gapStrokeSize, false, this.strokeColor);
    }

    fillArea([inicialX, inicialY], this.totalSize, gapSize, true, this.fillColor);
    fillArea([inicialX + (this.totalSize - gapSize), inicialY], this.totalSize, gapSize, false, this.fillColor);
    fillArea([inicialX, inicialY + this.totalSize - gapSize], this.totalSize, gapSize, true, this.fillColor);
    fillArea([inicialX, inicialY], this.totalSize, gapSize, false, this.fillColor);

    // fillArea([inicialX + gapSize, inicialY], this.totalSize-gapSize, gapSize, true, this.fillColor,false,0.1);
    // fillArea([inicialX + (this.totalSize - gapSize), inicialY + gapSize-5], this.totalSize-(gapSize-5), gapSize, false, this.fillColor);
    // fillArea([inicialX, inicialY + this.totalSize - gapSize], this.totalSize-(gapSize-10), gapSize, true, this.fillColor);
    // fillArea([inicialX, inicialY], this.totalSize-(gapSize-10), gapSize, false, this.fillColor);
    pop()
    this.rotation += radians(1);
  }

  fillArea(start, segment1, segment2, horizontal, fillColor, threshold = 0.05) {

    if (segment1 < threshold || segment2 < threshold) {

      return;

    }

    let squareLaydown = segment1 / segment2;
    let wholeSize = int(squareLaydown);

    fill(fillColor);
    noStroke();

    for (var a = 0; a < wholeSize; a++) {

      if (horizontal) {

        square(start[0] + a * segment2, start[1], segment2);

      } else {

        square(start[0], start[1] + a * segment2, segment2);

      }
    }

    if (segment1 - wholeSize * segment2 > 1) {
      if (horizontal) {
        start[0] += wholeSize * segment2;

      } else {
        start[1] += wholeSize * segment2
      }

      fillArea(start, segment2, segment1 - wholeSize * segment2, !horizontal, fillColor, threshold);
    }


  }

}

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

  if (test.totalSize >= balcd.totalSize && test.holeSize > balcd.totalSize + 150) {
    balcd.show();
    test.show();
  } else {
    test.show();
    balcd.show();

  }

  balcd.totalSize = abs(sin(theta / 2) * width + 500) + 50;
  balcd.holeSize = abs(sin(theta * 2) * balcd.totalSize / 2) + balcd.totalSize / 4;

  test.totalSize = abs(cos(theta) * width + 500) + 200;
  test.holeSize = abs(cos(theta * 2) * test.totalSize / 2) + test.totalSize / 4;
  test.rotation = radians(cos(theta) * 360);


  theta += radians(1);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  test.centerX = width / 2;
  test.centerY = height / 2;
  balcd.centerX = width / 2;
  balcd.centerY = height / 2;
}
