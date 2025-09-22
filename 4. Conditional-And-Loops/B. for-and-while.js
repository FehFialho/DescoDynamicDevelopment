// ========================================
// Resume 4B - FOR and WHILE in JavaScript
// ========================================

// ========================================
// 1. FOR Loops
// ========================================

// A "for" loop is made of 3 parts:
// 1) Initialization
// 2) Test condition
// 3) Increment / Decrement
// Syntax:
// for (initialization; condition; increment) {
//   // code to run each iteration
// }

// Example 1: Iterating through an array of car objects
const cars = [
  { id: 1, model: "Corsa", brand: "Chevrolet", price: 45000, createdAt: "01/01/2022" },
  { id: 2, model: "Punta", brand: "Fiat", price: 35000, createdAt: "01/02/2022" },
  { id: 3, model: "Gol", brand: "Volkswagen", price: 40000, createdAt: "01/03/2022" }
];

let totalPrices = 0;

for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  totalPrices += car.price;
}

console.log("Total price of cars:", totalPrices);


// Example 2: for...in vs for...of
const models = ["Corsa", "Punta", "Gol"];

console.log("Using for...in:");
for (let index in models) {
  console.log("Index:", index, "Value:", models[index]);
}

console.log("Using for...of:");
for (let model of models) {
  console.log("Value:", model);
}


// ========================================
// 2. FOR...IN with Objects
// ========================================

const car = {
  model: "Audi A3",
  brand: "Audi",
  year: 2020
};

for (let property in car) {
  console.log(property + ": " + car[property]);
}


// Example: Nested for...in with array of objects
const garage = [
  { model: "Audi A3", brand: "Audi", year: 2020 },
  { model: "Jeep Compact", brand: "Jeep", year: 2021 }
];

for (let index in garage) {
  console.log("Car " + (parseInt(index) + 1) + ":");
  for (let attribute in garage[index]) {
    console.log(attribute + ": " + garage[index][attribute]);
  }
  console.log("-----");
}


// ========================================
// 3. WHILE Loops
// ========================================

// WHILE runs while a condition is true.
// Syntax:
// while (condition) {
//   // code to run repeatedly
// }

// Example: count from 0 to 9
let e = 0;

while (e < 10) {
  console.log("The number is " + e);
  e++;
}


// ========================================
// 4. DO-WHILE Loops
// ========================================

// DO-WHILE runs the code block at least once,
// even if the condition is false.
// Syntax:
// do {
//   // code
// } while (condition);

// Example: build a result string with numbers
let result = "";
let f = 0;

do {
  result += "Number " + f + ", ";
  f++;
} while (f < 5);

console.log(result);


// Another example: print numbers from 1 to 10
let C = 1;

do {
  console.log(C);
  C++;
} while (C <= 10);


// ========================================
// 5. FOR...OF Reminder
// ========================================

// FOR...OF is ideal for looping through values in arrays.
// Example: print car years
const carsList = [
  { model: "Audi A3", brand: "Audi", year: 2020 },
  { model: "Compact", brand: "Jeep", year: 2021 }
];

for (const car of carsList) {
  console.log(car.year);
}
