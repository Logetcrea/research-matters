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

  var physical = data.Physical_Science;

  for (var i=0; i<physical.length; i++){

    var physicalLat = physical[i].latitude;
    var physicalLon = physical[i].longitude;

    x = map(physicalLon, -180, 180, 0, width);
    y = map(physicalLat, 90, -90, 0, height);

    fill(220,65,45);
    noStroke();
    ellipse(x,y,3,3);
  }
}
