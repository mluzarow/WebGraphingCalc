class BasicOperator {
    constructor (func, order) {
        this.a = new Array ();
        this.b = new Array ();
        this.func = func;
        this.type = 0;
        this.order = order;
    }
}

function ti_add (a, b) {
    return (a + b);
}