var garden,rabbit;
var gardenImg,rabbitImg;
var leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX;



  drawSprites();
}
var select_sprites = Math.round(random(1,3));
if (frameCount % 80 == 0) {
if (select_sprites  == 1) 
{ createApples(); }
else if  (select_sprites == 2) {         
else {  createApples(); } }

}

function createApples(){
  apple=createSprite(random(50,350),40,10,10);
  apple.addImage(apple.png);
  apple.scale=0.1;
  apple.velocityY=5;
  apple.lifetime=150;
}

function createLeaves(){
  leaf =createSprite(randon(50,350),40,10,10);
  leaf.addImage(leaf.png);
  leaf.scale=0.1;
  leaf.velocityY=5;
  leaf.lifetime=150;
}