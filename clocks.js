var x = 30
function setup() {
	createCanvas(windowWidth, windowHeight); // make an HTML canvas element width x height pixels

}

function draw() {
	background(255);
    noStroke();
  
	fill(248, 102, 36, 450);
	arc(width/2+2.5*x+2.5*x*cos(minute()/30*PI-2*PI/3), height/2+2.5*x*sqrt(3)+2.5*x*sin(minute()/30*PI-2*PI/3), x, x, minute()/30*PI+PI/3, hour()*PI/12+minute()/30*PI+PI/3);
  
	fill(86, 203, 249, 300);
	arc(width/2+2.5*x, height/2+2.5*x*sqrt(3), 4*x, 4*x, -2*PI/3, minute()/30*PI-2*PI/3);
  

	fill(244, 9, 71, 150);
	arc(width/2, height/2, 8*x, 8*x, PI/3, second()/30*PI+PI/3);
  
    print(minute());
    
}
