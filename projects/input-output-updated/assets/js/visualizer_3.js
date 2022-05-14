let dim;

function setup() {
  createCanvas(windowWidth, windowHeight);
  dim = width / 2;
  background(0);
  colorMode(RGB, 204, 15, 255);
  noStroke();
  ellipseMode(RADIUS);
  frameRate(1.5);
}

function draw() {
  background(0);
  for (let x = 0; x <= width; x += dim) {
    drawGradient(x, height / 2);
  }
}

function drawGradient(x, y) {
  let radius = dim / 2;
  let h = random(0, 360);
  for (let r = radius; r > 0; --r) {
    fill(h, 90, 90);
    ellipse(x, y, r, r);
    h = (h + 1) % 360;
  }
}