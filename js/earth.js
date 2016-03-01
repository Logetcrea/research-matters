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

  colorMode(HSL, 360, 100, 100);

  mymap = loadImage("images/earth.png");
}


function draw() {
  image(mymap, 0, 0, width, height);

  var earth = data.Earth_and_Space_Science;

  for (var i=0; i<earth.length; i++){

    var earthLat = earth[i].latitude;
    var earthLon = earth[i].longitude;

    x = map(earthLon, -180, 180, 0, width);
    y = map(earthLat, 90, -90, 0, height);

    fill(36,70,44);
    noStroke();
    ellipse(x,y,3,3);
  }
}
