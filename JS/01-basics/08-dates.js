// in js , Date objects represent a single moment in time in a platform independent format. Date objects encapsulate an integral value number that represents  milliseconds since the midnight at the beginning of January 1, 1970, UTC

// tc39 has introduced the tmporaral api, so Date object is obsolete, it is recommended to use temporal api instead of date

// just like Math object, temporal is also a global object, it doesn't have a constructor and can't be invoked as a fuction, it can only be used as Temporal.<property>, just like Math

let myDate = new Date(); // date of this instant
console.log(myDate); // not very readable // we use different methods to output a readable format
//console.log(myDate.toString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toDateString());
//console.log(myDate.toTimeString());
//console.log(myDate.toISOString());
//console.log(myDate.toJSON());

// type of Date : Object

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023 // months start from 0 // Mon automatically calculated

myCreatedDate = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate.toLocaleString());

myCreatedDate = new Date("01-14-2034"); // mm-dd-yyyy
console.log(myCreatedDate.toLocaleString());

// time stamps

let myTimeStamp = Date.now();
console.log(myTimeStamp); // a large millisecond value // from 1 jan 1970 to till now

console.log(myCreatedDate.getTime()); // gives millisecond value for the date created by us earlier, now this and myTimeStamp can be compared, to extract info out of myTimeStamp

console.log(Math.floor(Date.now() / 1000)); // value in seconds

let newDate = new Date();
console.log(newDate);
//console.log(newDate.get<>);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

//`${newDate.getDate()} and the time is ....`

newDate.toLocaleString("default", {
  weekday: "long", // properties
}); // default - internationalization

console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
  })
); // Monday
