var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var log1, log2, log3;
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

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	log1Sprite = createSprite(400, 650, 200, 20);
	log1Sprite.shapeColor = color("red");
	
	log2Sprite = createSprite(300, 610, 20, 100);
	log2Sprite.shapeColor = color("red");

	log3Sprite = createSprite(500, 610, 20, 100);
    log3Sprite.shapeColor = color("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	log1 = Bodies.rectangle(400, 650, 200, 20 , {isStatic:true});
	World.add(world, log1);

	log2 = Bodies.rectangle(300, 610, 20, 100 , {isStatic:true});
	World.add(world, log2);

	log3 = Bodies.rectangle(500, 610, 20, 100 , {isStatic:true});
	World.add(world, log3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}
 