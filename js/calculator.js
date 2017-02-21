// Power toggle
var powerState = false

// Elements
var screen = null;
var pixel = null;
var drawBuffer = null;
var backBuffer = [];
var backBufferIndex = 0;

var infixQueue = new Array ();

var head = null;
var cNode = null;

// After DOM loads, initialize variables
window.onload = function () {
	initialize ();
}

class Node {
    constructor (value, next) {
        this.value = value;
        this.next = next;
    }
}

/*******************************************************************************************
** Initialize system variables.
**
** Function sets up variables for use in the main script file, calculator.js (this one)
** 1. Find page elements
** 2. Set up draw buffers / matrices
** 3. Load character dictionary from letters.js
** 4. Prepare canvas for default state
********************************************************************************************/
function initialize () {
	screen = document.getElementById ("LCD").getContext ("2d");
	
	// Create screen buffer
	drawBuffer = screen.createImageData (96, 64);
	
    // Blank the backBuffer
	for (var j = 0; j < 64; j++) {
		backBuffer [j] = new Array (96);
	}
	
    head = new Node (null, null, null);
    cNode = head;
    
	// Create the pixel object
	pixel = screen.createImageData (1,1);
	// Set the color of the object
	pixel.data[0] = 255; // Red
	pixel.data[1] = 255; // Green
	pixel.data[2] = 255; // Blue
	pixel.data[3] = 255; // Alpha

	initializeLetters (); //letters.js -> initializeLetters ()
    
    // Toggle power to off (start in the off state) upon page load
	screen.fillStyle = "black";
	screen.fillRect (0, 0, 96, 64);	
}

// Clears canvas, clears canvas buffer, maintains answer (if one exists)
function clr () {
    backBufferIndex = 0;
    
    for (var j = 0; j < 64; j++) {
		backBuffer [j] = new Array (96);
	}
    
    slamBuffer ()
}


function equ () {
	var outStack = organizeOutput ();
	
	if (1 == 1) {
		
	}
}

function organizeOutput () {
	// Pop from queue; sort order = 0 (numbers) into output array and order > 0 (ops)
	// into op stack
	var opStack = new Array ();
	var outStack = new Array ();
	
	// Continue popping until we have every token
	while (infixQueue.length > 0) {
		// Chheck to see if token is number or op
		var poppedToken = infixQueue.pop ();
		
		if (poppedToken.order == 0) {
			outStack.push (poppedToken);
		} else {
			// Popped token is an op; check to see if the order of stacked ops agrees.
			var opPoppedToken = opStack.pop ();
			
			// Check if opStack is not empty
			if (opPoppedToken != null) {
				// Not empty; check orders. If order of existing token is higher,
				// dump contents onto outStack
				if (opPoppedToken.order > poppedToken.order) {
					// Order incorrect; dump stack
					while (opStack.length > 0) {
						outStack.push (opStack.pop ());
					}
				} else {
					// Order is fine, so add both back
					opStack.push (opPoppedToken);
					opStack.push (poppedToken);
				}
			} else {
				// It was empty, so just put it in
				opStack.push (poppedToken);
			}
		}
	}
	
	return (outStack);
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

// Commands are added as tokens
function addCommand (t) {
    // Check to make sure there is something to draw
    if (t.character != null) {
        // Draw it
        len = t.character.length;

        for (var i = 0; i < len; i++) {
            appendBackBuffer (t.character [i]);
        }
        
        slamBuffer ();
    }
    
    // Check to see if we can't collapse the current token into the prior one; if 
    // both consecutive tokens are of order 0 (a number), they should be one token.
    var poppedToken = infixQueue.pop ();
    
    // If there is a token here
    if (poppedToken != null) {
        // If the token is a number
        if (poppedToken.order == 0) {
            // Collapse this new token into the one before it (they are both numbers)
			t.character = poppedToken.character + t.character;
        } else {
			// Popped token is an op, so add it back
			infixQueue.unshift (poppedToken);
		}
    }
    
    // Add to infix command stack
    infixQueue.unshift (t);
}




