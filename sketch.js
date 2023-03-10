
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground,left,right;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 1400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	ball = Bodies.circle(260,100,20,ball_options);
	World.add(world,ball)

    ground = new Ground(width/2,670,width,20);
	left = new Ground(1100,600,20,120);
	right = new Ground(1350,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();

  ground.show();
  left.show();
  right.show();

  ellipse(ball.position.x,ball.position.y,40);
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
	}
}


	
  


