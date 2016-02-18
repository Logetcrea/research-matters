var x,y,x1,y1;
var w,h,x,y;

var data;

function preload(){
data = loadJSON("research.json");
}

function setup() {
  var canvas = createCanvas(1280, 640);
  canvas.parent('script');

  //allinall-research.json
  var bio = data.Biology_and_Biotechnology;
  var bioLat = bio.latitude;
  var bioLon = bio.longitude;

  w = width;
  h = height;
  colorMode(HSL, 360, 100, 100);


  for (i=0; i<bio.length; i++){
    x = map(bioLon[i], -180, 180, 0, width);
    y = map(bioLat[i], 90, -90, 0, height);
    fill(150,50,50);
    noStroke();
    ellipse(x,y,3,3);
  }
}
//§§

function draw() {

}
