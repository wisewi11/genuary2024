

let outer = [];
let outerNum = 15;
let outerAngles = [];

let inner = [];
let innerNum = 30; 
let innerAngles = [];
let delta = 0.03;

function setup() {
  createCanvas(800, 800);
  noLoop()
  for (let i=0; i<outerNum; i++){
    outerAngles[i] = (TWO_PI/outerNum) * i;
    outer[i] = new Star(outerAngles[i], false);
  }
  
  for (let i=0; i<innerNum; i++){
    innerAngles[i] = (TWO_PI/innerNum) * i;
    inner[i] = new Star(innerAngles[i], true);
  }
}

function draw() {
  background(0);
  translate(width/2, height/2);
  for (let i=0; i<outerNum; i++){
    outer[i].update();
    outer[i]. display();
  }
  
  for (let i=0; i<innerNum; i++){
    inner[i].angle += delta;
    inner[i].update();
    inner[i]. display();
  }
  
  for (let i=0; i<outerNum; i++){
    for (let j=0; j<innerNum; j++){
      stroke(255);
      push()
      if (random()>0.94){
        stroke(255,0,0)
      }
      
      line(outer[i].x, outer[i].y, inner[j].x, inner[j].y);
      pop()
    }
  }
  
  
  
  
  
  
}