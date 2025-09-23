/*
======================================================
Resume 4E – Classes, Inheritance, Getters/Setters, and Composition (09/23/2025)
======================================================

======================================================
Classes and Constructors
======================================================

A class in JavaScript often defines a constructor. This constructor
lets you manipulate the parameters passed when creating a new instance.
It works like a special method automatically called when you use "new".

Example:
*/

class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
    }
  
    introduce() {
      return `Hi, I'm ${this.name} and I'm ${this.age} years old.`
    }
  }
  
  const person1 = new Person("Alice", 25)
  console.log(person1.introduce()) // "Hi, I'm Alice and I'm 25 years old."
  
  /*

  ======================================================
  Inheritance
  ======================================================
  
  Inheritance allows one class (subclass) to extend another (superclass).
  The subclass gains access to the methods of the superclass.
  If the subclass has its own constructor, it must call "super()" before using "this".
  */
  
  class Animal {
    constructor(name) {
      this.name = name
    }
    speak() {
      return `${this.name} makes a sound.`
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name) // calling the superclass constructor
      this.breed = breed
    }
    speak() {
      return `${this.name} barks.`
    }
  }
  
  const myDog = new Dog("Rex", "Labrador")
  console.log(myDog.speak()) // "Rex barks."
  
  
  /*
  ======================================================
  Getters and Setters
  ======================================================
  
  Getters and setters let you define custom logic for reading and writing properties.
  They look like normal properties to the user, but internally they are functions.
  */
  
  class User {
    constructor(name) {
      this._name = name
    }
  
    // Getter
    get name() {
      return this._name.toUpperCase()
    }
  
    // Setter
    set name(newName) {
      if (newName.length > 0) {
        this._name = newName
      }
    }
  }
  
  const user1 = new User("bob")
  console.log(user1.name) // "BOB" (getter in action)
  user1.name = "Charlie" // setter updates value
  console.log(user1.name) // "CHARLIE"
  
  
  /*
  ======================================================
  Composition
  ======================================================
  
  Composition is a design pattern where objects are built
  by combining smaller, specialized objects rather than
  relying only on inheritance.
  
  Example: A Car that uses a Motor object.
  */
  
  class Motor {
    constructor(cc) {
      this.cc = cc
    }
  
    getInfo() {
      return `${this.cc}cc engine`
    }
  }
  
  class Car {
    constructor(brand, motor) {
      this.brand = brand
      this.motor = motor // composition: Motor is part of Car
    }
  
    accelerate() {
      return `${this.brand} is accelerating with a ${this.motor.getInfo()}!`
    }
  }
  
  const motor1 = new Motor(2000)
  const car1 = new Car("Toyota", motor1)
  console.log(car1.accelerate()) // "Toyota is accelerating with a 2000cc engine!"
  
  
  /*
  ======================================================
  Bonus: Modularization
  ======================================================
  
  To keep the code organized, each class can be placed in its own file and exported.
  For example, in Node.js you would use "module.exports" and "require".
  
  Example (inside file Motor.js):
  -----------------------------------------------------
  class Motor {
    constructor(cc) {
      this.cc = cc
    }
    getInfo() {
      return `${this.cc}cc engine`
    }
  }
  module.exports = Motor
  
  Then in Car.js:
  -----------------------------------------------------
  const Motor = require("./Motor")
  
  class Car {
    constructor(brand, motor) {
      this.brand = brand
      this.motor = motor
    }
    accelerate() {
      return `${this.brand} accelerates with ${this.motor.getInfo()}`
    }
  }
  module.exports = Car
  
  Finally in index.js:
  -----------------------------------------------------
  const Motor = require("./Motor")
  const Car = require("./Car")
  
  const motor = new Motor(1500)
  const car = new Car("Honda", motor)
  console.log(car.accelerate()) // "Honda accelerates with 1500cc engine"
  */
  
  /*
  
  ======================================================
  Key Takeaways
  ======================================================
  
  - Classes help organize code in JavaScript.
  - Constructors initialize new objects with given parameters.
  - Inheritance allows reusing and extending logic from another class.
  - Getters and setters provide controlled access to object properties.
  - Composition combines smaller objects to build complex functionality.
  - Modularization makes your code cleaner and reusable across files.
  */