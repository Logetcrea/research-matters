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

  var technical = data.Technology_Development_and_Demonstration;

  for (var i=0; i<technical.length; i++){

    var technicalLat = technical[i].latitude;
    var technicalLon = technical[i].longitude;

    x = map(technicalLon, -180, 180, 0, width);
    y = map(technicalLat, 90, -90, 0, height);

    fill(180,65,40);
    noStroke();
    ellipse(x,y,3,3);
  }
}
