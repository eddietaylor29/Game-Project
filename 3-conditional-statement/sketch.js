//create an empty array called balls
let balls = [];

//create a variable to hold your avatar
let me;


function setup() {
  createCanvas(500, 400);

  //make one avatar called me
  me = new Avatar(width/2, 300, 3);

}

function draw(){
	background("orange");
  fill("grey")
  rect(0,200,500,200)
  fill("black");
  rect(0,100,498,200);
  fill("yellow");
  rect(0,195,500,5);
  rect(0,205,500,5);


  me.drawMe();
  me.moveMe();

  if (frameCount % 25 == 0) {
      let  b = new Ball(width, random(0,height), -3);
      balls.push(b);
      console.log(balls); //print the balls array to the console
    }

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	 	      balls[i].drawBall();
       	  balls[i].moveBall();
        	balls[i].bounceBall();
	  }

}

//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawMe(){  // draw the running person
    		stroke("red");
        strokeWeight(2);
    		fill("black");
		    rect(this.x,this.y,20,20);
        line(this.x,this.y, this.x, this.y+40);
        line(this.x, this.y+40, this.x-20, this.y+60); //back left leg
        line(this.x, this.y+40, this.x+10, this.y+50); // right leg
        line(this.x+10, this.y+50, this.x+5, this.y+60);//right leg
        line(this.x-10, this.y+25, this.x+10, this.y+35);
        fill("blue");
        stroke("black");
        rect(this.x+5, this.y-20, 10,10);
        ellipse(this.x+10,this.y-7,20,10);


}



	moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed+5;
    }

    if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
        this.y += this.speed+10;
    }
	}

  die(){

  }

}


//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;
	}

	// draw a ball on the screen at x,y
	drawBall(){
    	stroke(0);
      strokeWeight(1);
    	fill("grey");
		  ellipse(this.x,this.y,20,15);
      fill("blue");
      rect(this.x-13,this.y-13,10,10);
      fill("dark grey")
      ellipse(this.x+11,this.y,5,11)
      ellipse(this.x,this.y+8,9,16)
	}

	//update the location of the ball, so it moves across the screen
	moveBall(){
		this.x = this.x+ this.speed;
		this.y = this.y+.5;
	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceBall(){
    		if (this.x >= me.x-30 && this.x <= me.x+5 && this.y > me.y-40 && this.y < me.y+40){
      			this.speed = -this.speed;
    		}
  	}

}
