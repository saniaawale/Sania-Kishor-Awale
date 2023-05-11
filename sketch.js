let angle = 0;
let planetTexture;
let planetTexture1;
let planetTexture2;
let texturee;

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
	planetTexture2= loadImage('newtexture.jpg');
}

function setup() {
  createCanvas(800, 400, WEBGL);
	
}



function draw() {
  background(0);
  let p= new Planet();
	let q=new Planet();
	let r=new Planet();
  // Set up the camera
  camera(0,-100, 600);
  
	p.placePlanet(200,-100,planetTexture);
	
	q.placePlanet(-400,-100,planetTexture1);
	r.placePlanet(-100,200,planetTexture2);
	
	
}