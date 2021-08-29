const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
const Constraint = Matter.Constraint

function preload()
{
  backgroundImage = loadImage("images/gamingBackground.png");
}

function setup(){
 createCanvas(900,400);


 engine = Engine.create();
 world = engine.World;

//create the Bodies here.
Ground = new Ground(200,410,600,5);
superhero = new Superhero(400,3,100,90);
attach = new Throw();
block1 = new Block(180,350,20,40);
block2 = new Block(300,340,25,35);
block3 = new Block(320,350,30,40);
block4  = new Block(360,345,26,39);
block5 = new Block(390,340,25,37);
block6 = new Block(420,325,30,40);
block7 = new Block(450,340,20,37);
block8 = new Block(460,350,25,35);
block9 = new Block(310,315,30,40);
block10 = new Block(340,310,24,36);
block11 = new Block(350,320,30,40);
block12= new Block(400,315,15,40);
block13 = new Block(430,315,30,40);
block14 = new Block(460,315,30,40);
monster = new Monster(380,190,95,100);



Engine.run(engine);

}


function draw (){
 rectMode(CENTER);
background(backgroundImage);


superhero.display();
ground.display();
 stroke(15);
 FileList("red");
 block1.display();
 block2.display();
 block3 .display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 monster.display();


}

function mouseDragged(){
  matter.body.setPosition(superhero.body,{X:mouseX,ymouseY});
}

function mouseReleased(){
  attach.fly();
}


