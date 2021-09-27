const DRAW_POINTS = false;
const DRAW_TEXT = false;

const SCRW = 400;
const SCRH = 400;

const FRAMEW = 500;
const FRAMEH = 500;

const BUFW = 4000;
const BUFH = 4000;

//var colorTree;

// SCREEN
// viewport x 0-1 to screen 0-W
function svp2x(vpx) { return vpx * SCRW }
// viewport y 0-1 to screen 0-H
//function vp2sy(vpy) { return (1 - vpy) * SCRH }
function svp2y(vpy) { return vpy * SCRH }

// p5js coordinates (0,0) is top left |-
// my coordinate is (0,0) bottom, left |_
function sinvertY(y) {
  return SCRH - y;
}

// FRAME
function fvp2x(vpx) { return vpx * FRAMEW }
function fvp2y(vpy) { return vpy * FRAMEH }
function finvertY(y) {
  return FRAMEH - y;
}

function centerX( x ) {
  return x + (FRAMEW-SCRW)/2;
}
function centerY( y ) {
  return y + (FRAMEH-SCRH)/2;
}

function setup() {
  createCanvas(FRAMEW, FRAMEH);
  
  noLoop();
}

function getColorBG() { return color(255, 240, 240); }
function getColorTree() { return color(155, 50, 100, 70); }
function getColorTerrain() { return color(255,205,205); }
//function getColorSky() { return color(155, 50, 100, 70); }
function getColorHill1() { return color(255,235,235); }
function getColorHill2() { return color(255,225,225); }
function getColorHill3() { return color(255,215,215); }
function getColorLeaf() { return color( 255, 35, 85, random(50,200) ); }

function draw() {
  //scale(1, -1);
  
  //colorTree = color(155, 50, 100, 70);
  
  mydraw2();
}

/*
function mydraw() {
  
  let xAdder = random( -50, 50 );
  let yAdder = random( 45, 55 );
  
  let y = 0;
  let x = 200;
  
  let p1 = { x: x, y: 400 };
  let p2 = { x: random(198, 202), y: 400 - (y+yAdder) };
  let p3 = { x: random(198, 202), y: 400 - (y+yAdder*2) };
  let p4 = { x: random(198, 202), y: 400 - (y+yAdder*3) };
  
  let nNodes = random( 3, 5);
  for(i=0; i<nNodes; i++) {
    
    stroke(255, 255, 255, 100);
    curve(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.y, p4.y);
  
if (DRAW_POINTS) {
    strokeWeight(5);
    stroke( 255, 255, 0 );
    point( p1.x, p1.y );
    stroke( 255, 0, 0 );
    point( p2.x, p2.y );
    stroke( 0, 255, 0 );
    point( p3.x, p3.y );
    stroke( 255, 255, 0 );
    point( p4.x, p4.y );
    strokeWeight(1);
}
    
    xAdder = random( -60, 60 );
    yAdder = random(45, 55);
    
    y += yAdder;
    x += xAdder;
    
    p1 = p2;
    p2 = p3;
    p3 = p4;
    p4 = { x: x, y: 400 - (y+yAdder*3) };
    
  }
  
}
*/

function mydraw2() {
  
  //background(255, 245, 255);
  
  //scale(1,-1);
  
  //stroke(0);
  //line(vp2sx( -1 ),vp2sy( -1 ),vp2sx( 1 ),vp2sy( 1 ));
  
  //return;
  
  background( getColorBG() ); // 255, 240, 240);
  
  fill( getColorTerrain() ); //255,205,205)
  stroke( getColorTerrain() ); //255,205,205);
  rect(0,450,FRAMEW,50);
  noFill();
  
  createHill(0.2, 0.4, getColorHill1() ); // color(255,235,235));
  createHill(0.5, 0.65, getColorHill2() ); //color(255,225,225));
  createHill(0.75, 0.9, getColorHill3() ); //color(255,215,215));
  
/*
  drawHill( [
    0 , 0.4, //160, 
    0 , 0.4 , 
    0.25 , 0.375,  //150, 
    0.50 , 0.25 , //100, 
    0.75 , 0.325 , //130, 
    1 , 0.275 , //110, 
    1 , 1,
    0 , 1,
    //0 , 0.6, //160, 
    0 , 0.4, //160, 
    0 , 0.4 , 
  ], color(255,235,235) );
  
  //stroke(0);
  //ellipse(centerX(vp2sx(0.1)), centerY(invertY( vp2sy(0.4) )), 20);
  
  drawHill( [
     0 ,  0.65 , //260, 
     0 ,  0.65 , //260, 
     0.25 ,  0.625 , //250, 
     0.50 ,  0.5 , //200, 
     0.75 ,  0.575 , //230, 
     1 ,  0.525 , //,210, 
     1 , 1, //400,
     0 , 1, //400,
     0 ,  0.65 , //260
     0 ,  0.65  //260
  ], color(255,225,225) );
  
  drawHill( [
     0 , 0.9 , //360, 
     0 , 0.9 , //360, 
     0.25 , 0.875 , //350, 
     0.50 , 0.75 , //300, 
     0.75 , 0.825 , //330, 
     1 , 0.775 , //310, 
     1 , 1 , //400,
     0 , 1 , //400,
     0 , 0.9 , //360
     0 , 0.9  //360
  ], color(255,215,215) );
*/
  noFill();
  
  for( h=0; h<30; h++ ) {
    
    drawTree();
    
  }
}

