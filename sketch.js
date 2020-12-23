const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world,engine;

var plinkos = []
var particles = []


function setup() 
{
  createCanvas(480,620);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,615,480,10);
  ground1 = new Ground(5,310,10,620);
  ground2 = new Ground(475,310,10,620);
 // ground3 = new Ground(240,5,480,10);

  wall1 = new Division(80,500,10,225)
  wall2 = new Division(160,500,10,225)
  wall3 = new Division(240,500,10,225)
  wall4 = new Division(320,500,10,225)
  wall5 = new Division(400,500,10,225)
  wall6 = new Division(470,500,10,225)
  wall7 = new Division(10,500,10,225)


  for(var p = 40; p <= 480; p = p+70)
  {
    plinkos.push(new Plinko(p,75))
  }

  for(var p = 20; p <= 460; p = p+70)
  {
    plinkos.push(new Plinko(p,145))
  }

  for(var p = 40; p <= 480; p = p+70)
  {
    plinkos.push(new Plinko(p,215))
  }

  for(var p = 20; p <= 460; p = p+70)
  {
    plinkos.push(new Plinko(p,285))
  }


 

}

function draw() 
{
  background("black"); 
  
  Engine.update(engine);

  ground.display();
  ground1.display();
  ground2.display();
  //ground3.display();

  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();

  

  for(var p = 0; p<plinkos.length; p++)
  {
    plinkos[p].display();
  }


  if(frameCount%60===0)
  {
    particles.push(new Particle(random(width/2-10,width/2+10),16,16))
  }

  for(var j = 0; j<particles.length ;j++)
  {
  particles[j].display();
  }

}