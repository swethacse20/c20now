var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  console.log(movingRect.x-fixedRect.x);
  if(movingRect.x-fixedRect.x == fixedRect.width/2+movingRect.width/2&&  fixedRect)
  {
    fixedRect.shapeColor = "red"
    movingRect.shapeColor = "red";
  }
  drawSprites();
}