const score = 400; // auto detection as number type
//console.log(score); // 400

const balance = new Number(100); // new object defined with number type // similar to strings, all diff kinds of methods through prototype are available for it, it can be seen from console
//console.log(balance); // [Number : 100]

//console.log(balance.toString().length); balance.toString() //is a string, so it has all the string props to it, like lenght, substring etc

//console.log(balance.toFixed(2));// 100.00 // to set degree of precision // used a lot 

const otherNumber = 23.8966
//console.log(otherNumber.toPrecision(3));//23.9 // return a string with exponential or fixed-point notation with specified no. of digits // input is no. of significant digits in range 1-21
const anotherNumber = 1234.456
//console.log(anotherNumber.toPrecision(3)); // 1.23e+3


const hundreds = 1000000;
//console.log(hundreds.toLocaleString()); // 10,00,000;

//console.log(Number.MAX_VALUE);
//console.log(Number.MIN_VALUE);
//similary other properties are there, Number.<property>
// such can be refered from console of browser


// ******************************************* Math *************************************************************************

//console.log(Math); // Object Math {} // put in console to see values for Math, Math.<property>
//console.log(Math.abs(-4));// 4 // abs = absolute
//console.log(Math.round(4.3)); // 4 //round off
//console.log(Math.round(4.6)); // 5 //round off
//console.log(Math.ceil(4.2)); // 5 // ceiling
//console.log(Math.floor(4.9)); // 4 //floor
//console.log(Math.sqrt(4)); // 2
//console.log(Math.min(4, 3, 6, 8)); // 3
//console.log(Math.max(4, 3, 6, 8)); // 8


//console.log(Math.random()); // a random value in range [0,1)
console.log((Math.random()*10) + 1); // min value 1
console.log(Math.floor(Math.random()*10) + 1); // single number between 1 - 9

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
