// write func that given some num of private vars would generate a singleton property
// when called func is wrapped around a private copy of x1, if only one arg, set otherwise get (return private copy) of x1

// get function takes property and returns params of property of context object
function get(property) {
    return this.property;
}

// if func is called w zero params, use get func

// otherwise set properties on obj

function Drawing(stroke, strokeWidth) {
    this.stroke = stroke;
    this.strokeWidth = strokeWidth;

    return this;
}

// add an element to the parent svg element
Drawing.prototype.draw = function(parent) {
    document.getElementsByTagName('"' + parent + '"').appendChild(this);
};

function Shape(cx, cy, width, fill) {
    this.cx = cx;
    this.cy = cy;
    this.width = width;
    this.fill = fill;

    return this;
}

Shape.prototype.center = function(cx, cy) {
    this.cx = cx;
    this.cy = cy;

    return this;
};

// extend Drawing
Shape.prototype = new Drawing();

function Line(x1, x2, y1, y2) {
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;

    return this;
}
// extend Drawing
Line.prototype = new Drawing();

function Circle(){
    return this;
}
// extend Shape
Circle.prototype = new Shape();

function Rectangle(height) {
    this.height = height;

    return this;
}
// extend Shape
Rectangle.prototype = new Shape();

function Square() {
    return this;
}
// extend Rectangle
Square.prototype = new Rectangle();

function Text(x, y, text) {
    this.x = x;
    this.y = y;
    this.text = text;

    return this;
}