function trunk(y) {
  //return {x: random(198, 202), y: 400 - y};
  return { x: random(0.495, 0.505), y: y }; //400 - y};
}

function drawTree() {
  
  let nodes = [];
  
  
  let y = 0;
  let x = 0.5; //200;
  
  //curveVertex(x, 400); 
  nodes.push({x: x, y: 0});
  
  //curveVertex(x, 400); 
  nodes.push({x: x, y: 0});
  
  //curveVertex( random(198, 202), 400 - y );
  nodes.push( trunk(y) );
  
  //y += random(5, 35);
  y += random(0.0125, 0.0875);
  //curveVertex( random(198, 202), 400 - y );
  nodes.push( trunk(y) );
  
  //y += random(5, 35);
  y += random(0.0125, 0.0875);
  //curveVertex( random(198, 202), 400 - y );
  nodes.push( trunk(y) );
  
  //y += random(5, 35);
  y += random(0.0125, 0.0875);
  //curveVertex( random(198, 202), 400 - y );
  nodes.push( trunk(y) );
  
  //y += random(5, 35);
  y += random(0.0125, 0.0875);
  //curveVertex( random(198, 202), 400 - y );
  nodes.push( trunk(y) );
  
  //y += random(5, 35);
  y += random(0.0125, 0.0875);
  //curveVertex( x, 400 - y );
  nodes.push( trunk(y) );
  
  //nodes.push( {x: x, y: 400 - y});
  
  //y += random(5, 35);
  y += random(0.0125, 0.0875);

  //let p2 = { x: random(198, 202), y: 400 - (y+yAdder) };
  //let p3 = { x: random(198, 202), y: 400 - (y+yAdder*2) };
  //let p4 = { x: random(198, 202), y: 400 - (y+yAdder*3) };
  
  //let xAdder = random( -50, 50 );
  //let yAdder = random( 45, 55);
  
  let nNodes = random( 4, 6);
  for(i=0; i<nNodes; i++) {
    
    //curve(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.y, p4.y);
    
    //curveVertex( random(198, 202), 400 - (y+yAdder) );
    
    //let xAdder = random( -30, 50 );
    let xAdder = random( -0.075, 0.125 );
    
    //let yAdder = random( 30, 35);
    let yAdder = random( 0.075, 0.0875);
    
    y += yAdder;
    x += xAdder;
    
    //console.log(xAdder, x);
    
    //curveVertex( x, 400 - y );
    
//    nodes.push( {x: x, y: 400 - y});
    nodes.push( {x: x, y: y});
    
  }
  
  //curveVertex( x, 400 - y );
//  nodes.push( {x: x, y: 400 - y});
  nodes.push( {x: x, y: y});
  
  
  noFill();
  stroke( getColorTree() );
  strokeWeight(1);
  
  beginShape();
  for(let i=0; i<nodes.length; i++) {
    curveVertex( 
      centerX( svp2x( nodes[i].x ) ), 
      centerY( sinvertY( svp2y( nodes[i].y ) ) )
    );
    //ellipse( nodes[i].x, nodes[i].y, 5 );
  }
  endShape();
  
  
  
  for(let i=0; i<nodes.length-3; i++) {
    if (i<6) continue;
    
    drawTangent( nodes[i], nodes[i+1], nodes[i+2], nodes[i+3], random(0.13,0.26) ); //0.2 );
    drawTangent( nodes[i], nodes[i+1], nodes[i+2], nodes[i+3], random(0.41,0.58) ); //0.5 );
    drawTangent( nodes[i], nodes[i+1], nodes[i+2], nodes[i+3], random(0.62,0.79) ); //0.7 );
  }

/*
  console.log( JSON.stringify( nodes ) );
  
  let leaves = [];
  
  for(let i=0; i<nodes.length-3; i++) {
    
    if (i<6) continue;
    
    nLeaf = random( 2, 5 );
    for(let n=0; n<nLeaf; n++) {
      
      let step = 1 / nLeaf;
    
      let x = curvePoint(
        nodes[i].x,
        nodes[i+1].x,
        nodes[i+2].x,
        nodes[i+3].x,
        n * step);
      let y = curvePoint(
        nodes[i].y,
        nodes[i+1].y,
        nodes[i+2].y,
        nodes[i+3].y,
        n * step);
      
      leaves.push({x: x, y: y});
      
      //drawLeaf( x, y );
      
    }
    
  }
  
  for(let i=0; i<leaves.length; i++) {
    //drawLeaf( leaves[i].x, leaves[i].y );
  }
*/
  
  
}

