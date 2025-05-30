//  Primitive

// 🔹 1. Primitive Data Types → ✅ Passed by Value
// A copy of the actual value is passed.
// Changes inside a function do not affect the original variable.

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// 🔸 2. Non-Primitive (Reference) Data Types → ✅ Passed by Reference (technically, by value of reference)
// A copy of the reference (memory address) is passed.
// So changes to the object do affect the original data.

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

/*
| Value / Expression   | Type                | `typeof` Result       |
| -------------------- | ------------------- | --------------------- |
| `42`, `3.14`, `-7`   | Number              | `"number"`            |
| `"hello"`, `'abc'`   | String              | `"string"`            |
| `true`, `false`      | Boolean             | `"boolean"`           |
| `undefined`          | Undefined           | `"undefined"`         |
| `null`               | Null                | `"object"` ⚠️ (quirk) |
| `123n`               | BigInt              | `"bigint"`            |
| `Symbol("id")`       | Symbol              | `"symbol"`            |
| `[1, 2, 3]`          | Array (object type) | `"object"`            |
| `{ name: "Vedant" }` | Object              | `"object"`            |
| `function() {}`      | Function            | `"function"`          |
| `new Date()`         | Date Object         | `"object"`            |
| `NaN`                | Not-a-Number        | `"number"`            |
| `class MyClass {}`   | Class (function)    | `"function"`          |

*/
