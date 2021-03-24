const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1, ground2;
var slingshot;
var polygon; 
var polygonImg = "polygon.png";

var gameState = "onSling";

var engine;
var world;

var box1, box2, box3;
var box4, box5, box6;
var box7, box8, box9;
var box10, box11, box12;
var box13, box14, box15;
var box16, box17, box18;
var box19, box20, box21;
var box22, box23, box24;
var box25;

function preload(){

    polygonImg = loadImage("polygon.png");

}

function setup(){

    var canvas = createCanvas(1000, 650);
    engine = Engine.create();
    world = engine.world;

    polygon = createSprite(50, 325, 10, 10);
    polygon.addImage(polygonImg);
    polygon.scale = 0.1

    ground1 = new Ground(300, 500, 300, 20);
    ground2 = new Ground(650, 360, 300, 20);

    slingshot = new Slingshot(polygon, {x:50, y:325});

    box1 = new Box(300, 480, 20, 20);
    box2 = new Box(300, 460, 20, 20);
    box3 = new Box(300, 440, 20, 20);
    box4 = new Box(280, 480, 20, 20);
    box5 = new Box(280, 460, 20, 20);
    box6 = new Box(280, 440, 20, 20);
    box7 = new Box(320, 480, 20, 20);
    box8 = new Box(320, 460, 20, 20);
    box9 = new Box(320, 440, 20, 20);
    box10 = new Box(260, 480, 20, 20);
    box11 = new Box(260, 460, 20, 20);
    box12 = new Box(340 ,480, 20, 20);
    box13 = new Box(340, 460, 20, 20);
    box14 = new Box(300, 420, 20, 20)
    box15 = new Box(360, 480, 20, 20);
    box16 = new Box(240, 480, 20, 20);
    box17 = new Box(650, 340, 20, 20);
    box18 = new Box(630, 340, 20, 20);
    box19 = new Box(670, 340, 20, 20);
    box20 = new Box(690, 340, 20, 20);
    box21 = new Box(610, 340, 20, 20);
    box22 = new Box(650, 320, 20, 20);
    box23 = new Box(630, 320, 20, 20);
    box24 = new Box(670, 320, 20, 20);
    box25 = new Box(650, 300, 20, 20);

}

function draw(){
    background(7, 155, 143);


    textSize(10);
    fill("white");
    text("X:"+mouseX, mouseX, mouseY);

    slingshot.display();

    ground1.display();
    ground2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    
    drawSprites();

}


function mouseDragged(){

    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
        
}
  
  
  function mouseReleased(){
      slingshot.fly();
      gameState = "launched";
  }
  
  function keyPressed(){
      if(keyCode === 32 && polygon.body.speed < 1){
          
          polygon.trajectory = [];
          Matter.Body.setPosition(polygon.body, {x : 200, y : 50});
          slingshot.attach(polygon.body);
          
      }
  }