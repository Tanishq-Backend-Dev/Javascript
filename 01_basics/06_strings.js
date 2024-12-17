const name = "Tanishq";
const repoCount = 50;

// console.log(name + " " + repoCount);

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = 'Tanishq-TT';
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(0, 3);
console.log(anotherString);

const newStringOne = "    Tanishq   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://tanishq.com//tanishq%20thakur";
console.log(url.replace("%20","-"));
console.log(url.includes('tanishq'));

const address = 'Samrat-Nagar-Ward-3';
console.log(address.split("-"));

// Split gives you array