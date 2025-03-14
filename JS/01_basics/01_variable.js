//Investigative approach to studying

const accountId = 144553 //const do not change once assigned
let accountEmail = "mihir@google.com"
var accountPassword = "12345"
//let and var are two ways to define variables
//we use let, not var

accountCity = "Jhajjar"
//javascript is safe language, so we can also declare variable without any keyword in front of it, although it is a bad practice.

let accountState;
// to put or to not put semicolon ";" is your choice it does not have any effect
// if you just leave a variable declared and do not assign any value to it, then js just marks it undefined, you can see it by printing the undefined variable

//accountId = 2 //not allowed

accountEmail = "md@md.com"
accountPassword = "212121"
accountCity = "Bengaluru"

console.log(accountId);
//fn to print

/*
 prefer not to use var
 because of issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
//fn to print a table of variables
