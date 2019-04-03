//create a variable to hold one ball
let b;
let anotherBall;
let c;
let j;
let a;

function setup() {
  createCanvas(800, 400);
  b = new Ball(0, 100,"red"); //make a new ball from the Ball class and call it b.
  anotherBall = new Ball(200,20,"green");
  c = new Ball (0,250,"blue");
  j = new Ball (25,75,"green");
  a = new Tree (80,90,"blue");
}


function draw(){
	background(220);
    b.drawBall(); //draw the ball called b (go look in the Ball class for the drawBall function)
    b.moveBall(); //move the ball called b (go look in the Ball class for the moveBall function)
    anotherBall.drawBall();
    anotherBall.moveBall();
    c.drawBall();
    c.moveBall();
    j.drawBall();
    j.moveBall();
    a.moveTree();
    a.drawTree();


}


//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y,color){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color= color;
	}
	drawBall(){  // draw a ball on the screen at x,y
    		stroke(80);
    		fill(this.color);
		    ellipse(this.x,this.y,1500,10);
	}
	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+.25;
		this.y = this.y+.125;
	}
}
class Tree {

	constructor(x,y,color){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color= color;
	}
	drawTree(){  // draw a ball on the screen at x,y
    		stroke(80);
    		fill(this.color);
		    rect(this.x,this.y,100,100);
	}
	moveTree(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+.25;
		this.y = this.y+.125;
	}
}
