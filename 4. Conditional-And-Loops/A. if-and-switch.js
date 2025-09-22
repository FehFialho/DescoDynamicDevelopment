// ========================================
// Resume 4A - Conditional Statements in JavaScript
// ========================================

// ========================================
// 1. IF Statements
// ========================================

// IF allows branching based on conditions.
// Basic structure:
// if (condition) {
//   // code runs if condition is true
// }

let a = 5;

if (a > 2) {
  console.log("a is greater than 2");
}

// ELSE IF and ELSE provide additional checks
let number = 10;

if (number > 10) {
  console.log("Number is greater than 10");
} else if (number < 5) {
  console.log("Number is less than 5");
} else {
  console.log("Number is between 5 and 10 (inclusive).");
}

// Combining logical operators && (AND) and || (OR)

let age = 70;

// "||" means "OR" → if one condition is true, block runs
if (age < 16 || age > 65) {
  console.log("Voting is optional.");
} else if (age < 18) {
  console.log("Voting is optional (young voter).");
} else {
  console.log("Voting is mandatory.");
}

// Another real example: nationality check
let country = "Brazil";

if (country !== "Brazil") {
  console.log("You are foreign.");
} else {
  console.log("You are Brazilian.");
}


// ========================================
// 2. SWITCH Statement
// ========================================

// SWITCH is used when you want to compare the same expression
// against multiple possible values.
// Syntax:
// switch (expression) {
//   case value1:
//     // code
//     break;
//   case value2:
//     // code
//     break;
//   default:
//     // code if no case matches
// }

// Example: fruit price
let fruit = "mango";

switch (fruit) {
  case "orange":
    console.log("Oranges cost R$2,00 per kilo.");
    break;
  case "apple":
    console.log("Apples cost R$4,00 per kilo.");
    break;
  case "banana":
    console.log("Bananas cost R$3,00 per kilo.");
    break;
  case "mango":
    console.log("Mango costs R$3,00 per kilo.");
    // notice: no break → execution will fall through
  default:
    console.log("Sorry, item not available.");
    break;
}

// Example: Days of the week
let dayOfWeek = 2;

switch (dayOfWeek) {
  case 1:
    console.log("Today is Sunday");
    break;
  case 2:
    console.log("Today is Monday");
    break;
  case 3:
    console.log("Today is Tuesday");
    break;
  default:
    console.log("This day does not exist");
    break;
}
