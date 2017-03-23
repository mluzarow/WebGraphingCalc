/******************************************************************************************
** functions.js
**
** == Summary ==
** Contains functions for specific mathematical operations handled.
**
********************************************************************************************/

// Truncates trailing numbers behind a decimal to a maximum of 10 numbers
function truncate (a) {
    // Check if number is float
    if (a % 1 != 0) {
        // Remove this cheap fix !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        return (Number (a.toFixed (10)).toString ());
    }
    
    return (a.toString ());
}

function add (a, b) {
    a = Number (a.character);
    b = Number (b.character);
    
    return (truncate (a + b));
}

function subtract (a, b) {
    a = Number (a.character);
    b = Number (b.character);
    
	return (truncate (b - a));
}

function divide (a, b) {
    a = Number (a.character);
    b = Number (b.character);
    
	return (truncate (b / a));
}

function multiply (a, b) {
    a = Number (a.character);
    b = Number (b.character);
    
	return (truncate (a * b));
}

function log (a) {
    a = Number (a.character);

	return (truncate (Math.log (a)));
}

function naturalLog (a) {
    a = Number (a.character);
    
	return (truncate (Math.naturalLog (a)));
}

function sine (a) {
    a = Number (a.character);
    
    return (truncate (Math.sin (a)));
}

function cosine (a) {
    a = Number (a.character);
    
    return (truncate (Math.cos (a)));
}

function tangent (a) {
    a = Number (a.character);
    
    return (truncate (Math.tan (a)));
}
