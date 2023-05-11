let snake;
let food;
let s = 20;
let galaxy;

function setup() {
  createCanvas(800, 500);
  snake = new Snake();
  pickLocation();
  frameRate(10);
	
}

let spacefood;
function preload() {
  spacefood = loadImage('spacefood.png');
	galaxy=loadImage('galaxypng.jpg');
}

function draw() {

  image(galaxy,0,0,800,500)
  if (snake.eat(food)) {
    pickLocation();
  }
  snake.death();
  snake.update();
  snake.show();

  fill(255, 0, 100);
	image(spacefood,food.x,food.y,50,50);
  //rect(food.x, food.y, s, s);
}



function pickLocation() {
  let cols = floor(width / s);
  let rows = floor(height / s);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(s);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0, 1);
  } else if (keyCode === LEFT_ARROW) {
    snake.dir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.dir(1, 0);
  }
}

class Snake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];
  }

  eat(pos) {
    let d = dist(this.x, this.y, pos.x, pos.y);
		let a= dist(this.x,this.y,pos.x+50,pos.y);
		let b= dist(this.x,this.y,pos.x,pos.y+50);
		let c= dist(this.x,this.y,pos.x+50,pos.y+50);
		for (let i=0;i<50;i++){
			d=dist(this.x, this.y, pos.x-i, pos.y+i);
			break
		}
		
		for (let i=0;i<50;i++){
			a=dist(this.x,this.y,pos.x+50,pos.y+i);
			break
		}
		for (let i=0;i<50;i++){
			b=dist(this.x,this.y,pos.x,pos.y+50-i);
			break
			
		}
		
		for (let i=0;i<50;i++){
			c=dist(this.x,this.y,pos.x+50-i,pos.y+50+i);
			break
		}
    if (d < 1 || c < 1 || a <1 || b < 1) {
      this.total++;
      return true;
    } else {
			
      return false;
			
    }
  }

  dir(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  death() {
    for (let i = 0; i < this.tail.length; i++) {
      let pos = this.tail[i];
      let d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        this.total = 0;
        this.tail = [];
      }
    }
  }

  update() {
    if (this.total === this.tail.length) {
      for (let i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }
    this.tail[this.total - 1] = createVector(this.x, this.y);

    this.x = this.x + this.xspeed * s;
    this.y = this.y + this.yspeed * s;

    this.x = constrain(this.x, 0, width - s);
    this.y = constrain(this.y, 0, height - s);
  }

  show() {
    fill(255);
    for (let i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, s, s);
    }
    rect(this.x, this.y, s, s);
  }
}