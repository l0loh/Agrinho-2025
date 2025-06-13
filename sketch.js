let isDay = true;

let carX;

let clouds = [];https://editor.p5js.org/eloise.caldeira/sketches

function setup() {

  createCanvas(800, 400);

  carX = width;

  for (let i = 0; i < 3; i++) {

    clouds.push({ x: random(width), y: random(50, 150) });

  }

}

function draw() {

  drawSky();

  drawSunOrMoon();

  drawStarsIfNight();

  drawGroundDivider();

  drawField();

  drawCity();

  drawText();

  updateCar();

  updateClouds();

}

function drawSky() {

  background(isDay ? color(135, 206, 235) : color(20, 24, 50));

  // Nuvens

  fill(255, 255, 255, 200);

  noStroke();

  for (let c of clouds) {

    ellipse(c.x, c.y, 50, 30);

    ellipse(c.x + 20, c.y + 10, 50, 30);

  }

}

function drawSunOrMoon() {

  fill(isDay ? color(255, 204, 0) : 255);

  ellipse(700, 80, 60, 60);

}

function drawStarsIfNight() {

  if (!isDay) {

    fill(255);

    for (let i = 0; i < 100; i++) {

      ellipse(random(width), random(200), 1.5, 1.5);

    }

  }

}

function drawGroundDivider() {

  stroke(0);

  strokeWeight(2);

  line(width / 2, 0, width / 2, height);

}

function drawField() {

  noStroke();

  fill(34, 139, 34);

  rect(0, height / 2, width / 2, height / 2);

  // Árvores

  for (let i = 50; i < width / 2; i += 100) {

    fill(139, 69, 19);

    rect(i, 250, 10, 40);

    fill(0, 100, 0);

    ellipse(i + 5, 240, 40, 40);

  }

  // Fazenda

  fill(178, 34, 34);

  rect(120, 220, 80, 60);

  fill(139, 69, 19);

  triangle(120, 220, 160, 180, 200, 220);

  // Fazendeiro

  fill(255, 220, 180);

  ellipse(260, 300, 20, 20);

  fill(0, 100, 200);

  rect(250, 310, 20, 30);

}

function drawCity() {

  // Rua com faixa

  fill(50);

  rect(width / 2, height * 0.75, width / 2, height * 0.25);

  stroke(255);

  for (let i = width / 2 + 10; i < width; i += 40) {

    line(i, height * 0.875, i + 20, height * 0.875);

  }

  noStroke();

  // Prédios

  for (let i = 0; i < 4; i++) {

    let bx = width / 2 + 40 + i * 80;

    let bh = random(100, 180);

    let by = height * 0.75 - bh;

    fill(100);

    rect(bx, by, 50, bh);

    // Janelas

    for (let j = 0; j < 4; j++) {

      for (let k = 0; k < 2; k++) {

        fill(isDay ? 255 : color(255, 255, 0));

        rect(bx + 10 + k * 20, by + 10 + j * 25, 10, 15);

      }

    }

  }

  // Carro

  fill(255, 0, 0);

  rect(carX, height * 0.82, 60, 30);

  fill(0);

  ellipse(carX + 10, height * 0.85 + 10, 15, 15);

  ellipse(carX + 40, height * 0.85 + 10, 15, 15);

}

function drawText() {

  fill(isDay ? 0 : 255);

  textAlign(CENTER);

  textSize(28);

  text("Agrinho 2025 - Campo e Cidade", width / 2, 40);

}

function updateCar() {

  carX -= 2;

  if (carX < width / 2 - 80) carX = width;

}

function updateClouds() {

  for (let c of clouds) {

    c.x -= 0.5;

    if (c.x < -60) c.x = width + random(60);

  }

}

function mousePressed() {

  isDay = !isDay;

}