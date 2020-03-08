// JAVASCRIPT DATA TYPES
/* 
    THERE ARE TWO DATA TYPES IN JAVASCRIPT
    01. PRIMITIVE DATA TYPES
        - Numbers
        - String
        - Undefined
        - Boolean
        - Null
        - Symbols(ES6)
    02. REFERENCE DATA TYPES
        - Arrays
        - Functions
        - Dates
        - Object Literals
        - Anything Else
*/

// PRIMITIVE

// 01. STRING
const name = 'Rubaiyat Jahan Nishi';
// 02. NUMBER
const age = 17;
// 03. BOOLEAN
let greeting = true;
greeting = false;
// 04. NULL - IT IS KIND OF BUG
const bug = null;
// 05. UNDEFINED
let undefine;
// 06. SYMBOLS(ES6)
const sym = Symbol();

console.log(sym)
console.log(typeof sym);

// REFERENCE

// ARRAYS
const numbers = [1,2,3];
const hobbies = new Array('Movies', 'Programming', 'Music');
// DATES
const today = new Date();
// OBJECT LITERALS
const user = {
    name: 'Rubaiyat Nishi',
    age: 18,
    city: 'Dhaka'
}


console.log(user);
console.log(typeof user);