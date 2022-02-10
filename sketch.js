
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);
  lazar = createSprite(200,200,10,30)
  lazar.shapeColor = "red";

}
createEdgeSprites();
function draw() 
{
  background("purple");
  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
    lazar.x = box.x;
    lazar.y = box.y;
    lazar.velocityY = 0;
    lazar.velocityX = 0;
    lazar.velocityX = 5;
  }
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    lazar.x = box.x;
    lazar.y = box.y;
    lazar.velocityY = 0;
    lazar.velocityX = 0;
    lazar.velocityX = -5;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
    lazar.x = box.x;
    lazar.y = box.y;
    lazar.velocityY = 0;
    lazar.velocityX = 0;
    lazar.velocityY = -5;
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
    lazar.x = box.x;
    lazar.y = box.y;
    lazar.velocityY = 0;
    lazar.velocityX = 0;
    lazar.velocityY = 5;
  }


  
  drawSprites();
}

