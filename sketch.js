var wall,thickness
var bullet,speed,weight

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50,200,20,20);
  wall=createSprite(1000,200,thickness,height/2);

 speed=random(223,321); 
 weight=random(30,52)
 thickness=random(22,83)
  
bullet.velocityX=speed

}

function draw() {
  background(0);  
  if(bullet.isTouching(wall)){
    deformation=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    bullet.velocityX=0;
    
  
  if(deformation<10){
    bullet.shapeColor="green"
  }

if(deformation>=10){
  bullet.shapeColor="red"
}
  }


  drawSprites();
}