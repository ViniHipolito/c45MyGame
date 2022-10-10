var block, ground, jumpBlock;
var talkBlock, decorationBlock1, decorationBlock2;
var blockIMG1,blockIMG2, backgroundIMG, backgroundIMG2, talkBlockIMG, decorationBlock1IMG, decorationBlock2IMG;
var edges;
var test = 1;

function preload(){
blockIMG1 = loadAnimation("knight1.png");
blockIMG2 = loadAnimation("knight2.png");
talkBlockIMG = loadAnimation("LilFish.webp");
decorationBlock1IMG = loadAnimation("sportdaycat.webp");
decorationBlock2IMG = loadAnimation("piggeback.webp");
backgroundIMG = loadImage("background.webp");
backgroundIMG2 = loadImage("background1.webp");
}

function setup() {
  createCanvas(800,400);
  edges = createEdgeSprites();
  talkBlock = createSprite(700, 270, 50, 50);
  talkBlock.addAnimation("idleTalk", talkBlockIMG);
  decorationBlock1 = createSprite(170, 220, 50, 50);
  decorationBlock1.addAnimation("idleDeco1", decorationBlock1IMG);
  decorationBlock1.scale = 0.6;
  decorationBlock2 = createSprite(70, 210, 50, 50);
  decorationBlock2.addAnimation("idleDeco2", decorationBlock2IMG);
  decorationBlock2.scale = 1.5;
  block = createSprite(100, 200, 50, 50);
  block.addAnimation("idle1", blockIMG1);
  block.addAnimation("idle2", blockIMG2);
  ground = createSprite(400, 320, 800, 20);
  ground.visible = false;
  jumpBlock = createSprite(400, 290, 800, 20);
  jumpBlock.visible = false;
}

function draw() {
  if (test == 1){
    background(backgroundIMG);
    talkBlock.visible = false;
    decorationBlock1.visible = true;
    decorationBlock2.visible = true;
  }
  if (test == 2){
    background(backgroundIMG2);
    if(block.isTouching(edges[0])) {
      block.position.x = 700
      test = test-1
      
    }
    talkBlock.visible = true;
    decorationBlock1.visible = false;
    decorationBlock2.visible = false;
  }
  if (test == 3){
    background(backgroundIMG2);
    if(block.isTouching(edges[0])) {
      block.position.x = 700
      test = test-1
    }
    talkBlock.visible = false;
    decorationBlock1.visible = false;
    decorationBlock2.visible = false;
  }
  drawSprites();
  block.collide(ground);
  block.collide(edges[0]);
  block.collide(edges[1]);
  block.velocityY = block.velocityY + 0.5;
  if(keyDown("Left_Arrow")) {
    block.changeAnimation("idle2")
    block.position.x = block.position.x-5
  }
  if(keyDown("Right_Arrow")) {
    block.changeAnimation("idle1")
    block.position.x = block.position.x+5
  }
  if(keyDown("space")){
    if(block.isTouching(jumpBlock)){
      block.velocityY = -10; 
    }
  }
  if(block.isTouching(edges[1])) {
    block.position.x = 100
    test = test+1
  }
}