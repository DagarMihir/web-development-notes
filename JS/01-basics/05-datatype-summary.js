//officially there are two classifications of datatypes : primitive and non-primitive based on "call by value" and "call by reference" i.e. how data is stored and how it is accessed

//Primitive (call by value, i.e. whenever they are used directly the reference is not provided instead a copy of that data is provide)
// 7 types : String, Number, Boolean, null(empty e.g. when temp has not arrived from the server then it is not 0 but null), undefined(declared but not defined), Symbol (used to make components unique, generally used in react ond some other frontend library), BigInt

const score = 100; // we didn't declare the datatype of the variable explicity // in js we don't // js is a dynamically typed language, means the datatype of the value stored in the variable can change during runtime unlike some other languages like typescript where they are static, mean we declare the type of the variable beforehand, (it is called type safety) like "const score:number = 100"
const isLoggedIn = false; // boolean
const outsideTemp = null; // null //datatype is object
let userEmail; // undefined

const id = Symbol('123'); //Symbol returns a unique symbol value
const anotherId = Symbol('123') 
console.log(id == anotherId) // false, eventhough we gave same values, the returned values are not same

//bigInt support interger upto 2**53
const bigNumber = 350914509475901475912759217015718n; //putting n infront of the number makes it bigInt

//Reference/Non-primitive (call by reference)
//Arrays, Objects, Functions etc.

const heros = ["bhagat", "udham", "rajguru"] // an array - reference/non-primitve types

let myObj = {
	name: "mihir",
	age: 41,
} // inside curly braces = objects // anything can be put in the curly braces, i.e. array, other datatypes, functions, another object

const myFunction = function(){
	console.log("Hello World!")
} // a simple function declaration


console.log(typeof(bigNumber)) // a way to know about the datatype of a variable // this ex gives bigint

// if a variable is not declared or defined the its type is undefined
// the datatype of null is object

// REFER TO ECMASCRIPT @ tc39.es to get more info

console.log(typeof(myFunction)); // prints function but to be noted that all the non-primitve datatypes in javascipt have datatype = object
// typeof prints object for arrays and objects

console.log(typeof(id)); // symbol


// *********************************************************************************************************************

// Memory , in javascript not much control over memory is provided to programmer like c, assembly etc.

// Stack (primitive types, we get a copy), Heap(non-primitive types , we get a reference of the original value)

let myName = "Mihir" // a primitive type, goes to stack
let anotherName = myName
//console.log(anotherName) // Mihir

anotherName = "Shree"
console.log(myName) // Mihir
console.log(anotherName) // Shree // here when anotherName = myName then actual value or referece of the var 'myName' is not copied into the var 'anotherName' rather a copy of myName is assigned to anotherName, so when anotherName changes the original variable i.e. myName doesn't change


let userOne = {
	email: "user@google.com",
	upi: "user@ybl"
} // all the non-primitive types go to heap, here the variable userOne goes to heap which stores reference to the object which goes to heap

let userTwo = userOne // here the reference of the userOne object is copied into the variable userTwo, so if somethings changes through userTwo, the userOne object will change, lets demonstrate

//'.' is used to access properties of the object
userTwo.email = "mihir@google.com"

console.log(userOne.email) //mihir@google.com
console.log(userTwo.email) //mihir@google.com
