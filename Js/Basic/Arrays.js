/// Arrays

console.log('Arrays: \n')

let numbers = [3,4,5,6,7,8]

//numbers.unshift(1,2)
//numbers.shift();

// end
//numbers.push(5,6)
//numbers.pop();

numbers.splice(4,1,'a')
//numbers.splice(2,1)

console.log(numbers)

console.log(numbers.indexOf(9))
console.log(numbers.lastIndexOf(1))
console.log(numbers.includes(1))

const course = [
    {id:1, name:"a"},{id:2, name:"b"},{id:3, name:"c"}
]

var found = course.find(
    function(element){
        return element.id > 1;
    }
)
console.log(found)


const found2 = course.find(courseElement => courseElement.id === 2);
console.log(found2)

/// Empty an array
anotherNumbers = numbers;

//numbers = [];
//numbers.length=0; // remove refernce also
//numbers.splice(0,numbers.length)
//while(numbers.length>0) numbers.pop();

console.log(numbers)
console.log(anotherNumbers)

/// combin array

const first = [1,2,3]
const second = [3,4,5]

const combined = [...first,"aaa", ...second, "bb"];
//const combined = first.concat(second);
console.log(combined)
const copy = [...combined];


/// iteration
for (let number of numbers) console.log(number)

numbers.forEach((number, index) => console.log(index, number));

///join
let joinNUmber = [1,2,3]
let joined = joinNUmber.join(',')
console.log(joined)

/// sort

numbers.sort();
numbers.reverse();
console.log(numbers)

const course2 = course

//course2.sourt((a,b) => (a.name > b.name)? -1 : 1);
//console.log(course2)


const allPositive = numbers.every(function(value){
    return value > 0;
}) 
// some
// filter => return value
const filtered = numbers.filter(n => n >= 0);
console.log(filtered);

// mapping => to change each element in array

const number3 = [-1,1,2,3,4];

const filtered2 = number3.filter(n => n >=0);
//const items = filtered2.map(n => '<li>' + n + '</li>');
//const html = '<ul>' + items.join('') + '</ul>';

const items = filtered2.map(n => ({ value:n}));

const itemsChain = numbers
.filter(n => n >=0)
.map(n => ({ value:n}))
.filter(obj => obj.value >1)
.map(obj => obj.value) // replace object to value
console.log(itemsChain)

///reduce

const sum = number3.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

const sum2 = number3.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);
// set initial value for accumulator as 0;
// can be remove 0,
console.log(sum2)

/// Exercise move array

let numberE1 = [1,2,3,4]
const output = move(numberE1, 3, 0)

console.log(numberE1);

function move(array, index, offset){
    array.splice(index,1,array[offset])
    array.splice(offset,1,array[index])

    return array
}

//output.splice(index, 1) [0]

/// Execrice Move

const movies = [
    {title: 'a', year:2018, rating:4},
    {title: 'b', year:2018, rating:4.5},
    {title: 'c', year:2018, rating:4},
    {title: 'd', year:2018, rating:4.5},
    {title: 'r', year:2017, rating:4.5},
    {title: 'f', year:2017, rating:4.5},
]

// all the movie in 2018 , rating >4
// sort them by their rating
// decending order
// pick theri title

const movieResult = movies
.filter(m => m.year === 2018 && m.rating > 4)
.sort((a,b) => a.rating - b.rating)
.reverse(0)
.map(m => (m.title))
console.log(movieResult)
