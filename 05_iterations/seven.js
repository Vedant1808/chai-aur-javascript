// Map Method : 🔁 map() Method in JavaScript
// The map() method is used to create a new array by applying a function to each element of the original array.
// 🧠 Key Points:
// Feature	Details
// Returns : 	A new array
// Original array : 	Not modified
// Used for	Transformation (not filtering)
// Return requirement : 	Must return a value in callback

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumers.map( (num) => { return num + 10})

// chaining concept
const newNums = myNumers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

console.log(newNums);