function drawTangent(p1,c1,c2,p2, t) {
  
  noFill();
  stroke( getColorTree() );
  strokeWeight(1);
  
  let x = curvePoint( p1.x, c1.x, c2.x, p2.x, t);
  let y = curvePoint( p1.y, c1.y, c2.y, p2.y, t);
  //ellipse(x, y, 5, 5);
  let tx = curveTangent( p1.x, c1.x, c2.x, p2.x, t);
  let ty = curveTangent( p1.y, c1.y, c2.y, p2.y, t);
  let a = atan2(ty, tx);
  a -= PI / 2.0;
  
  //let magX = random( -50, 50 );
  let magX = random( -0.125, 0.125 );
  
  //let magY = random( 5, 10 );
  let magY = random( 0.0125, 0.025 );
  
  let newX = cos(a) * magX + x;
  let newY = sin(a) * magY + y;
  
  //line(x, y, newX, newY);
  drawLeaf( newX, newY );
  
}

function createHill( min, max, color ) {
  
  drawHill([
    0 , max, //160, 
    0 , max , 
    0.25 , random(min,max),  //150, 
    0.50 , random(min,max) , //100, 
    0.75 , random(min,max) , //130, 
    1 , random(min,max) , //110, 
    1 , 1,
    0 , 1,
    //0 , 0.6, //160, 
    0 , max, //160, 
    0 , max , 
  ],color);
  
}

function drawHill( hill, color ) {
  stroke( color );
  fill( color );
  
  beginShape();
  for(let i=0; i<hill.length; i+=2) {
    /*curve( 
      hill1[i], hill1[i+1], 
      hill1[i+2], hill1[i+3], 
      hill1[i+4], hill1[i+5],
      hill1[i+6], hill1[i+7]
    );*/
    curveVertex( 
      fvp2x( hill[i] ), 
      finvertY( fvp2y( hill[i+1] ) )
    );
  }
  endShape();
}




function drawLeaf(x,y) {
  let angle = random( 0, 359 );
  
  noStroke();
  fill( getColorLeaf() ); //255, 35, 85, random(50,200) );
  
  push();
  
  // move the origin from (0,0) to the point of rotation (200,200)
  translate( 
    centerX( svp2x( x ) ), 
    centerY( sinvertY( svp2y( y ) ) )
  );
  
	/*
    specify the angle of rotation. by default
    everything rotates around the origin (0,0).
    since we moved the origin to (200,200)
    using translate(), everything will rotate
    around this point.
  */
  rotate(angle);
  
  /*
  	draw the rect at (0,0) since we translated
    the origin to where we want to draw the rect.
  */
  ellipse(
    0,
    0,
    //random(5,9),
    svp2x( random( 0.0125, 0.0225 ) ),
    //random(5,9),
    3 * svp2y( random( 0.0125, 0.0225 ) )
  );
  
  pop();
  
  noFill();
}


function r() { return random(0.9,1.1); }
function r2(n) { return n + n * random(-0.5,0.5); }

