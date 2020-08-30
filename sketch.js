var bullet,wall,wall2,wall3,wall4;
var speed,weight;
var bulletZenia,bulletTorus,bulletCyclap;
var lane1,lane2,lane3;
var thickness;

function setup(){
  createCanvas(1600,400);
  bullet=createSprite(50, 150, 30, 10);
  bullet.shapeColor="white";
  bulletZenia=createSprite(50,50,30,10);
  bulletZenia.shapeColor="white";
  bulletTorus=createSprite(50,250,30,10);
  bulletTorus.shapeColor="white";
  bulletCyclap=createSprite(50,350,30,10);
  bulletCyclap.shapeColor="white";

  lane1=createSprite(0,100,3200,2);
  lane1.shapeColor="white";
  lane2=createSprite(0,200,3200,2);
  lane2.shapeColor="white";
  lane3=createSprite(0,300,3200,2);
  lane3.shapeColor="white";

  speed=random(223,321);
  weight=random(30,52);
  //speed2=random(45,100);
  // weight2=random(400,3000);
  thickness=random(22,83);
  
  wall=createSprite(1200,50,thickness,height/6);
  wall2=createSprite(1200,150,thickness,height/6);
  wall3=createSprite(1200,250,thickness,height/6);
  wall4=createSprite(1200,350,thickness,height/6);

  wall.shapeColor=color(80,80,80);
  wall2.shapeColor=color(80,80,80);
  wall3.shapeColor=color(80,80,80);
  wall4.shapeColor=color(80,80,80);

  bullet.velocityX=speed; 
  bulletZenia.velocityX=bulletTorus.velocityX=bulletCyclap.velocityX=speed;
}
function draw() {
  background(0);  

  bullet_fun(bullet,wall);
  bullet_fun(bulletZenia,wall2);
  bullet_fun(bulletTorus,wall3);
  bullet_fun(bulletCyclap,wall4);
  
  drawSprites();
}
