// ========================================
// Resume 4D - Functions in JavaScript (09/22/2025)
// ========================================

// ========================================
// 1. Function Basics
// ========================================

// A function is a reusable block of code that performs a specific task.
// It can take inputs (parameters), process them, and return a result.
// Declared with the "function" keyword or using the Function() constructor.

// Syntax:
// function functionName(param1, param2) {
//   // code
//   return result;
// }

// Example: Multiplication function
function multiply(a, b) {
  return a * b; // returns the product of a and b
}

console.log("Multiply 4 x 3 =", multiply(4, 3)); // Output: 12

// ========================================
// 2. Function Without Return
// ========================================

// Some functions just perform actions and don’t return values.

function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!

// ========================================
// 3. Function Constructor
// ========================================

// Functions can also be created dynamically using the Function() constructor.
// It receives strings as arguments, the last being the function body.

const sum = new Function("x", "y", "return x + y;");
console.log("Sum 5 + 7 =", sum(5, 7)); // Output: 12

// ========================================
// 4. Nested Functions
// ========================================

// Functions can be declared inside other functions.
// Inner functions are only accessible within the outer function.

function outer() {
  function inner() {
    return "I'm inside!";
  }
  return inner(); // must invoke inner here
}

console.log(outer()); // Output: I'm inside!

// ========================================
// 5. Practical Example – Weighted Average
// ========================================

// This program calculates the weighted average of 3 grades.
// Weights are: grade1 -> 2, grade2 -> 3, grade3 -> 5.
// We'll build a function that encapsulates this logic.

// Import readline-sync to read user input in Node.js
const readline = require("readline-sync");

// Define the function
function weightedAverage(n1, n2, n3) {
  const weights = [2, 3, 5];
  const totalWeight = weights[0] + weights[1] + weights[2];
  const result = (n1 * weights[0] + n2 * weights[1] + n3 * weights[2]) / totalWeight;
  return result;
}

// Ask the user for three grades
const grade1 = parseFloat(readline.question("Enter grade 1: "));
const grade2 = parseFloat(readline.question("Enter grade 2: "));
const grade3 = parseFloat(readline.question("Enter grade 3: "));

// Call the function and display the result
const average = weightedAverage(grade1, grade2, grade3);
console.log("The weighted average is:", average.toFixed(2));

