var w; 
var h;




function setup() {
  createCanvas(400,600 );
  w = width/12
  h = height/9
  noLoop()
}

function draw() {
  background(220);
  
  for (var x = 0; x <width; x+=w){
    for (var y =0; y < height; y+=h){
      joe = round(random(1,6))
      if (joe==1){
        fill(26,40,31)
      }
      else if (joe==2){
        fill(99,82,85)
      }
      else if (joe==3){
        fill(206,123,145)
      }
      else if (joe==4){
        fill(192,232,249)
      }
      else if(joe==5){
        fill(184,211,209)
      }
      rect(x,y,w,h)
      
      joe = round(random(1,6))
      if (joe==1){
        fill(26,40,31)
      }
      else if (joe==2){
        fill(99,82,85)
      }
      else if (joe==3){
        fill(206,123,145)
      }
      else if (joe==4){
        fill(192,232,249)
      }
      else if(joe==5){
        fill(184,211,209)
      }
      
      for (var yy = y+h/12; yy < y+h;yy+=h/6){
        
        
        rect(x,yy,w,h/12)
        
      }
        
      
    
      
      
        
      }
      
    }
  }
  
  
  
