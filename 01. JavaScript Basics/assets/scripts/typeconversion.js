let val;

// CONVERT NUMBER TO STRING
val = String(555);
val = (2+2);
// BOOLEAN TO STRING
val = String(true);
val = String(false);
// DATE TO STRING
val = String(new Date());
// ARRAY TO STRING
val = String([1,2,3]);
// toString() Method
val = (555).toString();
val = (true).toString();
val = (new Date()).toString();
val = (new Array(1,2,3)).toString();


// STRING TO NUMBER
val = Number('555');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number(new Date());

// PARSEINT
val = parseInt(3+3);
val = parseFloat(3+3.3);

// OUTPUT
console.log(val);
console.log(typeof val);
// STRING & ARRAY PROPERTY
// console.log(val.length);
// NUMBER PROPERTY
console.log(val.toFixed(2));


// TYPE COERSION
const val1 = 5;
const val2 = String(6);
let sum = val1 + val2;
sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);