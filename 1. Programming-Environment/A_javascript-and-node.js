// Lesson 1A - Programming Environments for JavaScript (09/02/2025)

// ==============================
//  Server and Client Side
// ==============================

// JavaScript can be used both on the server side and on the client side.
// Knowing the basics of JavaScript is important to be able to use it on both the server and the client.

// For the server side, we will use NodeJS.
// On the client side, we will use it with HTML.

// ===============================================
//  ReadLine Sync (Node.js only)
// ===============================================

// Node.js allows input through the terminal using readline-sync.
// This is useful for command-line applications or exercises run outside the browser.

// Example:
const rlsync = require('readline-sync');

const firstName = rlsync.question("Enter your first name: ");
const lastName = rlsync.question("Enter your last name: ");

const fullName = `${firstName} ${lastName}`;
console.log("Your full name is: " + fullName);

// Make sure to install the module before running: npm install readline-sync