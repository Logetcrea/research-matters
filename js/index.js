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

  mymap = loadImage("images/earth-grey.jpg");
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

  var physical = data.Physical_Science;

  for (var j=0; j<physical.length; j++){

    var physicalLat = physical[j].latitude;
    var physicalLon = physical[j].longitude;

    x = map(physicalLon, -180, 180, 0, width);
    y = map(physicalLat, 90, -90, 0, height);

    fill(220,65,45);
    noStroke();
    ellipse(x,y,3,3);
  }

  var bio = data.Biology_and_Biotechnology;

  for (var k=0; k<bio.length; k++){

    var bioLat = bio[k].latitude;
    var bioLon = bio[k].longitude;

    x = map(bioLon, -180, 180, 0, width);
    y = map(bioLat, 90, -90, 0, height);

    fill(150,50,50);
    noStroke();
    ellipse(x,y,3,3);
  }

  var earth = data.Earth_and_Space_Science;

  for (var l=0; l<earth.length; l++){

    var earthLat = earth[l].latitude;
    var earthLon = earth[l].longitude;

    x = map(earthLon, -180, 180, 0, width);
    y = map(earthLat, 90, -90, 0, height);

    fill(360,10,50);
    noStroke();
    ellipse(x,y,3,3);
  }

  var educational = data.Educational_Activities_and_Outreach;

  for (var m=0; m<educational.length; m++){

    var educationalLat = educational[m].latitude;
    var educationalLon = educational[m].longitude;

    x = map(educationalLon, -180, 180, 0, width);
    y = map(educationalLat, 90, -90, 0, height);

    fill(320,30,60);
    noStroke();
    ellipse(x,y,3,3);
  }

  var human = data.Human_Research;

  for (var n=0; n<human.length; n++){

    var humanLat = human[n].latitude;
    var humanLon = human[n].longitude;

    x = map(humanLon, -180, 180, 0, width);
    y = map(humanLat, 90, -90, 0, height);

    fill(40,65,70);
    noStroke();
    ellipse(x,y,3,3);
  }
}
