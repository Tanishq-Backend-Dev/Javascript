// The datatype of Date() is object.

let myDate = new Date();
console.log(myDate); 
console.log(myDate.toString());
console.log(myDate.toLocaleString()); // Readable output containing date and time
console.log(myDate.toLocaleDateString()); // Only date

// let myCreateDate = new Date("2024-12-20");
let myCreateDate = new Date("2024-12-20");
console.log(myCreateDate.toLocaleString());


let myTimeStamp = Date.now();
console.log(myTimeStamp);

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getFullYear());

console.log(`Today's day is ${newDate.getDay()} and year is ${newDate.getFullYear()}`);

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}));