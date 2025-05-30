"use strict"; // treat all JS code as newer version which helps catch common mistakes and makes your code more secure and cleaner.

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 + 3); // code readability should be high

console.log("Hitesh");

let name = "hitesh";
let age = 18;
let isLoggedIn = false;
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined =>
// symbol => unique

// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object

let num = 10; // Number
let name1 = "Vedant"; // String
let isOnline = true; // Boolean
let nothing = null; // Null
let notDefined; // Undefined
let big = 1234567890123456789n; // BigInt
let id = Symbol("id"); // Symbol

let person = { name: "Anant", age: 18 }; // Object
let scores = [90, 80, 70]; // Array
function greet() {
  console.log("Hi");
} // Function

/*
1. Why we use "use strict"
2. What is ecma script : ECMAScript is the standard (specification) that defines how the JavaScript language should work.
3. Different data types in javascript
*/
