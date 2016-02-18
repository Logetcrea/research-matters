
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

  //261 human researches
  for (var i = 1; i < 185; i++) {
    fill(40,65,70);
    noStroke();
    ellipse(random(0,w),random(0,h),3,3);
    noLoop();
}


}
