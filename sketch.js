let theta = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255)
}

function draw() {
  //background(0);
  fill(0,10);
  rect(0,0,width+10,height+10);

  let TotalSize = abs(cos(theta) * width) + 60;
  let HoleSize = abs(cos(theta/2) * (TotalSize-50))+50;
  let strokeSize = 5//abs(cos(theta)*20)+1 / 2;

  const centerX = width / 2;
  const centerY = height / 2;

  translate((centerX), (centerY));
  rotate(radians(tan(theta)*100));

  let inicialX = (-TotalSize / 2); //- algo;
  let inicialY = (-TotalSize / 2); //- algo;

  let gapSize = (TotalSize - HoleSize) / 2;

  fillArea([inicialX + gapSize, inicialY], TotalSize - gapSize, gapSize, true, color(255));
  fillArea([inicialX, inicialY - strokeSize], TotalSize + strokeSize, strokeSize, true, color(0, 0, 0),true);
  fillArea([inicialX + gapSize + strokeSize, inicialY + gapSize], TotalSize - (gapSize * 2 + strokeSize), strokeSize, true, color(0, 0, 0),true);

  fillArea([inicialX, inicialY], TotalSize - gapSize, gapSize, false, color(255));
  fillArea([inicialX - strokeSize, inicialY - strokeSize], TotalSize + strokeSize, strokeSize, false, color(0, 0, 0),true);
  fillArea([inicialX + gapSize, inicialY + gapSize], TotalSize - (gapSize * 2 + strokeSize), strokeSize, false, color(0, 0, 0),true);

  fillArea([inicialX, inicialY + (TotalSize - gapSize)], TotalSize - gapSize, gapSize, true, color(255));
  fillArea([inicialX - strokeSize, inicialY + TotalSize], TotalSize + strokeSize, strokeSize, true, color(0, 0, 0),true);
  fillArea([inicialX + gapSize, inicialY + (TotalSize - gapSize) - strokeSize], TotalSize - (gapSize * 2 + strokeSize), strokeSize, true, color(0, 0, 0),true);

  fillArea([inicialX + (TotalSize - gapSize), inicialY + gapSize], TotalSize - gapSize, gapSize, false, color(255));
  fillArea([inicialX + TotalSize, inicialY], TotalSize + strokeSize, strokeSize, false, color(0, 0, 0),true);
  fillArea([inicialX + (TotalSize - gapSize) - strokeSize, inicialY + gapSize + strokeSize], TotalSize - (gapSize * 2 + strokeSize), strokeSize, false, color(0, 0, 0),true);

  theta += radians(1);

}

function fillArea(start, segment1, segment2, horizontal, fillColor, strokeLine=false) {

  if (segment1 < 0.05 || segment2 < 0.05){

    return;

  }
  let squareLaydown = segment1 / segment2;
  let wholeSize = int(squareLaydown);
  let subSize = int(((squareLaydown) % 1) * 100) / 100.0;
  fill(fillColor);
  noStroke();

  if (!strokeLine){
    strokeWeight(2);
    stroke(fillColor);
  }

  for (var a = 0; a < wholeSize; a++) {

    if (horizontal) {

      square(start[0] + a * segment2, start[1], segment2);

    } else {

      square(start[0], start[1] + a * segment2, segment2);

    }
  }

  if (subSize > 0.01) {
    if (horizontal) {
      start[0] += wholeSize * segment2;

    } else {
      start[1] += wholeSize * segment2
    }

    fillArea(start, segment2, segment1 - wholeSize * segment2, !horizontal, fillColor);
  }


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
