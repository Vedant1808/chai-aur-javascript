const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// Spread Operators
const all_new_heros = [...marvel_heros, ...dc_heros];

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh")); // convert into array
console.log(Array.from({ name: "hitesh" })); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // convert all content into array

/*
1. Spread Operator : The spread operator (...) in JavaScript is a powerful tool used to expand arrays, objects, or iterables.
// =========================================
// 📘 Spread Operator Use Cases in JavaScript
// =========================================
//
// #   | Use Case                        | Description                                         | Example
// ----|---------------------------------|-----------------------------------------------------|---------------------------------------------------------
// 1   | Copying Arrays                  | Creates a shallow copy of an array                  | const arr2 = [...arr1];
// 2   | Merging Arrays                  | Combines multiple arrays into one                   | const merged = [...arr1, ...arr2];
// 3   | Function Arguments              | Passes array elements as separate arguments         | sum(...[1, 2, 3]);
// 4   | Copying Objects                 | Creates a shallow copy of an object                 | const obj2 = { ...obj1 };
// 5   | Merging Objects                 | Combines properties of multiple objects             | const fullUser = { ...user, ...details };
// 6   | Add Elements to Array           | Adds elements before, between, or after others      | const newArr = [1, ...arr, 4];
// 7   | Convert String to Array         | Breaks a string into characters                     | const chars = [..."Hello"];
// 8   | Rest in Destructuring (Array)   | Collects remaining elements                        | const [a, ...rest] = [1, 2, 3];
// 9   | Rest in Destructuring (Object)  | Collects remaining properties                      | const { a, ...rest } = { a: 1, b: 2 };
// 10  | Remove Duplicates               | Uses Set to eliminate duplicates in an array        | const unique = [...new Set(arr)];
// 11  | In JSX (React)                  | Spreads props into React components                 | <Component {...props} />
// 12  | Flatten Nested Arrays (1 level) | Flattens an array one level deep                    | const flat = [].concat(...nestedArray);
//
// =========================================

2. Flat method : The .flat() method in JavaScript is used to flatten nested arrays — that means it turns a nested array into a single-level array. arr.flat([depth])

*/
