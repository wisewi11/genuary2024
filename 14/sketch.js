var speed = 0.4
var spacing = 5

function setup() {
  createCanvas(800, 800);
  frameRate(100)
}

function draw() {
  beginShape()
  let t = frameCount*speed
  background(random(0));
  for(let c = 0; c < TWO_PI; c+=TWO_PI/d){
    for(let r = 0; r<width; r+=spacing){
      fill(map(r,0,width,0,500))
      d = map(r,0,width,4,20)
      let mT = t*noise(r/1000)
      
      vertex(r*cos(mT + c)+width/2,r*sin(mT+c)+height/2)
    }
  }
  
  endShape(CLOSE)
}

// fill(random(0,255),random(0,255),random(150,255))