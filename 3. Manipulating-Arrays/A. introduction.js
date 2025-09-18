// Lesson 3A - Create Array and Iterate (09/18/2025)

var values = [1, 6, 4, 5, 5]; // Initial array with values

console.log(values[1]); // Logs the value at index 1 (second position)

var sum = 0; // Initialize sum variable

var bigger = values[0]; // Initialize 'bigger' with the first value of the array

var names = new Array("Feh", "Joy", "Malu"); // Array with string

// Loop to go through each value in the 'values' array
for (var i = 0; i < values.length; i++) {
  console.log(i + 1 + "° Position - Value: " + values[i]); // Logs the position and value at that position
  sum += values[i]; // Add the value at the current position to the sum

  if (values[i] > bigger) // Check if the current value is greater than the 'bigger' variable
    bigger = values[i]; // If it is, update 'bigger' to the new value
}

console.log("Sum: " + sum); // After the loop ends, log the sum of the array

console.log("Average: " + sum / values.length); // Log the average value of the array

console.log("Biggest Value: " + bigger); // Log the biggest value found