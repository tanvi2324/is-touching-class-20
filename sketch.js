var fixedrect,movingrect






function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  fixedrect.shapeColor="pink";
  fixedrect.debug=true;

  movingrect=createSprite(100, 200, 50, 90);
  movingrect.shapeColor="pink";
  movingrect.debug=true;
}

function draw() {
  background(0,0,0);
 movingrect.x=World.mouseX;
 movingrect.y=World.mouseY;



 if (movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
  && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
  &&movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
  && fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2)
 {
   
  movingrect.shapeColor="blue";
  fixedrect.shapeColor="blue";
 }

 else{
  movingrect.shapeColor="pink";
  fixedrect.shapeColor="pink"; 
 }

  
  drawSprites();
}