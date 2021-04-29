var h;
var m;
var s;
var scAngle;
var hrAngle;
var mnAngle;


function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background("black");  
  translate(200,200);
  rotate(-90);


 
  


 h = hour();


 m = minute();


 s = second();
scAngle = map(s,0,60,0,360)
mnAngle = map(m,0,60,0,360);
hrAngle = map(h % 12,0,12,0,360)
push();
rotate(mnAngle);
stroke("blue");
strokeWeight(7);
line(0,0,80,0);
pop();

push();
rotate(scAngle);
stroke("green");
strokeWeight(7);
line(0,0,120,0)
pop();

push();
rotate(hrAngle);
stroke("red");
strokeWeight(7);
line(0,0,50,0)
pop();
stroke("black");
point(0,0);
strokeWeight(10);
noFill();
stroke("green");
arc(0,0,300,300,0,scAngle);
stroke("blue");
arc(0,0,280,280,0,mnAngle)
stroke("red");
arc(0,0,260,260,0,hrAngle)
}



