var x = 30
function setup() {
	createCanvas(windowWidth, windowHeight); // make an HTML canvas element width x height pixels
    frameRate(1)

}

function draw() {
    if (second()==0){
      print(minute());
    }
	background(255);
    noStroke();


    //minute  
	fill(83, 121, 92, 300);
	arc(width/2+2*x, height/2+2*x*sqrt(3), 4*x, 4*x, -2*PI/3, minute()/30*PI-2*PI/3+2*PI);
  

    //second
    	stroke(180, 154, 103, 200)
    	strokeWeight(3);
    	noFill();
	arc(width/2, height/2, 8*x, 8*x, PI/3, second()/30*PI+2*PI+PI/3);
  
    //hour
    	noStroke();
    	fill(248, 102, 36, 250);
	arc(width/2+4.5*x*cos(second()/30*PI+PI/3), height/2+4.5*x*sin(second()/30*PI+PI/3), x, x, second()/30*PI+PI/3+PI, hour()*PI/12+second()/30*PI+PI/3+3*PI);
  
    
    // print(())
  // print(height)
    
}


