

let R = (a=1)=>Math.random()*a; 
let L=(x,y)=>(x*x+y*y)**.5; 
let dis=([x,y],[u,v])=>L(x-u,y-v);

function draw_circle([x,y],r,c) {
  stroke(c);noFill();strokeWeight(1);
  circle((x+1)*width/2,(y+1)*height/2,width*r);
}


function sdf_rep(x, r) {
  x/=r;
  x+=.5;
  x-=floor(x)+.5;
  x*=r;
  return x;
}


function sdf_bal([x,y],[cx,cy],r) {
  x-=cx;y-=cy;
  return L(x,y)-r;
}

function sdf_box([x,y],[cx,cy],[sx,sy]) {
  return max(abs(x-cx)-sx,abs(y-cy)-sy);
}

const k=(a,b)=>a>0&&b>0?L(a,b):a>b?a:b;
const scale = ([x,y],a)=>[x*a,y*a];

function sdf_shape(p) {
//  p=scale(p,2/(2+p[1]));
  let b = abs(sdf_rep(sdf_box(p, [0,0], [.1,.1]),.25))-.01;
  let c = abs(sdf_rep(sdf_bal(p, [0,0], .1),.2))-.06;
  return k(b,c)-.02;
  return L(p[0],p[1])-.3;
}

// function sdf_shape(x,y) {
//   
//   return abs(L(x,y)-.6)-.2;
// }

// =======================

let cc = [];
function sdf_cc([x,y]) {
 
  let res = -sdf_shape([x,y]);
  for (let [[u,v],r] of cc) {
    let d = ((x-u)**2+(y-v)**2)**.5-r;
    
    res = Math.min(d,res);
  }
  return res;
}

function sdf_circle(p, cp, r) {
  
  return dis(cp, p) - r*2;
}

function circlepack(n, max_r, n_tries=50) {

  for (let k = 0; k < n*2; k++) {
    let best_d = -Infinity, best_p;
    for (let j = 0; j < n_tries; j++) { 
      let p = [R(2)-1, R(2)-1]; 
      let d = sdf_cc(p);
      if (d > best_d) {
        best_d = d; best_p = p;
      }
    }
    if (best_d > 0) { 
      cc.push([best_p, Math.min(best_d, max_r)]);
    }
  }
}

function draw_circles() {
  // draw all the circles
  for (let [p,r] of cc) {
    draw_circle(p, r, 'violet');
  }
}

function setup() {
  createCanvas(800, 800);
  background('#fed');
  let start_time = Date.now();
  // circlepack(900, .05, 20);
  // circlepack(900, .04, 20);
  // circlepack(900, .04, 20);
  circlepack(900, .03, 40);
  circlepack(900, .02, 50);
  // circlepack(900, .02, 60);
  let elapsed = Date.now() - start_time;
  console.log(`${cc.length} circles in ${(elapsed/1000).toFixed(2)}s`);
  // and drawAlso
  draw_circles();  
}

