var numCircles=20;


function setup() {
  createCanvas(800, 800);
  noLoop()
}

function draw() {
  background(random(100,200));
  
  
  
  noStroke()
  fill(random(0,255),random(0,255),random(0,255))
  beginShape(QUADS)
  vertex(width*1/10,-70)
  vertex(width*2,height*14/8)
  vertex(width*7/8,height)
  vertex(-80,height*1/10)
  endShape()
  
  fill(random(0,255),random(0,255),random(0,255))
  beginShape(QUADS)
  vertex(900,0)
  vertex(900,100)
  vertex(0,height)
  vertex(-100,height)
  endShape()
  
  for (var i = 0; i<numCircles; i++)
    {
      stroke(random(0,255),random(0,255),random(0,255))
      fill(random(0,255),random(0,255),random(0,255))
      strokeWeight(random(0,20))
      circle(random(width/4,width*3/4), random(height * 1/4, height * 3/4), random(30,150))
    }
  noFill()
  strokeWeight(20)
  stroke(0)
  circle(width/2,height/2,500)
  
  strokeWeight(5)
  line(50,600,700,200)
  line(400,50,300,790)
}