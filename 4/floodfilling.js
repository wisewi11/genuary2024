

let expa = 1;
let rez = 0.013;
let done = true;
let j;

function floodFill(seed, fillColor) { //seed is vector (x,y) where paintbucket is pointed to
  loadPixels();
  stack = 0;
  index = 4 * (width * seed.y + seed.x);
  oldColor = [  
    pixels[index],
    pixels[index + 1],
    pixels[index + 2],
    pixels[index + 3],
  ]; //check what is the current color where the seed is pointing
  if (arrayEquals(fillColor,oldColor)){
    done = true;
    return}
  if (pixels[index]<10 && pixels[index+1] <10 && pixels[index+2]<10){
    done = true; //if close to black, stop
    return} 
  queue = [];
  queue.push(seed); //put the seed (starting vector) into new array

  while (queue.length && stack<500000*expa*5) {
    // go until array is empty
    stack++;
    let current = queue.pop(); //current equals last element (vector) in queue array and then that last element is removed from array 
    index = 4 * (width * current.y + current.x);
    let thisPixColor = [
      pixels[index],
      pixels[index + 1],
      pixels[index + 2],
      pixels[index + 3],
    ]; //getting the color from the canvas for this array item
    if (!arrayEquals(thisPixColor, oldColor)) {
      continue;
    } //don't do below function if the colors are the same

    n1 = noise(current.x*rez+noiseTime,current.y*rez+noiseTime)*1.4;
    pixels[index+0] = fillColor[0 + 0]*n1;
    pixels[index+1] = fillColor[0 + 1]*n1;
    pixels[index+2] = fillColor[0 + 2]*n1;
    pixels[index+3] = fillColor[0 + 3];
    //fill current pixel with variations of fill color
    queue = expandToNeighbours(queue, current)  
  } //replacing the queue array with new array from the called function
  updatePixels();
  done = true;
  j++;
    noiseTime+=noiseIncrement;
}

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
   // a.every((val, index) => val === b[index])
    abs(a[0]-b[0])<10 && abs(a[1]-b[1])<10 && abs(a[2]-b[2])<10
  );  
}   // a: current pixel color; b: new color
    // Lines 39-41 don't do much.  Array.isArray() returns whether the passed value is an array or not
    // .every tests whether all elements in the array pass the test implemented by the provided function, but no idea how val,index is a test; index is current pixel; no idea what val is or what this is doing

function expandToNeighbours(queue,current){
  x3 = current.x
  y3 = current.y
  // if within window boundaries, add new vectors to array above, below, and to sides of current position;
  
  if(y3<height+1){
    queue.push(createVector(x3,y3+1))
  }
  if(y3>-1){
    queue.push(createVector(x3,y3-1))
  }
  if(x3>-1){
    queue.push(createVector(x3-1,y3));
  }
  if(x3<width+1){
    queue.push(createVector(x3+1,y3))
  } 
  return queue
}
