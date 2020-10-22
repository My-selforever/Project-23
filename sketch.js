var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,base,right,left;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6



	engine = Engine.create();
	world = engine.world;
  base = Bodies.rectangle(400,650,225,20,{isStatic:true});
  right = Bodies.rectangle(297,610,100,20,{isStatic:true});
  left = Bodies.rectangle(503,610,100,20,{isStatic:true});
  World.add(world,base);
  World.add(world,right);
  World.add(world,left);
	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  fill("red");
  rect(base.position.x,base.position.y,225,20);
  rect(right.position.x,right.position.y,20,100);
  rect(left.position.x,left.position.y,20,100); 
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) 
{
	Matter.Body.setStatic(packageBody,false);
}
}