function mydraw3() {
  
  let p1 = {x:200, y:400};
  let p2 = {x:210* r(), y:200* r()};
  let c1 = {x:150, y:340};
  //let c2 = {x:170* r(), y:240* r()};
  let c2 = {x: r2( 210 ), y:250* r()};
  
  //stroke(0);
  stroke(0, 0, 0, 100);
  
  bezier(p1.x, p1.y, c1.x, c1.y, c2.x, c2.y, p2.x, p2.y);
  
  let slope = (p2.y-c2.y)/(p2.x-c2.x);
  let b = p2.y-slope*p2.x;
  
  //let x = 170;
  let y = 90* r();
  
  // y = slope * x + b => y - b = slope * x => x = y - b /slope
  //let c3 =  {x: x, y: slope*x + b};
  let c3 =  {x: (y - b)/slope, y: y };
  
  //line(c2.x,c2.y,c3.x,c3.y);
  
  let c4 =  {x: r2( 220 ), y: 60 * r() };
  //let c4b =  {x: 270, y: 60};
  
  let p3 = {x: r2( 390 ), y: 20 * r()};
  //let p3b = {x:190, y:50};
  //let p3c = {x:140, y:70};
  
  console.log(slope,b,p3);
  
  bezier(p2.x, p2.y, c3.x, c3.y, c4.x, c4.y, p3.x, p3.y);
  drawLeaves(p2,c3,c4,p3,10);
  
  
/*  
  stroke(0);
  bezier(p2.x, p2.y, c3.x, c3.y, c4.x, c4.y, p3b.x, p3b.y);
  drawLeaves(p2,c3,c4,p3b,10);
  
  stroke(0);
  bezier(p2.x, p2.y, c3.x, c3.y, c4b.x, c4b.y, p3c.x, p3c.y);
  drawLeaves(p2,c3,c4b,p3c,10);
*/  
  
  textAlign(LEFT);
  
  stroke(0,100,25);
  if (DRAW_POINTS) ellipse(p1.x,p1.y,10);
  if (DRAW_TEXT) text('p1', p1.x+10, p1.y);
  
  stroke(0,0,255);
  if (DRAW_POINTS) ellipse(c1.x,c1.y,10);
  if (DRAW_TEXT) text('c1', c1.x+10, c1.y);
  
  stroke(0,0,255);
  if (DRAW_POINTS) ellipse(c2.x,c2.y,10);
  if (DRAW_TEXT) text('c2', c2.x+10, c2.y);
  
  stroke(0,100,25);
  if (DRAW_POINTS) ellipse(p2.x,p2.y,10);
  if (DRAW_TEXT) text('p2', p2.x+10, p2.y);
  if (DRAW_POINTS) ellipse(p3.x,p3.y,10);
  if (DRAW_TEXT) text('p3', p3.x+10, p3.y);
  //text('p3b', p3b.x+10, p3b.y);
  //text('p3c', p3c.x+10, p3c.y);
  
  stroke(0,0,255);
  if (DRAW_POINTS) ellipse(c3.x,c3.y,10);
  if (DRAW_TEXT) text('c3', c3.x+10, c3.y);
  
  stroke(0,0,255);
  if (DRAW_POINTS) ellipse(c4.x,c4.y,10);
  if (DRAW_TEXT) text('c4', c4.x+10, c4.y);
  
  //ellipse(c4b.x,c4b.y,10);
  //text('c4b', c4b.x, c4b.y);
  
  //bezier(340, 80, 40, 40, 360, 360, 60, 320);
  
  //bezier(60, 320, 360, 360, 40, 40, 70, 330);
  /*
  fill(255);
  let steps = 10;
  for (i = 0; i <= steps; i++) {
    let t = i / steps;
    let x = bezierPoint(p1.x, c1.x, c2.x, p2.x, t);
    let y = bezierPoint(p1.y, c1.y, c2.y, p2.y, t);
    ellipse(x, y, 10, 10);
  }
  */
}

// Clamp number between two values with the following line:
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

function drawLeaves(p1, c1, c2, p2, n) {
  
  let step = 1/n;
  
  for(let i=0; i<n; i++) {
    let t = clamp(i * step + random(-0.1 , 0.1), 0, 1);
    let x = bezierPoint(p1.x, c1.x, c2.x, p2.x, t);
    let y = bezierPoint(p1.y, c1.y, c2.y, p2.y, t);
    drawLeaf( x, y );
  }
  
}
