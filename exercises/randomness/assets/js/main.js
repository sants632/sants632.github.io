function setup() {
  createCanvas(windowWidth, windowHeight);
  background ('white');
}

function draw() {
  const colors = ['white', 'lavender', 'orange'];
  const color = random(colors);
  stroke('orange');
  fill(color);
  ellipse(random(width), random(height),
    random(150), random(100));
  strokeWeight(2);
}

const reloadtButton = document.querySelector("#reload");
function reload() {
    reload = location.reload();
}

reloadButton.addEventListener("click", reload, false);