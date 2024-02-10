

let tries = 50000; 
let gap = 1; 
let minScale = 0.2; 
let skip = 5; 
let col, col3, firstCol, n2, scl, colE, palette1, palette2, palettesArray;
let noiseTime = 0;

function preload() {
  palettes = loadJSON("colors.json");
}

function setup() {
  palettesArray = Object.values(palettes); 
  palettesLength = palettesArray.length;
  cnv = createCanvas(windowWidth-20,windowHeight-70);
  
  cnv.position(0, 30);
  let artButton = createButton("new art");
  artButton.position(10, 0);
  artButton.mousePressed(newArt);
  let saveButton = createButton("save jpg");
  saveButton.position(80, 0);
  saveButton.mousePressed(saveArt);
  rectMode(CENTER);
  newArt();
}

function newArt() {
  let timeLapse = millis();
  clear();
  rez1 = random(0.0005, 0.0025); 
  rez2 = random(0.0005, 0.004); 
  wLow = random(10, 50); 
  wHigh = random(30, 30); 
  hLow = random(10, 70); 
  hHigh = random(30, 40); 
  let strokeType = random(3);
  if (strokeType < 0.5) {
    noStroke();
  } else if (strokeType < 2.5) {
    stroke(0);
  } else {
    stroke(255);
  }
  
  let sclType = random(3);
  if (sclType < 0.5) {
    sclStart = random(0.5, 1.5);
  } //small
  else if (sclType < 2.5) {
    sclStart = random(1.6, 2.2); 
  } else {
    sclStart = random(3.0, 7.5);
  }
  scl = (sclStart / 2000) * width;
  sclReduct = (sclStart / tries) * 1.3; 
  palette1 = floor(random(palettesArray.length));
  palette2 = floor(random(palettesArray.length));
  makeBackground();
  noiseTime += 10000;
  
  let x2 = random(width);
  let y2 = random(height);
  let x3 = random(width);
  let y3 = random(height);
  let ang2random = 1 
  let ang3random = 1
  let center1 = random(10);
  let center2 = random(10);

  for (i = 0; i < tries; i++) {
    
    scl -= sclReduct;
    if (scl < minScale) {
      scl = minScale;
    }
    
    x1 = random(width);
    y1 = random(height);
    
    n = noise(x1 * rez1 + noiseTime, y1 * rez1 + noiseTime);
    n2 = noise(x1 * rez2 + noiseTime + 10000, y1 * rez2 + noiseTime + 10000);
  
    w = random(wLow, wHigh) * scl;
    h = random(hLow, hHigh) * scl;
    ang1 = n * PI * 2;
    
    if (center1 < 5) {
      a = y1 - y2;
      b = x1 - x2;
      ang2 = atan(a / b) * ang2random;
    } else {
      ang2 = 0;
    }
    if (center2 < 5) {
      a2 = y1 - y3;
      b2 = x1 - x3;
      ang3 = atan(a2 / b2) * ang3random;
    } else {
      ang3 = 0;
    }
    ang = ang1 + ang2 + ang3; 
    open = true; 
    firstCol = null;
    
    checkRect(x1, y1, h, w, ang);
    if (open == false) {
      continue;
    }
    
    h2 = h + gap * 2;
    w2 = w + gap * 2;
    checkRect(x1, y1, h2, w2, ang);
    if (open == true) {
      
      push();
      translate(x1, y1);
      rotate(ang);
      convert(firstCol); 
      firstHSB = hsbCol; 
      getComboColor();
      
      while (
        abs(huey - firstHSB[0]) < 15 &&
        abs(sat - firstHSB[1]) < 20 &&
        abs(brt - firstHSB[2]) < 20
      ) {
        
        getComboColor();
      }
      colorMode(HSB, 360, 128, 100, 255);
      
      fill(
        huey + random(-10, 10),
        sat * random(1.1, 1.3),
        brt * random(0.8, 0.9),
        255
      );
      rect(0, 0, w, h);
      pop();
      colorMode(RGB);
    }
  }
  print("seconds: " + round((millis() - timeLapse) / 100) / 10);
}

function checkRect(x1, y1, h, w, ang) {
  
  y7 = y1 + h / 2;
  x7 = x1 - w / 2;
  rotate_point(x7, y7, x1, y1, ang);
  if (open == false) {
      return;
    }
  x7 = x1 + w/2;
  rotate_point(x7, y7, x1, y1, ang);
  if (open == false) {
      return;
    }
  y7 = y1 - h/2;
  rotate_point(x7, y7, x1, y1, ang);
  if (open == false) {
      return;
    }

  y2 = y1 - h / 2; //top side
  for (x2 = x1 - w / 2; x2 < x1 + w / 2 + skip; x2 += skip) {
    
    if (open == false) {
      return;
    }
    rotate_point(x2, y2, x1, y1, ang);
  }
  y2 = y1 + h / 2; 
  for (x2 = x1 - w / 2; x2 < x1 + w / 2 + skip; x2 += skip) {
    if (open == false) {
      return;
    }
    rotate_point(x2, y2, x1, y1, ang);
  }
  x2 = x1 - w / 2; 
  for (y2 = y1 - h / 2; y2 < y1 + h / 2 + skip; y2 += skip) {
    if (open == false) {
      return;
    }
    rotate_point(x2, y2, x1, y1, ang);
  }
  x2 = x1 + w / 2; 
  for (y2 = y1 - h / 2; y2 < y1 + h / 2 + skip; y2 += skip) {
    if (open == false) {
      return;
    }
    rotate_point(x2, y2, x1, y1, ang);
  }
}

function rotate_point(pointX, pointY, originX, originY, angle) {
  
  let xDiff = pointX - originX;
  let yDiff = pointY - originY;
  x = cos(angle) * xDiff - sin(angle) * yDiff + originX;
  y = sin(angle) * xDiff + cos(angle) * yDiff + originY;
  col = get(x,y); 
  if (firstCol == null) {
    firstCol = col;
  }
  
  if (
    abs(col[0] - firstCol[0]) < 5 &&
    abs(col[1] - firstCol[1]) < 5 &&
    abs(col[2] - firstCol[2]) < 5
  ) {
  } else {
    open = false;
  }
}

function saveArt() {
  save(Date.now() + ".jpg");
}
