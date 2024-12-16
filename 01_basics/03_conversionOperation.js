let score = true;
console.log(typeof(score));
// console.log(typeof(score));

let valueInNumber =Number(score);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1;
let booleanIsLogeedIn = Boolean(isLoggedIn);
console.log(booleanIsLogeedIn);

// 1 => true; 0 => false
// "" => false
// "Tanishq" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(typeof(stringNumber));

/* Operation */

let value = 3;
let negValue = -value;
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/3);
console.log(10%2);

let str1 = "Tanishq";
let str2 = "Thakur";

let str3 = str1 + ' ' + str2;
console.log(str3);

console.log("1"+2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1+2+"2");

console.log("1" + "4" + 2 + 4);
console.log(1 + 4 + 3 + "4");

console.log(+true);