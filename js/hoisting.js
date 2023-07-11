// const background = "red";

// console.log(background);
// debugger;

// const color = "green";

// function Random() {
//   console.log("The Random function !");
// }

// Random();

// Example of hoisting of variable
// console.log(test);
// var test;

// Example of hoisting of function
Hoist();
function Hoist() {
  console.log("This hoisted function");
}

// TASK
// 1. Create a function named "Calculate"
// 2. Add two number while passing them as arguments
// 3. And print the number that you are added
// 4. Call the "Calculate" function

// - Passing the three argument in the function
// - Assign a variable of these values such a, b, c e.g "a = 3"
// - a = b, b = a and c = "" and so on

function Calculate(a, b, c) {
  debugger;
  console.log(a, b, c);

  let temp;

  temp = a;

  a = b;

  b = temp;

  console.log("new abc value : ", a, b, c);
}

Calculate(3, 5, 7);
