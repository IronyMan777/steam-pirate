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
void logoz() {
	background(255,255,255);
};
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
		launchDaPonies();
	}
};
