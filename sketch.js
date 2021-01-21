var catimg,catimg2,catimg3,cat,gardenimg,garden,mouseimg,mouseimg2,mouseimg3,mouse;
function preload() {
    //load the images here
    catimg = loadImage("tomOne.png");
    gardenimg = loadImage("garden.png")
    mouseimg = loadImage("jerryOne.png")
    catimg2 = loadAnimation("tomTwo.png","tomThree.png")
    mouseimg2 = loadImage("jerryTwo.png")
    catimg3 = loadImage("tomFour.png") 
    mouseimg3 = loadImage("jerryFour.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     
     garden = createSprite(500,400,1000,800)
     garden.addImage(gardenimg)
    
     cat = createSprite(800,630,10,10)
     cat.addImage("cat_sitting",catimg)
     cat.scale = 0.1
     cat.setCollider("rectangle",0,0,1100,1100);
     cat.debug = true

     mouse = createSprite(200,630,10,10)
     mouse.addImage(mouseimg)
     mouse.scale = 0.1
     mouse.debug = true
     mouse.setCollider("rectangle",0,0,900,900)
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    drawSprites();
    if (cat.isTouching(mouse)) {
        cat.velocityX = 0
        cat.addImage("catLastImage",catimg3)
        cat.changeImage("catLastImage")
        mouse.addImage("mouseLastImage",mouseimg3)
        mouse.changeImage("mouseLastImage")
    }
}

function keyPressed(){
//For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    cat.velocityX = -5
    cat.addAnimation("catRunning",catimg2)
    cat.changeAnimation("catRunning")
    mouse.addImage(mouseimg2)
    mouse.changeImage(mouseimg2)
}



}

