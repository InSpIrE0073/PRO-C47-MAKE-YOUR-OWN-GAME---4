var BGimage
var Tosan,Tosanimage;
var Scubby,Scubbyimage;
var obstacles,obstaclesimage;
var tosanBullet,tosanBulletimage;
var scubbyBullet,scubbyBulletimage;
var GameState = 0;



function preload (){
BGimage=  loadImage("Images/BAckground.jpg")
Tosanimage=  loadImage("Images/chursh.png")
Scubbyimage = loadImage("Images/CT.png")
obstaclesimage = loadImage("Images/pipe.png")
obstaclesimage2 = loadImage("Images/block.png")
tosanBulletimage= loadImage("Images/Tbullet.png")
scubbyBulletimage= loadImage("Images/Sbullet.png")
Sound1= loadSound ("Images/Background Music.mp3")


}


function setup() {
  createCanvas(displayWidth,displayHeight);
Tosan=createSprite(50,displayHeight-240,50,80);
Tosan.addImage(Tosanimage);
Tosan.scale = 0.5;

TosanBulletGroup = new Group() 
Scubby=createSprite(displayWidth-100,displayHeight-240,50,80);
Scubby.addImage(Scubbyimage);
Scubby.scale = 0.5;
ScubbyBulletGroup = new Group() 
obstacles=createSprite(displayWidth/2,displayHeight-240,50,80);
obstacles.addImage(obstaclesimage);
obstacles.scale = 0.6;
obstacles2 =createSprite(300,displayHeight/2-50,50,80);
obstacles2.addImage(obstaclesimage2);
obstacles2.scale = 0.6;

obstacles3 =createSprite(1100,displayHeight/2-50,50,80);
obstacles3.addImage(obstaclesimage2);
obstacles3.scale = 0.6;

invisibleGround=createSprite(displayWidth/2,displayHeight-170,displayWidth,20);
invisibleGround.visible=false;




  } 
 

function draw() {
  background(BGimage);  
  Sound1.loop()
  if(GameState===0){

  
if(keyDown("space") ){
tosanBullet= createSprite(50,displayHeight-240,50,80)
tosanBullet.addImage(tosanBulletimage);
tosanBullet.velocityX=8;
tosanBullet.scale= 0.3;
tosanBullet.x = Tosan.x
tosanBullet.y = Tosan.y
TosanBulletGroup.add(tosanBullet)


}
if(TosanBulletGroup.isTouching(obstacles)){
  TosanBulletGroup.destroyEach()
}
if(ScubbyBulletGroup.isTouching(obstacles)){
  ScubbyBulletGroup.destroyEach()
}
enemyAttack();
if(TosanBulletGroup.isTouching(Scubby)){
GameState = 1 
}

if(keyDown("w")){
Tosan.velocityY=-10

}
Tosan.velocityY=Tosan.velocityY + 0.8
if(keyDown("d")){
Tosan.x = Tosan.x + 5
}
if(keyDown("a")){
  Tosan.x = Tosan.x - 5
  }
  if(keyDown("i")){
    Scubby.velocityY=-10
    }
    Scubby.velocityY=Scubby.velocityY + 0.8
    if(keyDown("j")){
      Scubby.x = Scubby.x - 5
      }
      if(keyDown("l")){
        Scubby.x = Scubby.x + 5 
        }
      }
Tosan.collide(invisibleGround);
Tosan.collide(obstacles);
Tosan.collide(obstacles2)
Tosan.collide(obstacles3)

Scubby.collide(invisibleGround);
Scubby.collide(obstacles);
Scubby.collide(obstacles2);
Scubby.collide(obstacles3);
if(GameState===1){
  End();
  }

drawSprites()
}
function enemyAttack(){
if(frameCount %60 === 0 ){
scubbyBullet= createSprite(displayWidth-100,displayHeight-240,50,50)
scubbyBullet.addImage(scubbyBulletimage);
scubbyBullet.velocityX=-8;
scubbyBullet.scale = 0.2;
scubbyBullet.x = Scubby.x
scubbyBullet.y = Scubby.y
ScubbyBulletGroup.add(scubbyBullet)

} 
}
function End(){
Scubby.destroy()
TosanBulletGroup.destroyEach()
ScubbyBulletGroup.destroyEach()
ScubbyBulletGroup.setVelocityXEach(0)
}
