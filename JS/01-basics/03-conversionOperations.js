let score = 33
//the value may come from a form, you do not knowoGhat kind of value is this, so we can't say anything about its type rightaway

console.log(typeof score);
console.log(typeof(score));
//these yield "number" observe the small case


score = "33" //string
let valueInNumber = Number(score);
//conversion of string score into number
//here oberse the type is written in uppercase
console.log(typeof valueInNumber);// number
console.log(valueInNumber);// 33

let sample = "33abc";
let valueInNumber1 = Number(sample);
console.log(typeof(valueInNumber1)); // number
console.log(valueInNumber1); // NaN = Not a number
// i.e. the value is not converted to number


let sample1 = null;
let valueInNumber2 = Number(sample1);
console.log(valueInNumber2); // 0

let sample2 = undefined;
let valueInNumber3 = Number(sample2);
console.log(typeof (valueInNumber3)); // number
console.log(valueInNumber3); // Nan

let sample3 = true;
let valueInNumber4 = Number(sample3);
console.log(valueInNumber4); // 1

let sample4 = "mihir"
let valueInNumber5 = Number(sample4);
console.log(valueInNumber5); // NaN i.e can't be converted


// "33" => 33
// "33abc" => NaN but type is number
// true => 1; false => 0


let isLoggedIn = 1; //  if we would have written true/false then obviously directly it is registered as boolean value

isLoggedIn = "" //conversion to boolean yields false
isLoggedIn = "mihir" //conversion to boolean yields true

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true

// 1 => true; 0 => false
// "" => false; "mihir" => true


let someNumber = 33;

let stringNumber = String(someNumber);//conversion to string
console.log(stringNumber); //33
console.log(typeof (stringNumber)); //string


//********************* Operations ***********************


let value = 3;
let negValue = -value;
//console.log(negValue); // -3

/* Some basic operations
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/3);
console.log(2%2);
*/

let str1 = "hello"
let str2 = " World"
let str3 = str1 + str2
//console.log(str3); // concatenation of str1 and str2


console.log("1" + "2") // 12, as expected
console.log("1" + 2); // 12 , how?
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122 // string first everything treated as string
console.log(1 + 2 + "2"); // 32, how? // if string last then such conversion happens
// it all happens wrt to guidelines provided in ecma specification, i.e. type conversion in abstract operations section
// so don't be depedent on such lines of code like:
console.log(3 + 4 * 5 % 3); // 5 // confusing code, rather use paranthesis like:
console.log((3 + 4) * ( 5 % 3)); //14



console.log(true); //true
console.log(+true); //1 //conversion
//console.log(true+); //error
console.log(+"");//0 //conversion
//such code should not be written


let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; //not readable code, so don't use such assignments and operations

let gameCounter = 100
gameCounter++; //increment operator 
console.log(gameCounter); // 101


