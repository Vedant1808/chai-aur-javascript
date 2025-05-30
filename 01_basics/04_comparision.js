// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === strict comparison , it also check data types

console.log("2" === 2);

/*
Lose Equality(==) : Compares values after converting types (type coercion).May return true even if the types are different. 
Strict Equality(===) : Compares both value and type.Returns true only if both are exactly the same.
*/
