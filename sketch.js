var santa;
var occhiali;
var bocca;
var tund1;
var tund2;
var tund3;
var tund4;
var mano1;
var mano2;

function preload(){
    santa=loadImage("./assets/santa.png");
    occhiali=loadImage("./assets/occhiali.png");
    bocca=loadImage("./assets/bocca.png");
    tund1=loadImage("./assets/tund1.png");
    tund2=loadImage("./assets/tund2.png");
    tund3=loadImage("./assets/tund3.png");
    tund4=loadImage("./assets/tund4.png");
    mano1=loadImage("./assets/mano1.png");
    mano2=loadImage("./assets/mano2.png");
 
}

function setup() {

    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER); 
    
    
	mic = new p5.AudioIn();
	mic.start();
}

function draw() {
	
    background(137,216,100);
	var volume = mic.getLevel();

    image(santa,width/2,height/2,1200,846);

    push();
    var minSize = width / 50;
	var maxSize = width/30;
	var size = map(volume, 0, 1, minSize, maxSize);
  
   
    
    image(bocca,width/2,height/2,size*40,size*30); 
    image(occhiali,width/2,height/2,size*40,size*30);
    image(tund1,width/2,height/2,size*40,size*30);
    image(tund2,width/2,height/2,size*40,size*30);
    image(tund3,width/2,height/2,size*40,size*30);
    image(tund4,width/2,height/2,size*40,size*30);
    image(mano1,width/2,height/2,size*40,size*30);
    image(mano2,width/2,height/2,size*40,size*30);

    pop();

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}