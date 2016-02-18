var x,y,x1,y1;
var w,h;

var data;

function preload(){
data = loadJSON("research.json");
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);

  //allinall-research.json
  var bio = data.Biology_and_Biotechnology;
  var earth = data.Earth_and_Space_Science;
  var educational = data.Educational_Activities_and_Outreach;
  var human = data.Human_Research;
  var physical = data.Physical_Science;
  var technical = data.Technology_Development_and_Demonstration;

  w = width;
  h = height;
  colorMode(HSL, 360, 100, 100);

  for (i=0; i<bio.length; i++){
    fill(150,50,50);
    noStroke();
    ellipse(random(0,w),random(0,h),3,3);
  }
}


function draw() {
  //
  // //261 biologie researches
  // for (var i = 1; i < 261; i++) {
  //   fill(150,50,50);
  //   noStroke();
  //   ellipse(random(0,w),random(0,h),3,3);
  //   noLoop();
// }


}
