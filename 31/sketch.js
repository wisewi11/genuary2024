var song;
var img
var fft
var particles = []

function preload(){
  song = loadSound('Operation Wild Scales (1).mp3')
  img = loadImage('WildScalesImg.webp')
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  imageMode(CENTER)
  rectMode(CENTER)
  fft = new p5.FFT(0.3)
  
  img.filter(BLUR,2)          //Blurs the image
    
}





function draw() {
  background(40);

  
  translate(width / 2, height/2)
  
  fft.analyze()
  amp = fft.getEnergy(20,200)
  
  push()
  if (amp >70){
    // rotate(random(-0.5,0.5))
  }
  image(img,0,0,800, 800)
  pop()
  
  var alpha = map(amp,0,255,130,70)
  fill(0,alpha)
  noStroke()
  rect(0,0,width,height)
  
  stroke(random(200,255),random(200,255),random(200,255))
  strokeWeight(10)
  noFill()
  var wave = fft.waveform()
  
  
  
  for (var t = -1; t<=1;t+=2){
    beginShape()
  for(var i =0; i<=180; i+=0.5){
    var index = floor(map(i,0,180,0,wave.length-1))
    
    var r = map(wave[index]/3,-1,1,150,350)
    
    var x  = r * sin(i) * t
    var y = r * cos(i)
    vertex(x,y)
  }
  endShape()
  }
  
  var p = new Particle()
  particles.push(p)
  
  for (var i= particles.length-1; i>=0; i--){
    if(!particles[i].edges()){
      particles[i].update(amp >70)
    particles[i].show()
    
    }  else{
      particles.splice(i,1)
    }
    
  }
  
  
  
  
 
  
  
  
}

function mouseClicked(){
  if(song.isPlaying()){
    song.pause()
    noLoop()
  }
  else{
    song.play()
    loop()
  }
}



class Particle {
  constructor(){
    this.pos = p5.Vector.random2D().mult(250)
    this.vel = createVector(0,0)
    this.acc = this.pos.copy().mult(random(0.0001, 0.00001))
    
    this.w = random(3,5)
    this.color = [random(150,255),random(150,255),random(150,255)]
  }
  update(cond){
    this.vel.add(this.acc)
    this.pos.add(this.vel)
    if (cond){
      this.pos.add(this.vel)
      this.pos.add(this.vel)
      this.pos.add(this.vel)
      this.pos.add(this.vel)
    }
  }
  
  edges(){
    if (this.pos.x < -width/2 || this.pos.x >width/2 || this.pos.y < -height/2 || this.pos.y > height/2){
      return true
    } else{
      return false
    }
    
  }
  show(){
    noStroke()
    fill(this.color)
    ellipse(this.pos.x,this.pos.y,this.w)
  }
  
  
}