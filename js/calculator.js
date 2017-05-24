/******************************************************************************************
** calculator.js
**
** == Summary ==
** Processes all calculator input; main file.
**
********************************************************************************************/

// Power toggle
var powerState = false

// Elements
var screen = null;
var pixel = null;
var drawBuffer = null;
var backBuffer = [];
var backBufferIndex = 0;

var infixQueue = new Array ();

// After DOM loads, initialize variables
window.onload = function () {
	initialize ();
}

class token {
    constructor (c=null, o, f=null) {
        this.character = c;
        this.order = o;
        this.func = f;
    }
}

/***************************
** Token tiers
**
** 0: Static number
** 1: Ops + -
** 2: Ops / *
** 3: Ops ^ ^-1 ^2 sqrt(
** 4: brackets ( )
** 5:
** 6: funcs sin( log( etc
*****************************/

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
    
	// Create the pixel object
	pixel = screen.createImageData (1,1);
	// Set the color of the object
	pixel.data[0] = 255; // Red
	pixel.data[1] = 255; // Green
	pixel.data[2] = 255; // Blue
	pixel.data[3] = 255; // Alpha

	initializeLetters (); // letters.js -> initializeLetters ()
    initializeButtonEvents (); // events.js -> initializeButtonEvents ()
    
    // Toggle power to off (start in the off state) upon page load
	screen.fillStyle = "black";
	screen.fillRect (0, 0, 96, 64);	
}

/********************************************************************************************
**
** Fired upon pressing "=" key; calls below processing functions to calculate answer.
**
********************************************************************************************/
function equ () {
    // Organize the tokens into something we can process
    var outStack = organizeOutput (infixQueue);
    // Calculate the answer
    var answer = calcOutput (outStack);
    // Print out the answer
    appendBackBuffer_Answer (answer.character);
    
    slamBuffer ();
}

/********************************************************************************************
**
** Solves the processed input, reading the outStack from bottom to top.
**
********************************************************************************************/
function calcOutput (stack) {
    var answer = new Array ();

    // Iterate through array until we find an op
    while (stack.length > 0) {
        // Pop a token from the front of the stack
        poppedToken = stack.shift ();
        
        // If token is a number, place it on the answer stack. Keep doing
        // this until we find an op token
        if (poppedToken.order == 0) {
            answer.push (poppedToken);
        } else {
            // Token is an op. Use number tokens in the answer stack to calculate
            // the answer. After, place answer onto answer stack as number token.
            
            // Token is a function token (top priority)
            if (poppedToken.order == 6) {
                a = answer.pop ();
                
                answer.push (new token (poppedToken.func (a), 0));
            // Token is some other op; take 2 numbers
            } else if (poppedToken.order < 4) {
                a = answer.pop ();
                b = answer.pop ();
                
                answer.push (new token (poppedToken.func (a, b), 0));
            } 
        }
    }
    
    return (answer.pop ());
}

