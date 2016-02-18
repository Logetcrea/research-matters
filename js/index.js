
var x;
var y;
var x1;
var y1;
var w,h;

var counter = 0;





var bg;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  //bg = loadImage("images/space-earth.png");

  w = width;
  h = height;
  colorMode(HSL, 360, 100, 100);

}



function draw() {

  //image(bg, 0, 0, w, h);


  /*if(windowWidth > windowHeight*2){
    w = h*2;
  }

  if(windowHeight > windowWidth/2){
    h = w/2;
  }*/

  //261 biologie researches
  for (var a = 1; a < 261; a++) {
    fill(150,50,50);
    noStroke();
    ellipse(random(0,w),random(0,h),3,3);
    noLoop();
  }

  //34 earth researches
  for (var b = 1; b < 34; b++) {
    fill(360,10,50);
    noStroke();
    ellipse(random(0,w),random(0,h),3,3);
    noLoop();
  }

  //172 educational researches
  for (var c = 1; c < 172; c++) {
    fill(320,30,60);
    noStroke();
    ellipse(random(0,w),random(0,h),3,3);
    noLoop();
  }

  //261 human researches
  for (var d = 1; d < 185; d++) {
    fill(40,65,70);
    noStroke();
    ellipse(random(0,w),random(0,h),3,3);
    noLoop();
  }

  //261 physical researches
  for (var e = 1; e < 117; e++) {
    fill(220,65,45);
    noStroke();
    ellipse(random(0,w),random(0,h),3,3);
    noLoop();
  }

  //261 tech researches
  for (var f = 1; f < 209; f++) {
    fill(180,65,40);
    noStroke();
    ellipse(random(0,w),random(0,h),3,3);
    noLoop();
  }

}
