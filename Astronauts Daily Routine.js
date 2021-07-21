var backGround, eating, drinking, bathing, brushing, gym1, gym2, moving, sleeping;

function preload() {
  bathAnimation = loadAnimation("bath1.png", "bath2.png")
  brushIMG = loadImage("brush.png")
  drinkAnimation = loadAnimation("drink1.png", "drink2.png")
  eatAnimation = loadAnimation("eat1.png", "eat2.png")
  gymAnimation1 = loadAnimation("gym1.png", "gym2.png")
  gymAnimation2 = loadAnimation("gym11.png", "gym12.png")
  backgroundIMG = loadImage("iss.png")
  movingAnimation = loadAnimation("move.png", "move1.png")
  sleepIMG = loadImage("sleep.png")
}

function setup() {
  createCanvas(1000,600);
  backGround = createSprite(width/2, height/2, 400, 200);
  backGround.addImage(backgroundIMG)
  backGround.scale = 0.2

  brushing = createSprite(width/2, 450)
  brushing.addImage(brushIMG)
  brushing.scale = 0.1
  brushing.visible = false

  sleeping = createSprite(width/2, 450)
  sleeping.addImage(sleepIMG)
  sleeping.scale = 0.1

  gym1 = createSprite(width/2, 450)
  gym1.addAnimation("gym1", gymAnimation1)
  gym1.scale = 0.1
  gym1.visible = false

  gym2 = createSprite(width/2, 450)
  gym2.addAnimation("gym2", gymAnimation2)
  gym2.scale = 0.1
  gym2.visible = false

  bathing = createSprite(width/2, 450)
  bathing.addAnimation("bath", bathAnimation)
  bathing.scale = 0.1
  bathing.visible = false

  eating = createSprite(width/2, 450)
  eating.addAnimation("eat", eatAnimation)
  eating.scale = 0.1
  eating.visible = false

  drinking = createSprite(width/2, 450)
  drinking.addAnimation("drink", drinkAnimation)
  drinking.scale = 0.1
  drinking.visible = false

  moving = createSprite(width/2, 450)
  moving.addAnimation("move", movingAnimation)
  moving.scale = 0.1
  moving.visible = false
}

function draw() {
  background(0); 

  Brush();
  Gym();
  Bath();
  EatDrink();
  
  drawSprites();
  fill(255)
  textSize(20)
  text("INSTRUCTIONS:", 10, 40)
  textSize(15)
  text("Up Arrow = Brushing", 10, 60)
  text("Down Arrow = Exercise", 10, 80)
  text("Right Arrow = Bathing", 10, 100)
  text("Left Arrow = Eating & Drinking", 10, 120)
}

function Brush() {
  if(keyDown(UP_ARROW)){
    brushing.visible = true
    gym1.visible = false
    bathing.visible = false
    eating.visible = false
    sleeping.visible = false
    moving.visible = false
  }
}

function Gym() {
  if(keyDown(DOWN_ARROW)){
    gym1.visible = true
    brushing.visible = false
    bathing.visible = false
    eating.visible = false
    sleeping.visible = false
    moving.visible = false
  }
}

function Bath() {
  if(keyDown(RIGHT_ARROW)){
    bathing.visible = true
    gym1.visible = false
    brushing.visible = false
    eating.visible = false
    sleeping.visible = false
    moving.visible = false
  }
}

function EatDrink() {
  if(keyDown(LEFT_ARROW)){
    eating.visible = true
    gym1.visible = false
    brushing.visible = false
    bathing.visible = false
    sleeping.visible = false
    moving.visible = false
  }
}

function Move(){
  if(keyDown("space")){
    moving.visible = true
    gym1.visible = false
    brushing.visible = false
    bathing.visible = false
    eating.visible = false
    sleeping.visible = false
  }
}