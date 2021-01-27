var fixedRect, movingRect;
var a1, a2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  a1 = createSprite(500, 300, 50, 80);
  a1.shapeColor = "blue";
  a2 = createSprite(300,100,80,30);
  a2.shapeColor = "blue";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  a2.x = World.mouseX;
  a2.y = World.mouseY;

if(collision(a1, a2)){
  a1.shapeColor="red"
  a2.shapeColor="red"
} else{
  a1.shapeColor="blue"
  a2.shapeColor="blue"
}

  drawSprites();
}