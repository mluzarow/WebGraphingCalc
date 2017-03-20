function add (a, b) {
    return ((parseInt (a.character) + parseInt (b.character)).toString ());
}

function subtract (a, b) {
	return ((parseInt (b.character) - parseInt (a.character)).toString ());
}

function divide (a, b) {
	return ((parseInt (b.character) / parseInt (a.character)).toString ());
}

function multiply (a, b) {
	return ((parseInt (a.character) * parseInt (b.character)).toString ());
}

function log (a) {
	return (Math.log (a));
}

function naturalLog (a) {
	return (Math.naturalLog (a));
}