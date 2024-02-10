let side = 50;
let gap  = 20

function setup() {
  createCanvas(800, 800);
  frameRate(5)
}

function draw() {
  background(220);
  
for (x=0; x<width; x+=10){
  if (random(0,10)<9){
    y=random(0,height)
    line(x, y,x, y+random(0,200))
  }
}  

  for (y=0; y<height; y+=10){
  if (random(0,10)<9){
    x=random(0,height)
    line(x, y,x+random(0,200), y)
  }
}  

}