var clockImg;

function preload() {
  clockImg = loadImage("clock.png");
}

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(255,255,255);  
  
  imageMode(CENTER);
  image(clockImg, 400, 220, 200, 200);
  
  drawSprites();
}