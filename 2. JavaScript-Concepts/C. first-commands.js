// Lesson 2C - First Commands (09/17/2025)

// ========================================
// Operators in JavaScript
// ========================================

// ---------- Arithmetic Operators ----------

// These perform mathematical calculations between numbers.

let a = 5 + 4;        // a = 9
let b = a - 3;        // b = 6
let c = a * b;        // c = 54
let d = c / 4.5;      // d = 12
let e = d % 5;        // e = 2 (remainder of 12 ÷ 5)


// ---------- String Operators ----------

// Used to manipulate text (strings).
// The '+' operator joins two strings.
// The '+=' operator appends a string to an existing one.

let x = 'Hello';
let y = 'World';
let z = x + ' ' + y;  // z = 'Hello World'

let greeting = 'Hi';
greeting += ', there!';  // greeting = 'Hi, there!'


// ---------- Logical Operators ----------

// Used to evaluate conditions and return true or false.

let num1 = 3;
let num2 = 5;

if (num1 == num2) {
  // false, because 3 is not equal to 5
}

if (num1 != num2) {
  // true, because 3 is not equal to 5
}

if (num1 == 3 && num2 != 4) {
  // true: both conditions are true
}

if (num1 == 4 || num2 == 5) {
  // true: at least one condition is true
}

if (num1 < 5) {
  // true: 3 is less than 5
}


// ---------- Assignment Operators ----------

// Used to assign and update variable values.

let val = 3;

val += 4;  // val = 7
val -= 3;  // val = 4
val *= 5;  // val = 20
val /= 4;  // val = 5

// ========================================
// Practical Activity: Candidate Eligibility Checker
// ========================================

// Objective:
// Create a JavaScript program that determines whether a job candidate is eligible based on:
// - Age
// - Work experience
// - Education level
// - Certification status

// Requirements:
// - Use logical and arithmetic operators
// - Print a clear message indicating whether the candidate is eligible

// ---------- Candidate Data ----------

let age = 28;
let yearsExperience = 5;
let educationLevel = "higher";
let hasCertificate = true;

// ---------- Eligibility Criteria ----------

let minAge = 18;
let minExperience = 3;
let requiredEducation = "higher";
let certificateRequired = true;

// ---------- Eligibility Check ----------

let isEligible =
  age >= minAge &&
  yearsExperience >= minExperience &&
  (educationLevel === requiredEducation || hasCertificate) &&
  (!certificateRequired || hasCertificate);

// ---------- Output Result ----------

console.log("Is the candidate eligible? " + isEligible);
// Output: Is the candidate eligible? true (or false, depending on data)