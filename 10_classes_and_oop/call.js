/*
In JavaScript, .call() is a method that allows you to invoke a function and explicitly set the this value (i.e., the context) inside that function.

✅ Syntax
javascript
Copy
Edit
functionName.call(thisArg, arg1, arg2, ...)
functionName: the function you want to call.

thisArg: the value of this inside the function.

arg1, arg2, ...: optional arguments passed to the function.
function greet() {
  console.log(`Hello, my name is ${this.name}`);
}

const person = {
  name: "Alice"
};

greet.call(person);  // Hello, my name is Alice

*/
function SetUsername(username) {
  //complex DB calls
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  SetUsername.call(this, username);

  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);
