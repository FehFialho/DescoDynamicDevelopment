// Lesson 3D - Practical Importance of Array Methods (09/22/2025)

// ========================================
// Why map, filter, reduce, for...in, for...of matter
// ========================================

// Arrays are at the core of most JavaScript applications.
// The ability to transform, filter, and summarize data efficiently
// makes methods like map(), filter(), and reduce() essential tools.
//
// Iteration methods (for...in, for...of) let us traverse arrays in different ways depending on whether we need indices or values.
//
// In short:
// - map(): transform each element into a new value (returns a new array).
// - filter(): keep only the elements that pass a condition (returns a new array).
// - reduce(): combine all elements into a single value (returns anything).
// - for...in: iterates over indices of an array.
// - for...of: iterates directly over the values of an array.


// ========================================
// Full Example with a Mixed Array
// ========================================

const mixedArray = [1, "two", 3, "four", 5, "six"];

// 1) Using map() to transform values
// - Numbers will be doubled
// - Strings will be uppercased
// - Other types remain unchanged

const mappedArray = mixedArray.map((element) => {
  if (typeof element === "number") {
    return element * 2;
  } else if (typeof element === "string") {
    return element.toUpperCase();
  } else {
    return element;
  }
});
console.log("Mapped Array:", mappedArray);
// Output: [2, "TWO", 6, "FOUR", 10, "SIX"]


// 2) Using filter() to keep only numbers
const numbersOnly = mixedArray.filter((element) => typeof element === "number");
console.log("Filtered Numbers:", numbersOnly);
// Output: [1, 3, 5]


// 3) Using reduce() to sum only the numbers
const sumNumbers = mixedArray.reduce((acc, element) => {
  if (typeof element === "number") {
    return acc + element;
  }
  return acc;
}, 0);
console.log("Sum of Numbers:", sumNumbers);
// Output: 9


// ========================================
// Guided Practice (Activity)
// ========================================

// Title: Using advanced array methods together
//
// Objective:
//   Practice applying map(), filter(), and reduce() to solve
//   real-world data manipulation problems.
//
// Task:
//   - Given an array with both strings and numbers:
//       -> Use map() to double numbers and uppercase strings
//       -> Use filter() to extract only numbers
//       -> Use reduce() to sum all numbers
//
// Tools: Run this code in VS Code or a browser console.

const practiceArray = [10, "apple", 20, "banana", 30, "grape"];

// map()
const practiceMapped = practiceArray.map((el) =>
  typeof el === "number" ? el * 2 : typeof el === "string" ? el.toUpperCase() : el
);
console.log("Practice - Mapped:", practiceMapped);
// [20, "APPLE", 40, "BANANA", 60, "GRAPE"]

// filter()
const practiceFiltered = practiceArray.filter((el) => typeof el === "number");
console.log("Practice - Filtered Numbers:", practiceFiltered);
// [10, 20, 30]

// reduce()
const practiceSum = practiceArray.reduce(
  (acc, el) => (typeof el === "number" ? acc + el : acc),
  0
);
console.log("Practice - Sum of Numbers:", practiceSum);
// 60