/********************************************************************************************
**
** Organize the content of the infixQueue into two stacks, "opStack" for operators and 
** "outStack" for numbers. Once all tokens from infixQueue are exhausted, move all operators
** from opStack onto the output stack, outStack. Uses Shunting-yard algorithm.
**
********************************************************************************************/
function organizeOutput (inStack) {
    // ============ Debug Stuff ===============
    console.log ("\nInput stack:");
    for (var i = 0; i < inStack.length; i++) {
        console.log (inStack [i].character);
    }
    
    // Pop from queue; sort order = 0 (numbers) into output array and order > 0 (ops)
    // into op stack
    // NOTE: Should a parenthesis '(' order = 4 be found, do not sort and instead prepare
    // to call self (recursively) with clipped token stack
    var opStack = new Array ();     // Operator Stack 
    var outStack = new Array ();    // Output Stack
    var recStack = new Array ();    // Recursive output stack
    var recStacking = false;        // Build clipped token stack flag
    var depth = 0;
    
    // Continue popping from start of queue until we have every token
    while (inStack.length > 0) {
        // Check to see if token is number or op
        var poppedToken = inStack.shift ();
        
        // Creating new substack for recursive call to self
        if (recStacking) {
            // Token is a parenthesis
            if (poppedToken.order == 4) {
                // Token is another opening parenthesis
                if (poppedToken.character == '(') {
                    // Add to stack and add 1 depth
                    recStack.push (poppedToken);
                    depth++;
                    
                // Token is a closing parenthesis but depth is not 0
                } else if (poppedToken.character == ')' && depth > 0) {
                    // Add to stack and subtract one depth
                    recStack.push (poppedToken);
                    depth--;
                    
                // Token is a closing parenthesis of depth 0
                } else {
                    // Place answer on outStack and end recStacking
                    outStack.push (calcOutput (organizeOutput (recStack)));
                    recStack = new Array ();
                    recStacking = false;
                }
            
            // Token is some other thing
            } else {
                // Add to stack
                recStack.push (poppedToken);
            }
            
        // Normal operation
        } else {
            // Token is a parenthesis
            if (poppedToken.order == 4) {
                // Check to make sure it is a valid opening parenthesis
                if (poppedToken.character != '(') {
                    // Error: Impossible ordering
                } else {
                    recStacking = true;
                }
                
            // Token is a number
            } else if (poppedToken.order == 0) {
                outStack.push (poppedToken);
            
            // Token is an operator
            } else {
                // Check to see if the order of stacked operators agrees. Operator below
                // newly added operator must be of lesser or equal order
                var opPoppedToken = opStack.pop ();
                
                // Check if opStack is not empty
                if (opPoppedToken != null) {
                    // Not empty; check orders. If order of existing token is higher,
                    // dump contents onto outStack
                    if (opPoppedToken.order > poppedToken.order) {
                        // Order incorrect; dump stack
                        // Put the recently popped op token onto outStack
                        outStack.push (opPoppedToken);
                        // Put the rest of the op tokens onto outStack
                        while (opStack.length > 0) {
                            outStack.push (opStack.pop ());
                        }
                        // Place the new op token on opStack
                        opStack.push (poppedToken);
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
    }

    // Pop any remaining ops in the op stack
    while (opStack.length > 0) {
        outStack.push (opStack.pop ());
    }

    // ============ Debug Stuff ===============
    console.log ("\nOutput stack:");
    for (var i = 0; i < outStack.length; i++) {
        console.log (outStack [i].character);
    }
    console.log ("=====================");
    
    return (outStack);
}

/********************************************************************************************
**
** Adds a command token (token object) corresponding to the pressed button to the token
** queue "infixQueue". 
**
** Token object consists of:
** 1. String of characters E.G. "sin(" or "1".
** 2. Function that should fire upon the button's operation.
**
** If the token has characters included, they are drawn to the screen. 
** 
** If the last token before the most recent token contained a numeric character, such as
** "1", consecutive numbers (E.G. 1, 2, 3, 4) will be collapsed into one token with one
** number (E.G. 1234).
**
********************************************************************************************/
function addCommand (t) {
    // Check to make sure there is something to draw
    if (t.character != null) {
        // Append to buffer & draw
        appendBackBuffer (t.character);     
        slamBuffer ();
    }
    
    // Check to see if we can't collapse the current token into the prior one; if 
    // both consecutive tokens are of order 0 (a number), they should be one token.
    var poppedToken = infixQueue.pop ();
    
    // If there is a token here
    if (poppedToken != null) {
        // If both tokens are numbers
        if (poppedToken.order == 0 && t.order == 0) {
            // Corner case: order 0 token is a negative sign
            // Since the neg sign is marked as a ~ in the lookup, convert it to a normal
            // - sign so that the Number () function can properly convert later.
            if (poppedToken.character == "~") {
                t.character = "-" + t.character;
                
            // Else: token is just another number
            } else {
                // Collapse this new token into the one before it (they are both numbers)
                t.character = poppedToken.character + t.character;
            }
        } else {
			// Popped token is an op, so add it back
			infixQueue.push (poppedToken);
		}
    }
    
    // Add to infix command stack
    infixQueue.push (t);
}

/********************************************************************************************
**
** Misc button functions
**
********************************************************************************************/

// Clears canvas, clears canvas buffer, maintains answer (if one exists)
function clr () {
    // Reset drawing index
    backBufferIndex = 0;
    
    // Blank draw buffer
    for (var j = 0; j < 64; j++) {
		backBuffer [j] = new Array (96);
	}
    
    // Slam the blank buffer (blank the screen)
    slamBuffer ();
    
    // Blank infixQueue
    infixQueue = new Array ();
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
