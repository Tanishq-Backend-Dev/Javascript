// Date is a object 

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString()); //Date and Time in readable format
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toUTCString());
// console.log(myDate.toLocaleDateString()); // Onle Date

// let myCreatedDate = new Date(2024,11,20);
let myCreatedDate = new Date("2024-12-20");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());

let newDate =  new Date();
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    weekday: "long"
}));