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

// 🔸  Non-Primitive (Reference) Data Types → ✅ Passed by Reference (technically, by value of reference)
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

let userOne = {
  name: "annat",
  upi: "upi@ybl",
};

let userTwo = userOne;

userTwo.name = "kanha";
console.log(userOne);
console.log(userTwo);
// userOne and userTwo both are store in stack memory and pointing to same object store in heap memory

let userName = "anant";
let userName1 = userName;

userName1 = "aman";
console.log(userName);
console.log(userName1);
/*
Stack memory use for primitive data types
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 — copy was made
a and b are stored in stack.
b gets a copy of a, so changes don’t affect a.

Heap memory use for referece data types
let obj1 = { name: "Vedant" };
let obj2 = obj1;
obj2.name = "Anant";
console.log(obj1.name); // "Anant"
obj1 is a reference stored in the stack.
The actual object is in the heap.
Both obj1 and obj2 point to the same heap object.
*/
