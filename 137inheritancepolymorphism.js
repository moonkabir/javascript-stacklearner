function extend (Parent,Child){
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

function Shape(color){
    this.color = color
}
Shape.prototype.common = function(){
    console.log('I am common method')
}

function Square(width,color){
    Shape.call(this.color)
    this.width = width
}
extend(Shape,Square)

Square.prototype.draw = function(){
    console.log('Drawing')
}

Square.prototype.common = function(){
    console.log('I am calling from Square and I have Overridden')
}



// var shape = new Shape()

var sqr = new Square(45,'green')

// shape->Shape->Object
// sqr->Square->Object

// sqr->Square->Shape->Object

function Circle(radius,color){
    Shape.call(this.color)
    this.radius = radius
}
extend(Shape,Circle)

Circle.prototype.common = function(){
    // Shape.prototype.common.call(this)
    console.log('I am calling from circle and I have overridden')
}

var c = new Circle(4,'Black')
var s = new Shape('Pirple')
var Shapes = [s,c,sqr]
for(var i of shapes){
    i.common()
}


// s.instaceof.Shape

function mixin(target, ...sources){
    Object.assign(target, ...sources)
}



var canWalk = {
    walk: function(){
        console.log('Walking...')
    }
}

var canEat = {
    eat: function(){
        console.log('Eating...')
    }
}

var canSwim = {
    swim: function(){
        console.log('Swimming...')
    }
}

// var person = Object.assign({},canWalk,canEat)
// person.name = "Moon Kabir"

function Person(name){
    this.name = name
}

mixin(Person.prototype, canEat, canWalk)
// Object.assign(person.prototype)

var person = new Person('Moon Kabir')
console.log(person)


function GoldFish (name){
    this.name = name
}
mixin(GoldFish.prototype, canEat, canSwim)
var fish = new GoldFish('bla bla bla')

console.log(fish)
