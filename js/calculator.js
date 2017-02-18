// Power toggle
var powerState = false

// Elements
var screen = null;
var pixel = null;
var drawBuffer = null;
var backBuffer = [];
var backBufferIndex = 0;

window.onload = function () {
	initialize (); // Init variables and components
}

function initialize () {
	screen = document.getElementById ("LCD").getContext ("2d");
	
	// Create screen buffer
	drawBuffer = screen.createImageData (96, 64);
	
	// Create the pixel object
	pixel = screen.createImageData (1,1);
	// Set the color of the object
	pixel.data[0] = 255; // Red
	pixel.data[1] = 255; // Green
	pixel.data[2] = 255; // Blue
	pixel.data[3] = 255; // Alpha
	
	// Toggle power to off (start in the off state) upon page load
	screen.fillStyle = "black";
	screen.fillRect (0, 0, 96, 64);	
	
	// Blank the backBuffer
	for (var j = 0; j < 64; j++) {
		backBuffer [j] = new Array (96);
	}
	
	initializeLetters (); //letters.js -> initializeLetters ()
}

// Turn the unit on and off
function togglePower () {
	// If the unit is off...
	if (powerState == false) {
		// Turn it on
		screen.fillStyle = "green";
	// If the unit is on...
	} else {
		// Turn if off
		screen.fillStyle = "black";
	}
	screen.fillRect (0, 0, 96, 64);
	// Flip the power flag
	powerState = !powerState;
}

// Each item is 5x7, with a 1px buffer on the right and bottom. Total size: 6x8.
function appendBackBuffer (c) {
	// Find the start location for drawing
	var rows = (16 * backBufferIndex) / 96;
	
	while (backBufferIndex >= 16) {
		backBufferIndex -= 16;
	}
	
	y = rows * 8;
	x = backBufferIndex * 6;
	y_l = 0;
	x_l = 0;
	
	letter = letterDict[c];
	
	// Loop through the layers of the letter
	for (var j = y; j < (y + 8); j++) {
		// Iterate through the single layer of the letter
		for (var i = x; i < (x + 6); i++) {
			backBuffer[j][i] = letter [y_l][x_l]
			x_l++;
		}
		y_l++;
		x_l = 0;
	}
	
	backBufferIndex++;
}

// Writes the backBuffer matrix into the imageData format
function slamBuffer () {
	var global_i = 0;
	
	for (var i = 0; i < 96; i++) {
		for (var j = 0; j < 64; j++) {
			if (backBuffer [j][i] == 0) { //Draw white
				drawBuffer.data[global_i + 0] = 255; // R
				drawBuffer.data[global_i + 1] = 255; // G
				drawBuffer.data[global_i + 2] = 255; // B
				drawBuffer.data[global_i + 3] = 255; // A
			} else { //Draw black
				drawBuffer.data[global_i + 0] = 0;   // R
				drawBuffer.data[global_i + 1] = 0;   // G
				drawBuffer.data[global_i + 2] = 0;   // B
				drawBuffer.data[global_i + 3] = 255; // A
			}
			global_i += 4;
		}
	}
	
	screen.putImageData (drawBuffer, 5, 5);
}



/******************************************************************************************
** Pixel Drawing
**
** Image data is structured as one large array of all the data the comprises the image.
** Each pixel of the image is separated into its RPGA components. For a 1x1 image, the
** data would look like an array of 4 values:
** i = 0 being red,
** i = 1 being green,
** i = 2 being blue,
** i = 3 being alpha. 
** For any image NxM, the total number of elements in the array is N*M*4. This data goes
** from left to right; upon hitting the max width of the canvas, the further elements
** correspond to the row of pixels below the prior.
********************************************************************************************/
function drawPixel (x, y) {
	screen.putImageData (pixel, x, y);
}
