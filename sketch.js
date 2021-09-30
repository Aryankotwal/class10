// 3 functions: function preload - we load all the images and animation
//                function setup - we create the sprites, edges , group 
//                function draw - functioning part of the game - how thw game is working.
var trex ,trex_running;
var edges;
function preload(){
  trexRun = loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup(){
  createCanvas(600,200)
  trex = createSprite(140,150,50,50);
  road = createSprite(300,190,600,10);
  road.velocityX = -3;
  trex.addAnimation("run", trexRun);
  trex.scale = 0.5;
  //create a trex sprite
 edges = createEdgeSprites();
}

function draw(){
  background("lightgray")

  // making trex jump up 
  if(keyDown("space")){
trex.velocityY = -4;
  }

  // giving the gravity
  trex.velocityY = trex.velocityY +0.5

   if(road.x < 0) { 
    road.x = road.width/2; 
   }
 

trex.collide(road)
drawSprites();
}
