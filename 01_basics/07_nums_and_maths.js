/*
const name = new String('Tanishq');
console.log(name);
const isLoggedIn = new Boolean(true);
console.log(isLoggedIn); 
*/

// -----------------Numbers---------------- //
const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 122.3455;
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

// -----------------Maths----------- //

console.log(Math.abs(-3));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.1));
console.log(Math.min(23,34,54,21));
console.log(Math.max(1,2,35,22));

console.log(Math.random()); // random value between 0 and 1

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);