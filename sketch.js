var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 100, 50);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;

  movingRect=createSprite(100,100,50,100);
movingRect.shapeColor="green";
movingRect.debug=true;


sprite1=createSprite(100,100,100,100)
sprite1.shapeColor="purple"

}

function draw() {
  background(0,0,0); 
  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  console.log(movingRect.x-fixedRect.x);
 

  if(isTouching(sprite1,movingRect)){
    sprite1.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    sprite1.shapeColor="purple";
    movingRect.shapeColor="green";
  }
  drawSprites();
}


