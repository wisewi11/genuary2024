class Curve {

    constructor() {
      this.path = [];
      this.current = createVector();
    }
  
     setX( x) {
      this.current.x = x;
    }
  
     setY( y) {
      this.current.y = y;
    }
  
     addPoint() {
      this.path.push(this.current);
    }
    
     reset() {
      this.path = []; 
    }
  
     show() {
      stroke(random(0,255));
      strokeWeight(0.5);
      noFill();
      beginShape();
      for (let v of this.path) {
        vertex(v.x, v.y);
      }
      endShape();
  
      strokeWeight(6);
      point(this.current.x, this.current.y);
      this.current = createVector();
    }
  }
  