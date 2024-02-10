
const { Engine, World, Bodies, Composite } = Matter;

let engine;
let world;
let circles = [];
let boundaries = [];

function setup() {
    createCanvas(800, 800);
   
    engine = Engine.create();
    world = engine.world;
   
    boundaries.push(new Boundary(200,width-frameCount/5, width*2, 10, 0.6))
    boundaries.push(new Boundary(600,width-frameCount/5,width*2, 10, -0.6))
}
    
function mouseDragged() {
    // circles.push(new Circle(mouseX, mouseY, random(5, 10)));
}

function draw() {
    background(51);
    Engine.update(engine);
    circles.push(new Circle(random(0,width),random(0,height),random(1,20)))
    for (let i = 0; i < circles.length; i++) {
        
        circles[i].show();
    }
    for (let i = 0; i < boundaries.length; i++) {
        boundaries[i].show();
    }
}