let myXPos = 100;
let myYPos = 100;

function preload(){
    marioImage = loadImage("https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png");
}
function setup() {
    createCanvas(500,500);
    noStroke();

    rectMode(CENTER);
}

function draw() {
    background(0);

    fill(255,0,0);
    //rect(myXPos, myYPos, 50, 50);
    Image(marioImage,myXPos,myYPos,50,50);

    // If the left arrow key is pressed, subtract 3 from the current value of myXPos
    if(keyIsDown(LEFT_ARROW)) {
        myXPos -= 3;
    }
    // If the right arrow key is pressed, add 3 to the current value of myXPos
    if(keyIsDown(RIGHT_ARROW)) {
        myXPos += 3;
    }

    if(keyIsDown(UP_ARROW)) {
        myYPos -= 3;
    }

    if(keyIsDown(DOWN_ARROW)) {
        myYpos += 3;
    }
}


