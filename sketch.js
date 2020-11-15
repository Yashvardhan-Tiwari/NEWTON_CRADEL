const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;



function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    bob = new bobs(400,300);

    bob2 = new bobs(440,300);

    bob3 = new bobs(480,300);

    bob4 = new bobs(350,300);

    bob5 = new bobs(250,240);

    Hanger = new hanger(385,100);

    chain = new Chain(bob.body,Hanger.body);
    chain2 = new Chain(bob2.body,Hanger.body);
    chain3 = new Chain(bob3.body,Hanger.body);
    chain4 = new Chain(bob4.body,Hanger.body);
    chain5 = new Chain(bob5.body,Hanger.body);

    
   
}

function draw(){
   
  

    background(300,300,0);
    Engine.update(engine);
    strokeWeight(4);

    chain.display();
    chain2.display();
    chain3.display();
    chain4.display();
    chain5.display();

    bob.display();

    bob2.display();

    bob3.display();

    bob4.display();
    
    bob5.display();

    Hanger.display();

   
}
