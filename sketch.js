let angle = 0;
let planetTexture;
let planetTexture1;
let planetTexture2;
let astronaut;
let texturee;
let snakegame;
let obstaclegame;


class Planet{
	constructor(){
		this.x=0;
		this.y=0;
		this.texture=texturee;
		
	}
	placePlanet(x,y,texturee){
	push();
	ambientLight(50);
  directionalLight(255, 255, 255, 0, 0, -1);
	
  translate(x,y,0);
  // Apply rotation and texture
  rotateY(angle);
  texture(texturee);
  // Draw the planet
  sphere(100);
  
  // Update the angle for rotation
  angle += 0.01;
		pop();
	}
}
function preload() {
  planetTexture = loadImage('download.jfif');
	planetTexture1= loadImage('plannet.jpg');
	//planetTexture2= loadImage('newtexture.jpg');
	astronaut= loadImage('astronautt.png');
}

function setup() {
  createCanvas(800, 400, WEBGL);
}



function draw() {
  background(0);
  let p= new Planet();
	let q=new Planet();
	//let r=new Planet();
  // Set up the camera
  camera(-50,-200, 600);
  image(astronaut,400,50);
	
	p.placePlanet(200,-100,planetTexture);
	
	q.placePlanet(-400,-100,planetTexture1);
	//r.placePlanet(-100,200,planetTexture2);
	
	 snakegame = createButton('Snake game');
  snakegame.position(480, 180);
	
	obstaclegame=createButton('Obstacle game');
	obstaclegame.position(90,180);
	
	textFont('Arial', 20);
  textAlign(CENTER, CENTER);
	 fill(255);
  textSize(30);
  text("Click buttons to toggle rotation", 300, 120);
	
}
