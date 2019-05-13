var x = 450;
var y = 25;
function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  rectMode(CENTER);
}
function draw() {
  background("black");
  fill("red");
  ellipse(x,y,20,20);
  bumper(150,450);
}
class bumper {

draw(bumper);
push();
translate(bumperx, bumpery);
rotate(45);
fill("red");
rect(0,0,150,40);
pop();

push();
translate(350,350)
rotate(-55);
fill("red");
rect(-75,250,150,40);
pop();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    x = x-5;
  } else if (keyCode === RIGHT_ARROW) {
    x = x+5;
  }
}
