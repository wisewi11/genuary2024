squareSize=80;

function setup() {
  createCanvas(400, 400);
  noLoop()
  noStroke()
}

function draw() {
  background(220);
  for (var x = 0; x<width; x+=squareSize){
    for (var y=0; y<height; y+=squareSize){
      
      bob = round(random(-0.5,4.5))
      
      if (bob==0){
        fill('#2B2D42')
      }
      if (bob==1){
        fill('#8D99AE')
      }
      if (bob==2){
        fill('#EDF2F4')
      }
      if (bob==3){
        fill('#EF233C')
      }
      if (bob==4){
        fill('#D80032')
      }
      
      square(x,y,squareSize)
      
      bob = round(random(-0.5,4.5))
      
      if (bob==0){
        fill('#2B2D42')
      }
      if (bob==1){
        fill('#8D99AE')
      }
      if (bob==2){
        fill('#EDF2F4')
      }
      if (bob==3){
        fill('#EF233C')
      }
      if (bob==4){
        fill('#D80032')
      }
      
      joe = round(random(0,3.5))
      
      if (joe==0){
        arc(x,y,squareSize * 2,squareSize * 2,0,PI/2)
      }
      if (joe==1){
        arc(x,y+squareSize,squareSize * 2, squareSize * 2, 3*PI/2,2*PI)
      }
      if (joe==2){
        arc(x+squareSize,y+squareSize,squareSize * 2, squareSize * 2, PI,3*PI/2)
      }
      if (joe==3){
        arc(x+squareSize,y,squareSize * 2, squareSize * 2, PI/2,PI)
      }
      
      
      
    }
  }
  
  
}