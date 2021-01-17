var car1,car2, wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500); 

  car1= createSprite(50,180,50,50);
  car2=createSprite(50,200,100,30);
  car1.velocityX = speed;

  wall = createSprite(1500,200,60,height/2)
  wall.shapeColor = "white"

  deformation = 0.5 * weight * speed * speed/22500
  
  car2.velocityX = car1.velocityX;
  car2.weight = car1.weight;
  
}

function draw() {
  background("black");  

if (wall.x - car1.x < (car1.width + wall.width)/2 && wall.x - car2.x < (car2.width + wall.width)/2){

  car1.velocityX = 0;
  car2.velocityX = 0;
  var deformation = 0.5 * weight * speed * speed/22500;

  if(deformation < 100){
   car1.shapeColor = color(0,255,0);
   car2.shapeColor = color(0,255,0);
} else if(deformation > 100 && deformation < 180){
   car1.shapeColor = color(230,230,0);
   car2.shapeColor = color(230,230,0);
} else if(deformation > 180){
   car1.shapeColor = color(255,0,0);
   car2.shapeColor = color(255,0,0);
}
}

  drawSprites();
}