/*Gary Juarez
March 1, 2021*/


let bubble0, bubble1, bubble2, bubble3, bubble4, bubble5, bubble6, bubble7, bubble8, bubble9;


function setup() {
  createCanvas(windowWidth, windowHeight);
  bubble0 = new Bubble("Yellow", 5);
  bubble1 = new Bubble("green", 2);
  bubble2 = new Bubble("red", 8);
  bubble3 = new Bubble("blue", 4);
  bubble4 = new Bubble("purple", 7);
  bubble5 = new Bubble("lightBlue", 6);
  bubble6 = new Bubble("magenta", 9);
  bubble7 = new Bubble("cyan", 10);
  bubble8 = new Bubble("teal", 3);
  bubble9 = new Bubble("white", 1);
}


function draw() {
  background(0);
  bubble0.wiggle();
  bubble1.wiggle();
  bubble2.wiggle();
  bubble3.wiggle();
  bubble4.wiggle();
  bubble5.wiggle();
  bubble6.wiggle();
  bubble7.wiggle();
  bubble8.wiggle();
  bubble9.wiggle();
  bubble0.appear();
  bubble1.appear();
  bubble2.appear();
  bubble3.appear();
  bubble4.appear();
  bubble5.appear();
  bubble6.appear();
  bubble7.appear();
  bubble8.appear();
  bubble9.appear();
}
