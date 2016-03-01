var x = 0;
var y = 0;
var mymap;

var data;

function preload(){
  data = loadJSON("json/research.json");
}

function setup() {
  var canvas = createCanvas(windowWidth,windowWidth/2);
  canvas.parent('script');

  mymap = loadImage("images/earth.png");

  colorMode(HSL, 360, 100, 100);
}

function draw() {
  image(mymap, 0, 0, width+5, height+10);

  var bio = data.Biology_and_Biotechnology;

  for (var i=0; i<bio.length; i++){

    var bioLat = bio[i].latitude;
    var bioLon = bio[i].longitude;

    x = map(bioLon, -180, 180, 0, width);
    y = map(bioLat, 90, -90, 0, height);

    fill(150,50,50);
    noStroke();
    ellipse(x,y,3,3);
  }
}
