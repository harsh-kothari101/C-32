const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score;
var backgroundI;
var polygon,polygonI;
var bg = "bg.jpg"

function preload(){
  polygonI = loadImage("polygon.png.png");
  getBackground();
}

function setup() {
  createCanvas(1920,1000);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic:false,
    friction:1,
    density:0.1
  }
  
  polygon = Bodies.circle(300,500,70,options);
  World.add(world,polygon);

  stand1 = new Stand(750,800,250,20);
  stand2 = new Stand(1200,700,180,20);
  stand3 = new Stand(1600,600,150,20);
  
  //stand1 1st layer.
  b1 = new Block2(660,770,20,40);
  b2 = new Block2(685,770,20,40);
  b3 = new Block2(710,770,20,40);
  b4 = new Block2(735,770,20,40);
  b5 = new Block2(760,770,20,40);
  b6 = new Block2(785,770,20,40);
  b7 = new Block2(810,770,20,40);
  b8 = new Block2(835,770,20,40);
  //stand1 2nd layer.
  b9 = new Block(685,730,20,40);
  b10 = new Block(710,730,20,40);
  b11 = new Block(735,730,20,40);
  b12 = new Block(760,730,20,40);
  b13 = new Block(785,730,20,40);
  b14 = new Block(810,730,20,40);
  //stand1 3rd layer.
  b15 = new Block1(710,690,20,40);
  b16 = new Block1(735,690,20,40);
  b17 = new Block1(760,690,20,40);
  b18 = new Block1(785,690,20,40);
  
  //stand1 4th layer.  
  b19 = new Block(735,650,20,40);
  b20 = new Block(760,650,20,40);
  
  //stand2 1st layer.
  a1 = new Block2(1150,670,20,40);
  a2 = new Block2(1175,670,20,40);
  a3 = new Block2(1200,670,20,40);
  a4 = new Block2(1225,670,20,40);
  a5 = new Block2(1250,670,20,40);
  //stand2 2nd layer
  a6 = new Block1(1175,630,20,40)
  a7 = new Block1(1200,630,20,40)
  a8 = new Block1(1225,630,20,40)
  //stand2 3rd layer.
  a9 = new Block(1200,590,20,40)

  //stand3 1st layer
  c1 = new Block(1570,570,20,40);
  c2 = new Block(1595,570,20,40);
  c3 = new Block(1620,570,20,40);
  //stand3 2nd layer.
  c4 = new Block1(1595,530,20,40)

  sling = new SlingShot(this.polygon,{x:300,y:500})

  score = 0;

  Engine.run(engine);
}

function draw() {
  if(backgroundI)
    background(backgroundI);
  imageMode(CENTER);
  image(polygonI,polygon.position.x,polygon.position.y,70,70)  

  textSize(35)
  fill("gold")
  text("Score:"+score,width-300,50)

  stand1.display();
  stand2.display();
  stand3.display();

  
    
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();

  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();

  b15.display();
  b16.display();
  b17.display();
  b18.display();

  b19.score();
  b20.score();
    
  a1.display();
  a2.display();
  a3.display();
  a4.display();
  a5.display();

  a6.display();
  a7.display();
  a8.display();

  a9.display();

  c1.display();
  c2.display();
  c3.display();

  c4.display();

  sling.display();

  b1.score();
  b2.score();
  b3.score();
  b4.score();
  b5.score();
  b6.score();
  b7.score();
  b8.score();

  b9.score();
  b10.score();
  b11.score();
  b12.score();
  b13.score();
  b14.score();

  b15.score();
  b16.score();
  b17.score();
  b18.score();

  b19.score();
  b20.score();
    
  a1.score();
  a2.score();
  a3.score();
  a4.score();
  a5.score();

  a6.score();
  a7.score();
  a8.score();

  a9.score();

  c1.score();
  c2.score();
  c3.score();

  c4.score();

  

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x: mouseX, y: mouseY})
}

function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32 ){
     Matter.Body.setPosition(this.polygon, {x:300, y:50});
     sling.attach(this.polygon);
  }
}

async function getBackground(){
  var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  if(hour>=6 && hour <= 18){
    var bg = "bg.jpg";
  }
  else{
    var bg = "bg2.jpg";
  }
  backgroundI = loadImage(bg);
  console.log(backgroundI);
}