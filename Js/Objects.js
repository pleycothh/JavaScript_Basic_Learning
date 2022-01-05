/// ##########  Objects ###########

let circle = {
    radius: 1,    
    location: {
        x:1,
        y:2
    },
    isVisiable: true,
    draw: function() {
        console.log('draw');
    } // method if in an object
};
//circle.draw();\

/// Factory function

function createCircle(radiu, x, y, isVisiable){
    return {
        radiu,    
        location: {
            x,
            y
        },
        isVisiable,
        draw(){
            console.log('draw',x,y,radiu);
        }
    }
};

circleOne = createCircle(10,1,1,true);
circleTwo = createCircle(1,1,1,false);

//circleOne.draw();
//circleTwo.draw();

/// Constructor Functions

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    }
    // return this
}

// see this is an empty object

const circleThree = new Circle(1); // create new empty object

// create empty object called this

// give x an value
// return this

/// Dynamic nature of object

circleThree.color = 'yellow';
circleThree.draaa = function(){};
delete circleThree.color;
//console.log(circleThree);

///Constructor property

console.log(circle.constructor)

let x = {};
// let x = new Object();

/// function are objects

Circle.call({}, 1);
const another = new Circle(1);

/// Value type and Reference Type
 
let number = {value:10};

function increase(number){
    number.value++
}

increase(number);
console.log(number)


/// Enumerating property object

for (let key in circle){
    console.log(key, circle[key]);
}

for (let key of Object.keys(circle))
    console.log(key)

/// colon

const another2 = Object.assign({color:"yellow"}, circle);
const another3 = {...circle};
console.log(another3)

// Garbage collection
//no control

///math

//developer.mozilla.org search math 

/// string

// string primate
const message = 'hi';


//string object
const anotherMessage = new String('jo');


/// Execrise 1

console.log("Execrice 1:");

let address = {
    street:"asd",
    city:"brisbane",
    zipCode: 1234
};

function showAddress(address){
    for ( let i in address)
        console.log(i, address[i])
}

showAddress(address);

/// Execrice 6

console.log("\nExecirce 6:")

let priceRange = [
    {
        name:"$",
        low:1,
        high:10
    },
    {
        
        name:"$$",
        low:10,
        high:100
    },
    {
        name:"$$$",
        low:100,
        high:100
    },
];


for (i in priceRange){
    if(5 > priceRange[i].low && 5 < priceRange[i].high) {
        console.log(5, priceRange[i].name)
    }
}