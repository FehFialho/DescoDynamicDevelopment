// ========================================
// Resume 5A - Practicing DOM Usage (09/23/2025)
// ========================================

// ========================================
// 1. What is the DOM?
// ========================================

// The DOM (Document Object Model) is a hierarchical structure
// created by the browser when loading a web page.
// Every element (tags, text, images, links, tables, styles, attributes, etc.)
// becomes part of this structure, like a family tree of nodes.
// With JavaScript, we can access, modify, add, move, or delete elements dynamically.

// ========================================
// 2. Basic Methods to Select Elements
// ========================================

// Example: getElementById()
// This method finds ONE element by its "id".
const emailInput = document.getElementById("email")
console.log(emailInput) // Logs the element with id="email"

// Example: getElementsByTagName()
// This method returns ALL elements of a given tag as an HTMLCollection.
const paragraphs = document.getElementsByTagName("p")
console.log(paragraphs) // Logs a collection of all <p> tags

// We can then access one by index:
const thirdParagraphContent = paragraphs[2].innerHTML
console.log(thirdParagraphContent) // Text of the 3rd <p>

// Example: Accessing list items
const liItems = document.getElementsByTagName("li")
const secondItem = liItems[1] // Index starts at 0
console.log("Second list item:", secondItem.innerHTML)


// ========================================
// 3. Manipulating Elements
// ========================================

// Once we have the element, we can change it:
secondItem.innerHTML = "Changed Item"
secondItem.style.color = "blue"

// ========================================
// 4. Bonus: Parent-Child Navigation
// ========================================

// Instead of accessing childNodes[x], we can use shortcuts:
const body = document.body

console.log("First child of body:", body.firstChild)
console.log("Last child of body:", body.lastChild)

// If there are multiple children, we can loop:
for (let child of body.childNodes) {
  console.log("Child:", child)
}

// ========================================
// 5. Practical Activity
// ========================================

// Title: What are DOM elements?
// Objective: Understand how to use JavaScript to manipulate the DOM.
// Tools: Visual Studio Code + Browser

// Task: A teacher wants to calculate the average grade of students.
// The program should ask for grades one by one, stop when a negative is entered,
// then calculate and display the average.

let totalGrades = 0
let studentCount = 0
let grade

console.log("Enter student grades (type a negative number to stop):")

while (true) {
  grade = parseFloat(prompt("Enter a student grade:"))

  if (grade < 0) {
    break // Stop the loop when a negative number is typed
  }

  totalGrades += grade
  studentCount++
}

if (studentCount > 0) {
  const average = totalGrades / studentCount
  console.log("The class average is:", average.toFixed(2))
} else {
  console.log("No grades were entered.")
}

/*
======================================================
Key Takeaways
======================================================

- The DOM is a tree structure that represents your web page.
- getElementById() returns one element with a specific id.
- getElementsByTagName() returns all elements of a tag in a collection.
- You can navigate the DOM with parent/child relationships.
- Once selected, elements can be manipulated (text, styles, attributes).
*/
