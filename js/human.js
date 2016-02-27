var x = 0;
var y = 0;

var data;

var mymap;

function preload(){
data = loadJSON("json/research.json");
}

function setup() {
  var canvas = createCanvas(windowWidth,windowWidth/2);
  canvas.parent('script');

  colorMode(HSL, 360, 100, 100);

  mymap = loadImage("images/earth-grey.jpg");
}

function draw() {
  image(mymap, 0, 0, width, height);

  var human = data.Human_Research;

  for (var i=0; i<human.length; i++){

    var humanLat = human[i].latitude;
    var humanLon = human[i].longitude;

    x = map(humanLon, -180, 180, 0, width);
    y = map(humanLat, 90, -90, 0, height);

    fill(55,84,80);
    noStroke();
    ellipse(x,y,3,3);
  }
}
