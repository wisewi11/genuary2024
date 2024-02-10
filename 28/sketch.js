

let tileWidth = 70;
let tileHeight = 925;
let frame = 0;
let padding = 0;
let tilesAcross, tilesDown, canv1, canv2, extraWidth, extraHeight;
let tileArray = [];

let alph = 40;
let sat = 200;
let brt = 100;
let paused = false;

function setup() {
  
  createCanvas(windowWidth-20, windowHeight-20);
  canv1 = createGraphics(width, height);
  canv2 = createGraphics(width, height);
  canv1.background(0);
  canv1.noStroke(0);
  canv1.colorMode(HSB, 360, 100, 100, 100);
  tileArray = [];
  tilesAcross = floor((width - frame * 2) / (tileWidth + padding));
  tilesDown = floor((height - frame * 2) / (tileHeight + padding));
  extraWidth = round(
    (width - (tilesAcross * (tileWidth + padding) + frame * 2 - padding)) / 2
  );
  extraHeight = round(
    (height - (tilesDown * (tileHeight + padding) + frame * 2 - padding)) / 2
  );
  for (i = 0; i < tilesAcross; i++) {
    for (j = 0; j < tilesDown; j++) {
      let x = floor(random(width - tileWidth));
      let y = floor(random(height - tileHeight));
      tileArray.push(x, y);
    }
  }
}

function draw() {
  tileHeight = random(300,925)
  brt = frameCount
  canv1.background(0, 0, 0, 0.0);
  let x = random(-100, width);
  let y = random(-100, height);
  let wid = random(width / 3);
  let hgt = random(height / 3);
  let huey = random(150,400);
  canv1.fill(huey, sat, brt, alph);
  canv1.rect(x, y, wid, hgt);
  canv1.rect(x,y,hgt,wid)
  // image(canv1,0,0);

  let pos = 0;
  for (i = 0; i < tilesAcross; i++) {
    for (j = 0; j < tilesDown; j++) {
      let tile = canv1.get(
        tileArray[pos],
        tileArray[pos + 1],
        tileWidth,
        tileHeight
      );
      let x = i * (tileWidth + padding) + frame + extraWidth;
      let y = j * (tileHeight + padding) + frame + extraHeight;
      canv2.image(tile, x, y);
      pos += 2;
    }
  }
  background(frameCount);
  image(canv2, 0, 0);
}


