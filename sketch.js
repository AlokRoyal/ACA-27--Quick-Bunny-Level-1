var bunny;
var food;
var edges;
function preload() {
  //load game assets
 
}


function setup() {
  createCanvas(600,600);
 
  edges = createEdgeSprites();
  bunny = createSprite(50,550,30,30);
  food = createSprite(550,50,30,30);
  obs1 = createSprite(300,180,100,20);
  obs1.velocityX = 5;
  obs2 = createSprite(300,350,100,20);
  obs2.velocityX = -5;
  food.shapeColor = "orange";
  obs1.shapeColor = "red";
  obs2.shapeColor = "red";
  bunny.shapeColor = "blue";
}

function draw() {
  background("green");  

  bunny.bounceOff(edges[0]);
  bunny.bounceOff(edges[1]);
  bunny.bounceOff(edges[2]);
  bunny.bounceOff(edges[3]);
  obs1.bounceOff(edges[0]);
  obs1.bounceOff(edges[1]);
  obs2.bounceOff(edges[0]);
  obs2.bounceOff(edges[1]);

  if(keyDown("up")){
    bunny.y = bunny.y-5;
  }
  if(keyDown("down")){
    bunny.y = bunny.y+5;
  }
  if(keyDown("left")){
    bunny.x = bunny.x-5;
  }
  if(keyDown("right")){
    bunny.x = bunny.x+5;
  }
  if(bunny.isTouching(food)){
    text("YOU WIN",250,250);
  }
  if(bunny.isTouching(obs1)){
    text("YOU LOOSE",250,250);
  }
  if(bunny.isTouching(obs1)){
    bunny.x=50;
    bunny.y=550;
  }
  if(bunny.isTouching(obs2)){
    text("YOU LOOSE",250,250);
  }
  if(bunny.isTouching(obs2)){
    bunny.x=50;
    bunny.y=550;
  }
  drawSprites();
}
