let particles = [];
const num = 200;

const noiseScale = 0.01/2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < num; i ++) {
    particles.push(createVector(random(width/2), random(height/2)));
  }
  background(255);
  strokeWeight(1);
  stroke(100,100,255,20);
}

function draw() {
 //background(50,5);
  for(let i = 0; i < num; i ++) {
    let p = particles[i];
    
    //position
    point(p.x, p.y);
    let n = noise(p.x * noiseScale, p.y * noiseScale, frameCount * noiseScale * noiseScale);
    let a = TAU * n;
    p.x -= cos(a);
    p.y += sin(a);
    if(!onScreen(p)) {
      
      
      p.x = random(width);
      p.y = random(height);
    }
  }
}

function mouseReleased() {
  noiseSeed(millis());
}

function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}

//reference: https://editor.p5js.org/pk2785/sketches/SUdcAxAIE