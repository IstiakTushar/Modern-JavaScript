// Variables - Var, Let, Const

var name = 'Rubaiyat';
name = 'Rubaiyat Jahan Nishi';

console.log(name);

// Initilizing Variables
var greeting;
console.log(greeting);
greeting = 'hello nishi';
console.log(greeting);

/*
    Rules for define variables
    ~ Can't start with a number
    ~ Must start from letters, _, $ 

*/

// Multi Words Variables
var firstName = 'Ramanabaiyat'; // Camel Case
var last_name = 'Nishi'; // Underscore
var FirstName = 'Istiak'; // Pascal Case
var midname;


// LET
let greet;
console.log(greet);
greet = 'hello nishi';
console.log(greet);
// LET AND VAR ARE SIMILAR


// CONST
const userName = 'Rubaiyat Jahan Nishi';
// Must have to assign value
// Can't do reassing value
console.log(userName);

const person = {
    name: 'Rubaiyat Jahan Nishi',
    age: 17,
    city: 'Phulbari'
}

console.log(person);

person.name = 'Istiak Hossain Tushar';
person.age = 26;
person.city = 'Sherpur';
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.city);

// ARRSYS
const numbers = [1, 2, 3, 4, 5];

// ADD TO THE END OF ARRAY
numbers.push(6);
// REMOVE FROM THE END OF ARRAY
numbers.pop();

// INSERT TO THE FRONT OF ARRAY
numbers.unshift(100);
// REMOVE FROM THE FRONT OF ARRAY
numbers.shift();

console.log(numbers);

