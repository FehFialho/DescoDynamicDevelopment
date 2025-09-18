// Lesson 3C - Other ways to iterate arrays (09/18/2025)

const newValues = [8, 3, 9, 2, 7]; // New array for iteration examples

// 1. Using forEach()
newValues.forEach((value, index) => {
  console.log(`${index + 1}° Position - Value: ${value}`);
});

// 2. Using map()
const squaredValues = newValues.map(value => value * value);
console.log("Squared Values:", squaredValues);

// 3. Using for...of
for (const value of newValues) {
  console.log("Value:", value);
}

// 4. Using for...in
for (const index in newValues) {
  console.log(`${parseInt(index) + 1}° Position - Value: ${newValues[index]}`);
}

// 5. Using reduce() to sum values
const totalSum = newValues.reduce((acc, value) => acc + value, 0);
console.log("Total Sum using reduce():", totalSum);

// 6. Using filter() to get values greater than 5
const greaterThanFive = newValues.filter(value => value > 5);
console.log("Values greater than 5:", greaterThanFive);

// 7. Using every() to check if all values are less than 10
const allLessThanTen = newValues.every(value => value < 10);
console.log("All values less than 10?", allLessThanTen);

// 8. Using some() to check if there's a value equal to 2
const hasTwo = newValues.some(value => value === 2);
console.log("Array contains the number 2?", hasTwo);
