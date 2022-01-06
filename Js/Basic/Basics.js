// Dynamic Typing


let name = "John";

let age = 30;
let isApproved = false; 
let firstName = undefined;
let color = null;

// Object

//Reference types: Object, Array, Function

let person = {
    // property
    name: "Mosh",
    age: 30

};


person.name = "ben";
person['name'] = name;

//console.log(person)


// Arrays

let selectedColors = ['red', 'blue'];
selectedColors[2] = "green"
selectedColors[3] = 1
//console.log(selectedColors);

// function:

function greet(Name, age){ // parameter
    if (age > 30){
        name = "old man"
    }else{
        console.log("hello"+ "young " + Name);
    }
    
}
//greet("Ben"); // argument

//greet('marry');

// ------ Operaters -----------

let x = 10;
let y = 3;

//console.log(x+y);

// increment ++
// x++;
// console.log(x);
// x++;
// console.log(x);
// --x;


x++;

x = x + 5;
//X += 5;

// X *= 3;
// X /= 5;

x == 1; // loose Equality
1 == "1" // -> true
true == 1 // -> true

x === 1; // strict equality
// same type + same Value

/// ------ conditioner operater

let points = 100;
let type = points > 100 ? 'gold' : 'silver';
// if condition true -> value, else -> : value
//console.log(type);

///  ------  logical operaters

// Logical AND ( && )
// return true if bot true

let logicalAnd = true && false
let logicalOr = true || false

let applyRefuse = !logicalOr;

//console.log(applyRefuse)

false || "mosh" // -> "mosh"
false || 1 // -> 1

// False (false) 
// undefined , null, 0, false, '', NaN

// Truthy(true)


false || 1 || 2 // -> 1
// return first value -> short circuiting

let user = undefined;
let defult = "blue";
let current = user || defult;
//console.log(current);

/// ---- bitwise
//101011010101
// 1 = 00000001 (8 bit)
// 2 = 00000010 
//console.log(1 | 2) // bitwise OR

// R = 00000011 = 3

// Read, Write , Execute
// 00000100 4
// 00000110 6
// 00000111 7


// quize
let a = "a"
let b = "b"

let c = b;
b = a;
a = c;
// console.log(a);
// console.log(b);


