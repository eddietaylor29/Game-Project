//create an empty array called balls
let balls = [];
let hitcount = 0
let timer = 0
//create a variable to hold your avatar
let me;
let died = false;



function setup() {
  createCanvas(500, 400);

  //make one avatar called me
  me = new Avatar(width/2, 300, 3);

}

function draw(){
	background(220);

  me.drawMe();
  me.moveMe();
  me.die();
  Gametimer();

  if (frameCount % 25 == 0) {
      // let randomColor = color(random(255),random(255),random(255));
      let  b = new Ball(width, random(0,height), -3, color(random(255),random(255),random(255)));
      balls.push(b);
      //console.log(balls); //print the balls array to the console
    }

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	 	      balls[i].drawBall();
       	  balls[i].moveBall();
          if (died == false){
            balls[i].bounceBall();
          }

	  }

}

function Gametimer() {

  noStroke();
  fill("red");
  textAlign(0, 10);
  textSize(30);
  text(timer, 450, 50);

  // while (timer > 0) {  // this doesn't work because it's all happening at the same time
  //   timer --;
  // }

  // frameCount --> this keeps track of the number of times the program has gone throught the code, 60 = 1 second
  // % ---> this is the Modulo operator, it divides numbers and evaluates to the remainder: 17 % 5 evaluates to 2 remainder
  // this can be used to determine if the number on the left is divisible by the number on the right
  if (died == false){
    if (frameCount % 60 == 0 && timer >= 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
      timer ++;
  }

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
    		stroke("green");
        strokeWeight(3);
    		fill(201, 234, 242);
		    ellipse(this.x,this.y,20,20);
        line(this.x,this.y+10, this.x, this.y+40);
        line(this.x, this.y+40, this.x-20, this.y+60);
        line(this.x, this.y+40, this.x+10, this.y+50);
        line(this.x+10, this.y+50, this.x+5, this.y+60);
        line(this.x, this.y+15, this.x-10, this.y+25);
        line(this.x-10, this.y+25, this.x+10, this.y+35);
	}

	moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
    }
	}

  die(){
    if (hitcount == 6) {
      print("die");
      died = true
      textSize(32);
      fill("red")
      noStroke();
      text('You Died :(',10,47);
      fill(220);
      rect(me.x-25, me.y-15, 90, 200)


    }
  }

}


//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed, ballColor){
		this.x = x;
    this.y = y;
    this.speed = speed;
    this.ballColor = ballColor;

	}

	// draw a ball on the screen at x,y
	drawBall(){
    	stroke(0);
      strokeWeight(1);
    	fill(color(this.ballColor));
		  ellipse(this.x,this.y,10,10);
	}

	//update the location of the ball, so it moves across the screen
	moveBall(){
		this.x = this.x+ this.speed;
		this.y = this.y+.5;
	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceBall(){
    		if (this.x >= me.x-15 && this.x <= me.x+15 && this.y > me.y-40 && this.y < me.y+40){
            this.speed = -this.speed;
        
            hitcount = hitcount +1
    		}
  	}

}
