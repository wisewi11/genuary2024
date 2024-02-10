

let space = 20;
let frame = 10;
let noiseTime = 0;
let noiseIncrement = 10000; // 0 or 10000
let points = [];
let vary = 5;
let buff = 0.2;
let palette, r,g, b, pos;

function preload(){
  table = loadTable("colors.csv","csv","header")
}

function setup() {
  createCanvas(610, 560);
  background(220);
  strokeWeight(4);
  
  palette = floor(random(83));
  let buff2 = space*buff;
  let wNumb = floor((width - frame * 2) / space)+1;
  let hNumb = floor((height - frame * 2) / space)+1;
  let extraW = round(width-wNumb*space-frame*2);
  let extraH = round(height-hNumb*space-frame*2);
  for (y = frame+extraH; y < height-frame+1; y += space) {
    for (x = frame+extraW; x < width-frame; x += space) {
      points.push(createVector(x+random(-vary,vary), y+random(-vary,vary)));
      if (y > space + frame +extraH && x > space + frame +extraW) {
        pos = points.length - 1;
        strokeWeight(1);
        fill(240);
        quad(
          points[pos].x,
          points[pos].y,
          points[pos - 1].x,
          points[pos - 1].y,
          points[pos - wNumb - 1].x,
          points[pos - wNumb - 1].y,
          points[pos - wNumb].x,
          points[pos - wNumb].y
        );
        getColor();
        floodFill(createVector(round(points[pos].x-space/2),round(points[pos].y-space/2)),[r,g,b,255]);
        noFill();
        strokeWeight(3);
        quad(
          points[pos].x,
          points[pos].y,
          points[pos - 1].x,
          points[pos - 1].y,
          points[pos - wNumb - 1].x,
          points[pos - wNumb - 1].y,
          points[pos - wNumb].x,
          points[pos - wNumb].y
        );
        let firstCol = color(r,g,b);
        getColor();
        let secCol = color(r,g,b);
        if (firstCol==secCol){
          getColor();
        }
        strokeWeight(1);
        fill(240);
        quad(
          points[pos].x-buff2,
          points[pos].y-buff2,
          points[pos - 1].x+buff2,
          points[pos - 1].y-buff2,
          points[pos - wNumb - 1].x+buff2,
          points[pos - wNumb - 1].y+buff2,
          points[pos - wNumb].x-buff2,
          points[pos - wNumb].y+buff2
        );
        getColor();
        floodFill(createVector(round(points[pos].x-space/2),round(points[pos].y-space/2)),[r,g,b,255]);
        noFill();
        strokeWeight(3);
        quad(
          points[pos].x-buff2,
          points[pos].y-buff2,
          points[pos - 1].x+buff2,
          points[pos - 1].y-buff2,
          points[pos - wNumb - 1].x+buff2,
          points[pos - wNumb - 1].y+buff2,
          points[pos - wNumb].x-buff2,
          points[pos - wNumb].y+buff2
        );
      }
    }
  }
}

function getColor(){
let col = floor(random(5));
        huey = table.get(palette,col*3);
      sat = table.get(palette,col*3+1);
        brt = table.get(palette,col*3+2);
  const k = (n) => (n + huey / 60) % 6;
  const f = (n) => brt/100 * (1 - sat/128 * Math.max(0, Math.min(k(n), 4 - k(n), 1)));
  r = 255 * f(5);
  g = 255 * f(3);
  b = 255 * f(1)
}