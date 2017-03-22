/******************************************************************************************
** drawing.js
**
** == Summary ==
** Controls canvas drawing procedures and pixel management.
**
** System is called in order of:
** 1. appendBackBuffer () or appendBackBuffer_Answer (), for placing lettering information into
**      the backBuffer matrix
** 2. rollover (), called during appendBackBuffer () if there is no more screen space
** 3. slamBuffer (), for copying the backBuffer matrix data into imageData and refreshing
**      the canvas for drawing 
********************************************************************************************/

// Static variables
var LCD_PIXEL_WIDTH = 96;       // Number of pixels on canvas horizontally
var LCD_PIXEL_HEIGHT = 64;      // Number of pixels on canvas vertically
var LETTER_PIXEL_WIDTH = 6;     // Number of pixels one letter is made of, horizontally
var LETTER_PIXEL_HEIGHT = 8;    // Number of pixels one letter is made of, vertically

// Maximum # of letters that can fit on one line of the LCD
var MAX_LETTERS_ACROSS = Math.floor (LCD_PIXEL_WIDTH / LETTER_PIXEL_WIDTH);
// Maximum # of letters that can fit on one column of the LCD
var MAX_LETTERS_DOWN = Math.floor (LCD_PIXEL_HEIGHT / LETTER_PIXEL_HEIGHT);

/******************************************************************************************
** Pixel Drawing
**
** Append the backBuffer matrix with letters in string s. Letter pixel matrices are
** queried from letters.js (letterDict) by character. Each letter is then appending at the
** ending of the previous letter. If there is no more room after the last letter, the
** cursor will move to a new line (LETTER_PIXEL_HEIGHT rows down).
********************************************************************************************/
function appendBackBuffer (s) {
    for (var k = 0; k < s.length; k++) {
        var c = s[k];
        
        // backBufferIndex indicates how many letters currently reside on screen, used to
        // find the next draw position. Index is a value 0 to (16 * 8).

        // Calculate row on which to draw (0 to 7)
        var rows = Math.floor ((LETTER_PIXEL_WIDTH * backBufferIndex) / LCD_PIXEL_WIDTH);
        
        // Check for rollover
        if (rows >= MAX_LETTERS_DOWN) {
            rollover ();
            // Calculate row again
            rows = Math.floor ((LETTER_PIXEL_WIDTH * backBufferIndex) / LCD_PIXEL_WIDTH);
        }
        
        // Make sure the current index is between 0 and 15 (since we already have the row)
        var workingBufferIndex = backBufferIndex - (16 * Math.floor (backBufferIndex / 16));

        // Calculate top left pixel coordinates for letter draw
        var y = rows * LETTER_PIXEL_HEIGHT;
        var x = workingBufferIndex * LETTER_PIXEL_WIDTH;
        // Letter data draw coordinates
        var y_l = 0;
        var x_l = 0;

        // Extract matrix data from dictionary
        letter = letterDict[c];

        // Iterate through the rows of the letter
        for (var j = y; j < (y + LETTER_PIXEL_HEIGHT); j++) {
            // Iterate through the single layer of the letter
            for (var i = x; i < (x + LETTER_PIXEL_WIDTH); i++) {
                backBuffer[j][i] = letter [y_l][x_l]
                x_l++;
            }
            y_l++;
            x_l = 0;
        }

        // Add 1 to index to indicate addition of letter
        backBufferIndex++;
    }
}

/******************************************************************************************
** LCD Row Rollover
**
** Removes the top row of letter information from the backBuffer matrix
** (of LETTER_PIXEL_HEIGHT pixel rows) and appends a blank letter row at the bottom of the
** matrix. Afterwords, moves the write cursor (backBufferIndex) back MAX_LETTERS_ACROSS
** letters to draw at the left edge of the LCD.
********************************************************************************************/
function rollover () {
    // Pop the top letter row off
    // Append a new letter row on the bottom
    for (var i = 0; i < LETTER_PIXEL_HEIGHT; i++) {
        backBuffer.shift ();
        backBuffer.push (new Array (LETTER_PIXEL_WIDTH * LCD_PIXEL_WIDTH));
    }
    
    // Draw the update
    slamBuffer ();
    // Reposition draw index
    backBufferIndex -= MAX_LETTERS_ACROSS;
}

