// Immediately Invoked Function Expressions (IIFE) : It is a function that runs as soon as it is defined.

(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("hitesh");
