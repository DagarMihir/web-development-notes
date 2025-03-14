// comparisions between same datatypes -> no problem
/*
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1); // boolean outputs
*/


// problem comes while comparing differint datatypes
//console.log("2" > 1); // true
//console.log("02" > 1); // true // automatically "2" gets converted to number
// sometimes the result of comparision between diff datatypes is not predictable, so make sure not to compare diff datatypes, typescript doesn't allow this

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true //conversion problem //the reason the equality check == and comparisions like >, <, <=, >= work differently because the comparisions convert null to a number, treating it as 0, thus null >= 0 is true and null > 0 is false, whereas in equality check null is undefined which doesn't equal nothing

console.log(undefined == 0);// always false

//thus comparision and equality check work differently

// === - strict check, checks values strictly i.e. their datatypes also
console.log("2" == 2); //true //conversion happens
console.log("2" === 2); //false //conversion doesn't happen


//we try to avoid such comparisions
