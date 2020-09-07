
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,dustbin1,dustbin2,dustbin3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper=new Paper(100,600,10,10)
ground=new Ground(200,680,1920,10)
dustbin1=new Dustbin(400,670,100,15)
dustbin2=new Dustbin(450,652,15,50)
dustbin3=new Dustbin(350,652,15,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
paper.display()
dustbin1.display();
dustbin2.display();
dustbin3.display();
rectMode(CENTER)
rect(ground.body.position.x,ground.body.position.y,1920,10)
  drawSprites();
 
}


function keyPressed(){
if(keyCode===UP_ARROW){
console.log("hi")
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:100})
}



}


