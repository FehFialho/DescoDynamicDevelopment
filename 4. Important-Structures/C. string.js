// ========================================
// Resume 4C - STRINGS in JavaScript (09/22/2025)
// ========================================

// ========================================
// 1. Data Types Overview
// ========================================

// JavaScript supports several data types:
// - Numbers (e.g., 123, 120.5)
// - Strings (e.g., "This is a string")
// - Booleans (true / false)
// - null and undefined (trivial values)
// - Objects (composite type)

// Note: JavaScript does not distinguish between integers and floats.
// All numbers are stored as 64-bit floating point (IEEE 754).

// ========================================
// 2. Variables
// ========================================

// Variables are containers for storing data.
// Declared using var, let, or const (modern best practice = let/const).

let name;
let lastName = "Silva";

let salary;
salary = 3000;

let firstName = "Luis";

// Important rules for naming variables:
// - Cannot use reserved words (e.g., "break")
// - Cannot start with a number (e.g., 123name )
// - Case sensitive ("Name" ≠ "name")


// ========================================
// 3. String Methods
// ========================================

let course = "Javascript";

// .length → returns the number of characters
console.log(course.length); // 10

// .charAt(index) → returns character at position (0-based)
console.log(course.charAt(2)); // "v"

// .indexOf(substring) → returns index of first match
console.log("Javascript top".indexOf("top")); // 11

// .substring(start, end) → extracts part of the string
console.log(course.substring(0, 4)); // "Java"

// .toUpperCase() → converts to UPPERCASE
console.log(course.toUpperCase()); // "JAVASCRIPT"

// .toLowerCase() → converts to lowercase
console.log(course.toLowerCase()); // "javascript"

// .replace(oldValue, newValue) → replaces substring
console.log(course.replace("Javascript", "Java")); // "Java"

// ========================================
// 4. Practical Activity
// Title: Working with Strings
// ========================================

// Task: Given an array of names, transform them so that
// names shorter than 5 characters are converted to UPPERCASE.
// Longer names remain unchanged.

const names = ["Ana", "Pedro", "Leo", "Carolina", "Jo"];

const transformedNames = names.map(name => {
  if (name.length < 5) {
    return name.toUpperCase();
  }
  return name; // keep as is
});

console.log("Original:", names);
console.log("Transformed:", transformedNames);

// Expected Output:
// Original: [ 'Ana', 'Pedro', 'Leo', 'Carolina', 'Jo' ]
// Transformed: [ 'ANA', 'Pedro', 'LEO', 'Carolina', 'JO' ]

// ========================================
// 5. Key Takeaways
// ========================================
// - Strings are a fundamental data type in JS.
// - Useful methods: length, charAt, indexOf, substring,
//   toUpperCase, toLowerCase, replace.
// - Strings + Arrays + Iteration (map, filter, for) = powerful tools.
