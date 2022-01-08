let person = {
    name: 'ben',
    walk(){
        console.log(this)
    }
}

person.walk();

let wak = person.walk;

wak();

const wakk = person.walk.bind(person);
// value of wakk is based on argument passed in bind method

wakk();

const squre = (number) => (number * number);
// function name squre
// argument number
// return =>
console.log(squre(5))

// arror dont rebind this keyword
// arror function inherance this

const colors = ['red', 'green']
console.log(colors)

const item = colors.map((color) => `<>${color}<>`);
console.log(item)

const name = person.name;
const { name:na } = person;

const first = [1,2,3];
const second = [4,5,6];

const combing = [...first,'check', ...second];
console.log(combing);

const clone = [...first];

/// class

// blue print
class Person {
    constructor(name){
        // this always return to current object
        this.name = name;
    }

    walk(){
        console.log('walk');
    }
};
const person1 = new Person('bob')

class Teacher extends Person{
    constructor(name,degree) {
        this.degree = degree;
        super(name);
    }
    teach() {
        console.log('teach');
    }
}
const teacher = new Teacher('ben','master');


///module
// private by defult 
/**
 
export class Per extends Person{

};

import {Per} from './OOP/OOP_Objects';
* 
 */
