// Lesson 2D - Creating and manipulating arrays (09/18/2025)

var values = [1,6,4,5,5]; // Initial array with values

console.log(values[1]); // Logs the value at index 1 (second position)

var sum = 0; // Initialize sum variable

var bigger = values[0]; // Initialize 'bigger' with the first value of the array

var names = new Array("Feh", "Joy", "Malu"); // Array with string

// Loop to go through each value in the 'values' array
for (var i = 0; i < values.length; i++){

  console.log(i+1 + "° Position - Value: " + values[i]); // Logs the position and value at that position
  sum += values[i]; // Add the value at the current position to the sum
  
  if (values[i] > bigger) // Check if the current value is greater than the 'bigger' variable
    bigger = values[i]; // If it is, update 'bigger' to the new value
}

console.log("Sum: " + sum); // After the loop ends, log the sum of the array

console.log("Average: " + sum/values.length); // Log the average value of the array (sum divided by number of elements)

console.log("Biggest Value: " + bigger); // Log the biggest value found during the loop

// --- Other ways to iterate arrays ---

// 1. Using forEach()
values.forEach((value, index) => {
  console.log(`${index + 1}° Position - Value: ${value}`);
});

// 2. Using map()
const doubledValues = values.map(value => value * 2);
console.log("Doubled Values:", doubledValues);

// 3. Using for...of
for (const value of values) {
  console.log("Value:", value);
}

// 4. Using for...in
for (const index in values) {
  console.log(`${parseInt(index) + 1}° Position - Value: ${values[index]}`);
}

// 5. Using reduce() to sum values
const totalSum = values.reduce((acc, value) => acc + value, 0);
console.log("Total Sum using reduce():", totalSum);

// 6. Using filter() to get values greater than 3
const greaterThanThree = values.filter(value => value > 3);
console.log("Values greater than 3:", greaterThanThree);

// 7. Using every() to check if all values are positive
const allPositive = values.every(value => value > 0);
console.log("All values positive?", allPositive);

// 8. Using some() to check if there is any value less than 0
const hasNegative = values.some(value => value < 0);
console.log("Any negative values?", hasNegative);