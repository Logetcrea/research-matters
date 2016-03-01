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

  var educational = data.Educational_Activities_and_Outreach;

  for (var i=0; i<educational.length; i++){

    var educationalLat = educational[i].latitude;
    var educationalLon = educational[i].longitude;

    x = map(educationalLon, -180, 180, 0, width);
    y = map(educationalLat, 90, -90, 0, height);

    fill(320,30,60);
    noStroke();
    ellipse(x,y,3,3);
  }
}
