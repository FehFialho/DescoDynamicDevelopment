// Lesson 3B - Array Methods (09/18/2025)

// ========================================
// Useful Array Methods in JavaScript
// ========================================

// ---------- join() ----------
// Joins all elements of an array into a string.
// A custom separator can be passed as a parameter.

const words = ['JavaScript', 'is', 'awesome'];
const sentence = words.join(' ');  // 'JavaScript is awesome'
console.log(sentence);


// ---------- shift() ----------
// Removes and returns the first element of an array.

const fruits1 = ['apple', 'banana', 'orange'];
const firstFruit = fruits1.shift();
console.log(firstFruit);     // 'apple'
console.log(fruits1);        // ['banana', 'orange']


// ---------- sort() ----------
// Sorts the elements of an array (as strings by default).

const numbers1 = [4, 1, 10, 3];
numbers1.sort();             // Default sort (string-based)
console.log(numbers1);       // [1, 10, 3, 4] → Not ideal for numbers

// To sort numbers correctly:
numbers1.sort((a, b) => a - b);
console.log(numbers1);       // [1, 3, 4, 10]


// ---------- reverse() ----------
// Reverses the order of the elements in the array.

const nums = [1, 2, 3];
nums.reverse();
console.log(nums);           // [3, 2, 1]


// ---------- slice() ----------
// Returns a shallow copy of a portion of an array.

const animals = ['dog', 'cat', 'rabbit', 'bird'];
const someAnimals = animals.slice(1, 3);  // from index 1 to 3 (not included)
console.log(someAnimals);     // ['cat', 'rabbit']


// ---------- length ----------
// Returns the number of elements in the array.

const letters = ['a', 'b', 'c', 'd'];
console.log(letters.length);  // 4


// ---------- push() ----------
// Adds one or more elements to the end of the array and returns the new length.

const colors = ['red', 'green'];
const newLength = colors.push('blue', 'yellow');
console.log(colors);         // ['red', 'green', 'blue', 'yellow']
console.log(newLength);      // 4


// ---------- pop() ----------
// Removes and returns the last element of the array.

const fruits2 = ['mango', 'pineapple', 'grape'];
const lastFruit = fruits2.pop();
console.log(lastFruit);      // 'grape'
console.log(fruits2);        // ['mango', 'pineapple']
