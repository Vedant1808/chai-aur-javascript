// Reduce Method :The reduce() method executes a reducer function on each element of the array, resulting in a single output value.

// array.reduce(callback(accumulator, currentValue, index, array), initialValue)
// callback: Function to execute on each element.
// accumulator: Stores the result of the previous callback.
// initialValue: (Optional) Initial value of the accumulator.

// 🧠 Key Points:
// Feature	Description
// Returns	A single value (number, object, array, etc.)
// Modifies original?	❌ No
// Common uses	Sum, product, flatten, group, count, etc.
// Initial value	Must be passed for empty arrays

const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currval) {
//   console.log(`acc: ${acc} and currval: ${currval}`);
//   return acc + currval;
// }, 0);

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);
