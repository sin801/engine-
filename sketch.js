
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine
var world


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  var options = {
    restitution:0.9

  }
  ball = Bodies.circle(100,10,20,options)
  World.add(world,ball)
  var gOptions = {
    isStatic:true
  }
  ground = Bodies.rectangle(200,390,400,20,gOptions)
  World.add(world,ground)
}



function draw() 
{
  background(51);
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,400,20)
  ellipse(ball.position.x,ball.position.y,20)
}

