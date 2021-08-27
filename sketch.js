p5.disableFriendlyErrors = true;
// class Graviton {
//   constructor(x, y, Size, Color, core, s, catcher) {
//     this.x = x;
//     this.y = y;
//     this.Size = Size;
//     this.Color = Color;
//     this.core = core;
//     this.momentum = [random(-1, 1), random(-1, 1)];
//     this.speed = [0, 0];
//     this.maxSpeed = s;
//     this.catcher = catcher;
//   }
//
//   calculateMomentum() {
//     let xDifference = this.x - this.core.x;
//     let yDifference = this.y - this.core.y;
//
//     //print(this.momentum[0]);
//     let xFactor = this.setDirecction(xDifference, this.momentum[0]);
//     let yFactor = this.setDirecction(yDifference, this.momentum[1]);
//
//     this.momentum[0] += xFactor; //random(xFactor)*100
//     this.momentum[1] += yFactor; //random(yFactor)*100
//   }
//
//   addMomentum() {
//     this.speed[0] += this.momentum[0];
//     this.speed[1] += this.momentum[1];
//
//     if (
//       (this.x < 0 && this.speed[0] < 0) ||
//       (this.x > width && this.speed[0] > 0)
//     ) {
//       this.speed[0] *= -1;
//       this.momentum[0] *= -1;
//     } else if (
//       (this.y < 0 && this.speed[1] < 0) ||
//       (this.y > height && this.speed[1] > 0)
//     ) {
//       this.speed[1] *= -1;
//       this.momentum[1] *= -1;
//     }
//
//     this.speed = [
//       this.maxSpeed *
//         (this.speed[0] / dist(0, 0, this.speed[0], this.speed[1])),
//       this.maxSpeed *
//         (this.speed[1] / dist(0, 0, this.speed[0], this.speed[1])),
//     ];
//   }
//
//   move() {
//     this.x += this.speed[0];
//     this.y += this.speed[1];
//   }
//
//   show() {
//     fill(this.Color);
//     if (this.catcher) {
//       print("ddd");
//     } else {
//       square(this.x, this.y, this.Size);
//     }
//   }
//
//   setDirecction(direction, currentDirrection) {
//     let samePath =
//       (direction < 0 && currentDirrection < 0) ||
//       (direction > 0 && currentDirrection > 0);
//     let t = (direction - 1000) ** 2 / 50;
//     let value = t;
//     if (samePath) {
//       return -(currentDirrection / abs(currentDirrection)) * value;
//     } else {
//       return (currentDirrection / abs(currentDirrection)) * value;
//     }
//   }
// }
//
// let algo = [];
// let catchers;
//
// function setup() {
//   createCanvas(1000, 1000);
//   background(0);
//
//   catchers = createGraphics(1000, 1000);
//   catchers.clear();
//   let dou = new Graviton(
//     random(1000),
//     random(1000),
//     75,
//     color(255, 255, 255),
//     0,
//     5,
//     false
//   );
//   algo.push(dou);
//   for (var i = 0; i < 10; i++) {
//     print(i);
//     let b = new Graviton(
//       random(1000),
//       random(1000),
//       random(30, 50),
//       color(random(255), random(255), random(255)),
//       algo[0],
//       15,
//       true
//     );
//     algo.push(b);
//   }
//
//   algo[0].core = algo[algo.length - 2];
//   algo[algo.length - 2].core = algo[1];
//   print(algo.length);
//   print(algo[2].Color);
//   //algo[1].Color = color(255, 0, 0);
//   //algo[algo.length - 2].Color = color(255,255,255);
// }
//
// let momentum = [0.1, -0.1];
// let speed = [1, 1];
// let coordinates = [400, 400];
//
// function draw() {
//   catchers.fill(0, 10);
//   rectMode(CORNER);
//   catchers.square(0, 0, 1010);
//   background(0);
//
//   rectMode(CENTER);
//
//   //print(algo.lenght());
//
//   for (let i = algo.length - 1; i > 1; i--) {
//     //print("aa");
//     algo[i].calculateMomentum();
//     algo[i].addMomentum();
//     algo[i].move();
//
//     //noStroke()
//
//     //print("dd");
//     if (algo[i].catcher) {
//       catchers.fill(algo[i].Color);
//       catchers.stroke(algo[i].Color);
//       catchers.square(algo[i].x, algo[i].y, algo[i].Size);
//       //print("dd")
//     } else {
//       fill(algo[i].Color);
//       stroke(algo[i].Color);
//       square(algo[i].x, algo[i].y, algo[i].Size);
//     }
//   }
//   //print("-------------")
//
//   image(catchers, 0, 0);
//   algo[0].calculateMomentum();
//   algo[0].addMomentum();
//   algo[0].move();
//   fill(algo[0].Color);
//   stroke(algo[0].Color);
//   square(algo[0].x, algo[0].y, algo[0].Size);
// }


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

function fillArea(start, segment1, segment2, horizontal, fillColor, strokeLine = false) {

  if (segment1 < 0.05 || segment2 < 0.05) {

    return;

  }
  let squareLaydown = segment1 / segment2;
  let wholeSize = int(squareLaydown);
  let subSize = int(((squareLaydown) % 1) * 100) / 100.0;
  fill(fillColor);
  noStroke();

  if (!strokeLine) {
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
  test.centerX = width / 2;
  test.centerY = height / 2;
  balcd.centerX = width / 2;
  balcd.centerY = height / 2;
}
