
let angle = 0;
let r;
let phase = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  r = width / 4;
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  stroke(255);
  strokeWeight(8);
  fill(frameCount/3);
  

  // let increment = map(mouseX, 0, width, PI, 0.01);
  let increment = TWO_PI / (frameCount/20);
  beginShape();
  for (let a = 0; a < TWO_PI; a += increment) {
    let r1 = r + sin(a * 10 + phase) * 50;
    let x = r1 * sin(a);
    let y = r1 * cos(a);
    curveVertex(x, y);
  }
  endShape(CLOSE);
  phase += 0.10;
}
