function add (a, b) {
    a = Number (a.character);
    b = Number (b.character);
    
    return ((a + b).toString ());
}

function subtract (a, b) {
    a = Number (a.character);
    b = Number (b.character);
    
	return ((b - a).toString ());
}

function divide (a, b) {
    a = Number (a.character);
    b = Number (b.character);
    
	return ((b / a).toString ());
}

function multiply (a, b) {
    a = Number (a.character);
    b = Number (b.character);
    
	return ((a * b).toString ());
}

function log (a) {
    a = Number (a.character);

	return (Math.log (a).toString ());
}

function naturalLog (a) {
    a = Number (a.character);
    
	return (Math.naturalLog (a).toString ());
}

function sine (a) {
    a = Number (a.character);
    
    return (Math.sin (a).toString ());
}

function cosine (a) {
    a = Number (a.character);
    
    return (Math.cos (a).toString ());
}

function tangent (a) {
    a = Number (a.character);
    
    return (Math.tan (a).toString ());
}
