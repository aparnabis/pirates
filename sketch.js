const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(0,380,500,5);
    tower = new Tower(50,300,50,200);
    

    
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    tower.display();
}