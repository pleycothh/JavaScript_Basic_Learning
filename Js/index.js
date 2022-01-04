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

console.log(person)


// Arrays

let selectedColors = ['red', 'blue'];
selectedColors[2] = "green"
selectedColors[3] = 1
console.log(selectedColors);

// function:

function greet(Name, age){ // parameter
    if (age > 30){
        name = "old man"
    }else{
        console.log("hello"+ "young " + Name);
    }
    
}
greet("Ben"); // argument

greet('marry');
