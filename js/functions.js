class token {
    constructor (c, o, f=null) {
        this.character = c;
        this.order = o;
        this.func = f;
    }
}

function add (a, b) {
    return (a + b);
}

function subtract (a, b) {
	return (a - b);
}

function divide (a, b) {
	return (a / b);
}

function multiply (a, b) {
	return (a * b);
}

function log (a) {
	return (Math.log (a));
}

function naturalLog (a) {
	return (Math.naturalLog (a));
}