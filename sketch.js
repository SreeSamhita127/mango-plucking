
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var flag =0;
function preload()
{
	boy = loadImage("images/boy.png");
	tree = loadImage("images/tree.png");
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	base = new Base(500,380,1000,20);

	mango1 = new Mango(800,100,50,50); 
	mango2 = new Mango(700,150,50,50); 
	mango3 = new Mango(900,120,50,50);
	mango4 = new Mango(850,140,50,50);
	mango5 = new Mango(770,170,50,50);
	mango6 = new Mango(720,90,50,50);
	mango7 = new Mango(640,170,50,50);

	stone = new Stone(130,200,30,30);

	sling = new SlingShot(stone.body,{x:130, y:250});


	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  image(boy,100,200,200,225);
  image(tree,600,25,350,350);

  base.display();

  mango1.display();  
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  stone.display();
  sling.display();
  

  var collison = Matter.SAT.collides(stone.body, mango1.body);
  if(collison.collided){
    flag=1;
  }
  if(flag===1){
    Matter.Body.setStatic(mango1.body,false);
  }

  var collison = Matter.SAT.collides(stone.body, mango2.body);
  if(collison.collided){
    flag=2;
  }
  if(flag===2){
    Matter.Body.setStatic(mango2.body,false);
  }

  var collison = Matter.SAT.collides(stone.body, mango3.body);
  if(collison.collided){
    flag=3;
  }
  if(flag===3){
    Matter.Body.setStatic(mango3.body,false);
  }

  var collison = Matter.SAT.collides(stone.body, mango4.body);
  if(collison.collided){
    flag=4;
  }
  if(flag===4){
    Matter.Body.setStatic(mango4.body,false);
  }

  var collison = Matter.SAT.collides(stone.body, mango5.body);
  if(collison.collided){
    flag=5;
  }
  if(flag===5){
    Matter.Body.setStatic(mango5.body,false);
  }

  var collison = Matter.SAT.collides(stone.body, mango6.body);
  if(collison.collided){
    flag=6;
  }
  if(flag===6){
    Matter.Body.setStatic(mango6.body,false);
  }

  var collison = Matter.SAT.collides(stone.body, mango7.body);
  if(collison.collided){
    flag=7;
  }
  if(flag===7){
    Matter.Body.setStatic(mango7.body,false);
  }


  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x: mouseX, y:mouseY});
}

function mouseReleased(){
	sling.fly();
}

function keyPressed(){
	if(keyCode === 32){
		sling.attach(stone.body);
	}
}


