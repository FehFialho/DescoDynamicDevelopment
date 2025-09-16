// Lesson 2B - JavaScript Programming Environments (09/16/2025)

// ==============================
//  JavaScript Command Syntax
// ==============================

// JavaScript is case-sensitive. This means uppercase and lowercase letters are treated differently.
// For example: "Name" and "name" are two different identifiers.

// Whitespace (spaces, tabs, and new lines) is meaningful and is considered during parsing.

// The source code of JavaScript scripts is read from left to right and converted into a sequence of input elements.

// It is recommended to always end your statements with a semicolon (;)
// Choose meaningful and consistent names for your variables and functions.

var Name = "Fernanda";
var name = "Fialho";


// ==============================
//  Comments
// ==============================

// Comments are used to insert tips, notes, suggestions, or alerts in the JavaScript code.
// They make it easier to read and understand what the code does.
// Comments can also be used to disable code, preventing it from being executed.

// ---------- Single-line comment example ----------
function comment() {
    // This is a single-line comment in JavaScript
    console.log('Hello world!');
}
comment();

// ---------- Multi-line comment example ----------
function comment() {
    /* This is a multi-line comment.
       Notice that the comment continues until it's closed. */
    console.log('Hello world');
}
comment();


// ==============================
//  Declarations 
// ==============================

// Types:
// var: Declares a variable and initializes it with a value.
// let: Declares a local variable, block-scoped, initialization is optional.
// const: Declares a block-scoped constant, read-only. Its value cannot be changed through assignment or redeclared while the script is running. Must be initialized with a value.

var Name = "Fernanda";   // Local or global declaration
Sal = 1800;           // Global declaration
let Age = 19;         // Local (block) declaration
const BirthYear = 2006; // Const declaration

// Rules for Variable Identifiers:
// - Can only contain alphanumeric characters (or "$" or "_").
// - Cannot start with a digit.
// - Is case sensitive, e.g., Estado_origem is different from estado_origem.

// Valid examples:
let Employee_Name;
let _Sallary;
let $City;

// ==============================
//  Scope 
// ==============================

// Global Variable - Declared outside of any function. Available to all blocks.
if (true) {
    var x = 5;
  }
  console.log(x);  // output: 5

// Local Variable - Declared inside a function. Available only within the function where it was declared.  
if (true) {
let y = 5;
}
console.log(y);  // ReferenceError: y is not defined