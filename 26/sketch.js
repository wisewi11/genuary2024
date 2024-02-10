

let angle = 0;
let joe
let sup = 10
function setup() {
  createCanvas(640, 500);
  // slider = createSlider(0, TWO_PI, PI / 4, 0.01);
}

function draw() {
  background(0);
  joe = PI+frameCount/100
  
  angle = joe
  
  stroke(255);
  strokeWeight(2);
  translate(width * 0.5, height);
  branch(100);
}

function branch(len) {
  stroke(255-frameCount/2,255,255-frameCount/2)
  line(0, 0, 0, -len);
  translate(0,-len)
  rotate(PI/4)
  // branch(len*0.67)
constrain(joe,PI,TWO_PI)
  
  
  if (len > 15) {
    
    push();
    rotate(angle);
    branch(len * 0.90);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.4);
    pop();
    
    push()
    rotate(-angle/2)
    branch(len*0.66)
    pop()
    
    
  }
}
function mousePressed() {
 
  
    saveGif('plant', 5);
  
}