// Special version of the appender that appends a formatted answer
function appendBackBuffer_Answer (s) {
    // Calculate row on which to draw
    var rows = Math.floor ((LETTER_PIXEL_WIDTH * backBufferIndex) / LCD_PIXEL_WIDTH);
    
    // Make sure the current index is between 0 and 15 (since we already have the row)
    var workingBufferIndex = backBufferIndex - (16 * Math.floor (backBufferIndex / 16));

    // Calculate top left pixel coordinates for letter draw
    var y = rows * LETTER_PIXEL_HEIGHT;
    var x = workingBufferIndex * LETTER_PIXEL_WIDTH;
    // Letter data draw coordinates
    var y_l = 0;
    var x_l = 0;
    
    var space = letterDict [" "];
    
    // blank the rest of the existing row with spaces
    while (workingBufferIndex < 16) {
        // Iterate through the rows of the letter
        for (var j = y; j < (y + LETTER_PIXEL_HEIGHT); j++) {
            // Iterate through the single layer of the letter
            for (var i = x; i < (x + LETTER_PIXEL_WIDTH); i++) {
                backBuffer[j][i] = space [y_l][x_l]
                x_l++;
            }
            y_l++;
            x_l = 0;
        }
        // Blank letter draw coords
        y_l = 0;
        x_l = 0;
        // Increment the draw index
        workingBufferIndex++;
        // calibrate the x axis draw position
        x = workingBufferIndex * LETTER_PIXEL_WIDTH;
        // calibrate data position
        backBufferIndex++;
    }
    
    // We should be on a new line unless something very bad happened.
    // recalibrate coords
    rows = Math.floor ((LETTER_PIXEL_WIDTH * backBufferIndex) / LCD_PIXEL_WIDTH);
    
    // Check for rollover
    if (rows >= MAX_LETTERS_DOWN) {
        rollover ();
        // Calculate row again
        rows = Math.floor ((LETTER_PIXEL_WIDTH * backBufferIndex) / LCD_PIXEL_WIDTH);
    }
    
    workingBufferIndex = backBufferIndex - (16 * Math.floor (backBufferIndex / 16));
    y = rows * LETTER_PIXEL_HEIGHT;
    x = workingBufferIndex * LETTER_PIXEL_WIDTH;
    
    // Draw spaces until we reach enough space to draw answer
    while (workingBufferIndex < (16 - s.length)) {
        // Iterate through the rows of the letter
        for (var j = y; j < (y + LETTER_PIXEL_HEIGHT); j++) {
            // Iterate through the single layer of the letter
            for (var i = x; i < (x + LETTER_PIXEL_WIDTH); i++) {
                backBuffer[j][i] = space [y_l][x_l]
                x_l++;
            }
            y_l++;
            x_l = 0;
        }
        // Blank letter draw coords
        y_l = 0;
        x_l = 0;
        // Increment the draw index
        workingBufferIndex++;
        // calibrate the x axis draw position
        x = workingBufferIndex * LETTER_PIXEL_WIDTH;
        // calibrate data position
        backBufferIndex++;
    }
    
    // draw answer
    for (var i = 0; i < s.length; i++) {
        appendBackBuffer (s [i]);
    }
}

// Writes the backBuffer matrix into the imageData format
function slamBuffer () {
    var global_i = 0;

    // Copy data from back buffer matrix to draw buffer array

    // Iterate from the rows of the back buffer
    for (var i = 0; i < LCD_PIXEL_HEIGHT; i++) {
        // Iterate through a single layer of the back buffer
        for (var j = 0; j < LCD_PIXEL_WIDTH; j++) {
            // If value is 1, draw pure white pixel
            if (backBuffer [i][j] == 1) {
                drawBuffer.data[global_i + 0] = 255; // R
                drawBuffer.data[global_i + 1] = 255; // G
                drawBuffer.data[global_i + 2] = 255; // B
                drawBuffer.data[global_i + 3] = 255; // A
            // If value is 0, draw pure black pixel
            } else { //Draw black
                drawBuffer.data[global_i + 0] = 0;   // R
                drawBuffer.data[global_i + 1] = 0;   // G
                drawBuffer.data[global_i + 2] = 0;   // B
                drawBuffer.data[global_i + 3] = 255; // A
            }
            
            // Add 4 to index as each pixel is comprised of 4 parts (RGBA)
            global_i += 4;
        }
    }

    // Place data onto the canvas
    screen.putImageData (drawBuffer, 0, 0);
}

/******************************************************************************************
** Test Drawing
**
** System writes alternating black and white vertical bars to the canvas using the
** predetermined pixel bounds (LCD_PIXEL_WIDTH x LCD_PIXEL_HEIGHT)
********************************************************************************************/
function testWrite () {
    var flippyflop = true;

    for (var i = 0; i < (LCD_PIXEL_WIDTH * LCD_PIXEL_HEIGHT * 4); i += 4) {
        if (flippyflop == true) {
            drawBuffer.data[i + 0] = 255; // R
            drawBuffer.data[i + 1] = 255; // G
            drawBuffer.data[i + 2] = 255; // B
            drawBuffer.data[i + 3] = 255; // A
            
            flippyflop = !flippyflop;
        } else {
            drawBuffer.data[i + 0] = 0; // R
            drawBuffer.data[i + 1] = 0; // G
            drawBuffer.data[i + 2] = 0; // B
            drawBuffer.data[i + 3] = 255; // A
            
            flippyflop = !flippyflop;
        }
    }

    screen.putImageData (drawBuffer, 0, 0);
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
