const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

let particles = [];
let plinkos = [];
let divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(1350, 650);

  engine = Engine.create();
  world = engine.world;

  let groundThickness = 20;
  ground = {
    bottom: new Ground(width / 2, height, width, groundThickness),
    right: new Ground(width, height / 2, groundThickness, height),
    left: new Ground(0, height / 2, groundThickness, height)
  };

  for (let i = 0; i <= width; i += 110) {
    divisions.push(new Division(i, height - divisionHeight / 4, 10, divisionHeight));
  }

  for (let i = 0; i < 4; i++) {
    let j;
    if (i % 2 == 0) {
      j = 15;
    } else {
      j = 40;
    }
    for (; j <= width; j += 50) {
      plinkos.push(new Plinko(j, i * 100 + 75));
    }
  }
  Engine.run(engine);
}

function draw() {
  background(0);

  

  ground.bottom.display();
  ground.right.display();
  ground.left.display();
  
  
  for (let division of divisions) {
    division.display();
  }

  for (let i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  for (let i = 0; i < particles.length; i++) {
    particles[i].display();
  }

  if (frameCount % 90 == 0 || frameCount % 60 == 0) {
    particles.push(new Particle(random(20, width - 20), 0, 10));
  }

  textSize(25);
  fill("white");
  strokeWeight(2);
  stroke("red");
  text('LUCKY WIN BLOCK : Be the winner, if your chosen block fills first.',300,40);

  /*strokeWeight(2);
  stroke("red");*/
  textSize(20);
  //fill("white");
  text('1st block',20,420);

  textSize(20);
  //fill("white");
  text('2nd block',120,420);

  textSize(20);
  //fill("white");
  text('3rd block',230,420);

  textSize(20);
  //fill("white");
  text('4th block',340,420);

  textSize(20);
  //fill("white");
  text('5th block',450,420);

  textSize(20);
  //fill("white");
  text('6th block',560,420);

  textSize(20);
  //fill("white");
  text('7th block',670,420);

  textSize(20);
 // fill("white");
  text('8th block',780,420);

  textSize(20);
 // fill("white");
  text('9th block',890,420);

  textSize(20);
 // fill("white");
  text('10th block',1000,420);

  textSize(20);
  //fill("white");
  text('11th block',1110,420);

  textSize(20);
  //fill("white");
  text('12th block',1220,420);

}