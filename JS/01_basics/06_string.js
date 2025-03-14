const name = "mihir"
const repoCount = 30

//console.log(name + repoCount + "Value"); //concatenation // outdated syntax, do not use

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) // string interpolation, place holders // methods can be applied to the strings in {} like toUpperCase()

const gameName = new String("GTA") // how ???? refer: https://stackoverflow.com/questions/7675127/is-string-a-primitive-type-or-object-in-javascript
// in console of browser, you can see: these are key-value pair, 0 is key and G is its value
// 0: "G"
// 1: "T"
// 2: "A"
// remember it is not an array
// length: 3
// [[Prototype]]: String // methods
// [[PrimitiveValue]]: "GTA"


//console.log(gameName[0]); // to access key-value // output: G
//console.log(gameName.__proto__); // to access Prototype // output: {} i.e. an object, it is not empty

//accessing methods // similarly prototype methods can be accessed, no need to use (object.__proto__.method)
//console.log(gameName.length); // 3
//console.log(gameName.toUpperCase()); // it does not change the original value, as it is primitive datatype it goes to stack
//console.log(gameName.charAt(2)); // A

//console.log(gameName.indexOf("T")); // 1
// go throught methods of strings, use console window of the browser

const myName = new String("Mihir-Dagar");

let newString = myName.substring(0, 4) // from key 0 to key 4 including key 0 and excluding key 4
//console.log(newString); //Mihi

let anotherString = myName.slice(0, 4) // console outputs : Mihi
anotherString = myName.slice(-5, -2) // console outputs : Dag // negative value -> starts from behind, here includes -5 and excludes -2
// substring() method doesn't obey negative values, and starts from zero
//console.log(anotherString)


const newString1 = "    mihir   dagar    " // extra spaces, e.g. when user adds extra spaces to a form field
console.log(newString1); // outputs same string with all the spaces
console.log(newString1.trim()); // remove starting and ending spaces from the string, also works on new line character "\n" i.e. line terminators
// trimLeft() or trimStart() -> removes whitespace from the start of the string
// trimEnd() -> removes whitespaces from the end of the strings


const url = "https://mihir.com/mihir%20dagar" // the browser doesn't understand spaces in url // whenever there is a space then that space is converted to url-encode = %20

console.log(url.replace("%20", "-")) // replace a substring with another

console.log(url.includes("mihir")) // outputs : true // include() is used to ask if a substring is there in the given string or not
console.log(url.includes("hello")) // false


const stringToArray = "devil-Hunter-21"
console.log(stringToArray.split('-')) // array with split enteries of the given string, splitting done on the basis of '-'


// Explore other methods from the console window of browser and documentation - mdn

// *******************************************************************************************************************

let sampleString = new String("Mihir-Dagar")
console.log(sampleString.bold());
