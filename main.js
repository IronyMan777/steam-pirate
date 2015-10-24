/* Welcome to
   _____ _______ ______          __  __       _____ _____ _____         _______ ______ 
  / ____|__   __|  ____|   /\   |  \/  |     |  __ \_   _|  __ \     /\|__   __|  ____|
 | (___    | |  | |__     /  \  | \  / |     | |__) || | | |__) |   /  \  | |  | |__   
  \___ \   | |  |  __|   / /\ \ | |\/| |     |  ___/ | | |  _  /   / /\ \ | |  |  __|  
  ____) |  | |  | |____ / ____ \| |  | |     | |    _| |_| | \ \  / ____ \| |  | |____ 
 |_____/   |_|  |______/_/    \_\_|  |_|     |_|   |_____|_|  \_\/_/    \_\_|  |______|
  
  Sorry for my messy code.  I'm lazy. :P
*/
// Some initial variables...
int Width = 800;
int Height = 600;
int Framerate = 60;
int mode = 0;
var menubtnc = color(0,0,0);
var menubtnbgc = color(65,50,45);
var btnfont = createFont("Impact");

int plyrx;
int plyry;
var keys = [];

// Functions!  Woot!
void keyPressed() {
	keys[keyCode] = true;
};
void keyReleased() {
	keys[keyCode] = false;
};
void mousePressed() {
	if (mode === 0) {
		mode = 1;
	}
};
void mouseReleased() {
	
};

void button(x,y,w,h,c,bgc,t,txtsize,target,value) {
	stroke(c);
	strokeWeight(5);
	fill(bgc);
	rectMode(CENTER,CENTER);
	rect(x,y,w,h,17);
	// Agh, complicated.
	fill(c);
	textFont(btnfont,txtsize);
	textAlign(CENTER,CENTER);
	text(t,x,y);
};

void logoz() {
	background(255,255,255);
};
void menu() {
	background(25,20,20);
	button(Width/2,Height/4,200,60,menubtnc,menubtnbgc,"New Game",30,mode,3);
};
// If you get this next reference, you're stalking me.
void launchDaPonies() {
	background(30,20,20);
};

// A bit of setup...
void setup() {
	size(Width, Height);
	frameRate(Framerate);
};
// Action!
void draw() {
	if (mode === 0) {
		logoz();
	} else if (mode === 1) {
		menu();
	} else if (mode === 2) {
		launchDaPonies();
	}
};
