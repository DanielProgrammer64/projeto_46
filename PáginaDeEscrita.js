//var Space
//////////////////////
var Owen;
var enemyBoss;
var enemy1,
enemy2,
enemy3,
enemy4,
enemy5,
enemy6,
enemy7;
var backgroundImg;
var Canvas

var PLAY = 0;
var END = 1;
var gameState = PLAY;

var invisibleGround, ground;
var Spikes;
////////////////////////

function preload(){
backgroundImg = loadImage("Outro.png");
Owenimg = loadImage("Owen.png");
Spikesimg = loadImage("Spike.png")
}
//////////////////

function setup(){
Canvas = createCanvas(2048,1154);
Owen = createSprite(100,785);
Owen.addImage("Owenimg", Owenimg)
Owen.scale = 0.65;


invisibleGround = createSprite(660,825,30000,5);
invisibleGround.visible = false;

Spikes = createSprite(400,805);
Spikes.addImage("Spikesimg", Spikesimg)
Spikes.scale = 1;
}
/////////////////////////

function draw(){
image(backgroundImg,0, 0, 2048, 1154);

  if(keyIsDown(RIGHT_ARROW)){
  Owen.position.x = Owen.position.x +10;
  }
  if(keyIsDown(LEFT_ARROW)){
  Owen.position.x = Owen.position.x -10;  
  }
  if(keyIsDown(DOWN_ARROW)){
  Owen.position.y = Owen.position.y +10;    
  } 
  if(keyIsDown(UP_ARROW)){
  Owen.position.y = Owen.position.y -10;    
  }

//if(keyIsDown(UP_ARROW) && Owen.y >= 159) {
 //   Owen.velocityY = -12;
 // }

 // if (ground.x < 0){
 //   ground.x = ground.width/2;
 // }

Owen.collide(invisibleGround);
drawSprites();    

//if(gameState === Play){
     
//}
}


