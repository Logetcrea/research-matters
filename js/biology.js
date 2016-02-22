var x = 0;
var y = 0;


var data = null;

function preload(){
data = loadJSON("js/research.json");
}

function setup() {
  var canvas = createCanvas(windowWidth,windowWidth/2);
  canvas.parent('script');

  colorMode(HSL, 360, 100, 100);

  for (var i=0; i<200; i++){
    var bioData = data.Biology_and_Biotechnology;
    var bio = bioData[i];
    var bioLat = bio[i].latitude;
    var bioLon = bio[i].longitude;

    x = map(bioLon, -180, 180, 0, width);
    y = map(bioLat, 90, -90, 0, height);

    fill(150,50,50);
    noStroke();
    ellipse(x,y,3,3);
  }
}
//§§§§§§§§

function draw() {

}
