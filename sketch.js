var car
var wall

var speed,weight;

function setup() {
  createCanvas(1800,400);
  car = createSprite(400, 200, 50, 50);
 car.shapeColor=color("white")

 speed=random(50,100)
 weight=random(400,1500)
 car.velocityX=speed

 wall = createSprite(1000, 200, 30, 200);
 wall.shapeColor=color("silver")

 car.debug=true
 wall.debug=true
}

function draw() {
  background("black");  



if(wall.x - car.x < wall.width/2 + car.width/2)
{
  car.velocityX=0
  var deformation=0.5*weight*speed*speed/22509
  if(deformation>180)
  {
     car.shapeColor=color("red")
  }
  if(deformation<180&&deformation>100)
  {
     car.shapeColor=color("green")
  }

  if(deformation<100)
  {
     car.shapeColor=color("yellow")
  }
}
  drawSprites();
}