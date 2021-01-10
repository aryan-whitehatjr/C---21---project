var wall, thickness;
var bullet, speed, weight;


function setup() {
  createCanvas(1600, 400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);
  console.log(speed);
  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor = "white";
  wall = createSprite(1200, 200, thickness, height / 2);
  wall.shapeColor =color(230,230,230);
  bullet.velocityX = speed;
 

}

function hasCollided(rbullet,rwall)
{
  bulletRightEdge=rbullet.x+rbullet.width;
  wallLeftEdge=rwall.x;

  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}



function draw() {
  background(0);
  if(hasCollided(bullet, wall))
{
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }

  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
}
 
  drawSprites();
}
