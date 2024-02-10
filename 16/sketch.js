
function setup() {
    createCanvas(1000, 1000);
  }
  
  function draw() {
    background(0);
    stroke(255);
    strokeWeight(2);
    noFill();
    drawCircle(width/2, height/2, height);
    noLoop();
  }
  
  function drawCircle(x, y, d) {
    ellipse(x, y, d);
    if (d > 30) {
      let newD = d * 0.6;
      drawCircle(x + newD, y, newD+random(-newD/10,newD/10));
      drawCircle(x - newD, y, newD);
      push()
      stroke(255,0,0)
      drawCircle(x, y + d * 0.5, d * 0.3);
      stroke(150,50,10)
      drawCircle(x,y - d * 0.5, d * 0.5)
      pop()
    }
  }
  