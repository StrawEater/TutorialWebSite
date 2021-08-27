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

      this.fillArea([inicialStrokeX, inicialStrokeY], totalStrokeSize, gapStrokeSize, true, this.strokeColor);
      this.fillArea([inicialStrokeX + (totalStrokeSize - gapStrokeSize), inicialStrokeY], totalStrokeSize, gapStrokeSize, false, this.strokeColor);
      this.fillArea([inicialStrokeX, inicialStrokeY + (totalStrokeSize - gapStrokeSize)], totalStrokeSize, gapStrokeSize, true, this.strokeColor);
      this.fillArea([inicialStrokeX, inicialStrokeY], totalStrokeSize, gapStrokeSize, false, this.strokeColor);
    }

    this.fillArea([inicialX, inicialY], this.totalSize, gapSize, true, this.fillColor);
    this.fillArea([inicialX + (this.totalSize - gapSize), inicialY], this.totalSize, gapSize, false, this.fillColor);
    this.fillArea([inicialX, inicialY + this.totalSize - gapSize], this.totalSize, gapSize, true, this.fillColor);
    this.fillArea([inicialX, inicialY], this.totalSize, gapSize, false, this.fillColor);

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

    if (wholeSize > 0) {
      if (horizontal) {
        start[0] += wholeSize * segment2;

      } else {
        start[1] += wholeSize * segment2
      }

      this.fillArea(start, segment2, segment1 - wholeSize * segment2, !horizontal, fillColor, threshold);
    }


  }

}
