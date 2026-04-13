//Task1: Create a Book class with properties: title, author, pages.
// Add a method describe() that logs: "Title: [title], Author: [author], Pages: [pages]"
// Create at least two book objects and call the describe() method.

// class Book {
//   constructor(title, author, pages) {
//     ((this.title = title), (this.author = author), (this.pages = pages));
//   }
//   describe() {
//     console.log("Title:" + this.title);
//     console.log("Author:" + this.author);
//     console.log("Pages:" + this.pages);
//   }
// }

// const book1 = new Book("is it anything", "Ram", "246");
// const book2 = new Book("Maths", "Algeb", "500");

// book1.describe();
// book2.describe();

//Task2: Use Getters and Setters with a Temperature Class
// Create a Temperature class with a private field _celsius.
// Add a getter to return Fahrenheit value.
// Add a setter to set Celsius temperature.
// Test setting temperature and logging Fahrenheit.
// this._celsius * 1.8 + 32;

// class Temperature {
//   #_celsius;

//   get Bal
// }

//Task3: Build a User Class with Public & Private Fields
// Fields: name, #password
// Add a method checkPassword(pw) that checks if it matches #password.
// Show how private fields can’t be accessed directly outside the class.

class User {
  #password;
  constructor(name, password) {
    this.name = name;
    this.#password = password;
  }
  checkPassword(pw) {
    if (pw === this.#password) {
      console.log("Password Matched");
    } else {
      console.log("Password didnot  match");
    }
  }
}

const user1 = new User("Subit", "12sr3");
user1.checkPassword("12qr3");

// console.log(user1.password); //This returns undefined a  private field can't be accessed outside of classes

//Task4: Inheritance — Vehicle and Car
// Vehicle class has fields: make, model, and method start()
// Car extends Vehicle, adds fuelType
// Override the start() method in Car to print: "Starting [fuelType] car: [make] [model]"

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    console.log(this.make, this.model);
  }
}
class Car extends Vehicle {
  constructor(make, model, fuelType) {
    super(make, model);
    this.fuelType = fuelType;
  }
  start() {
    console.log(`Starting ${this.fuelType} car: ${this.make} ${this.model}`);
  }
}

const car1 = new Car("Hyundai", "St2", "electric");
car1.start();

//task5: Use a Static Method
// Create a class MathUtils with static methods: add(a, b), subtract(a, b), randomInt(min, max)
// Call the methods without creating an object.

class MathUtils {
  static add(a, b) {
    return a + b;
  }
  static subtract(a, b) {
    return a - b;
  }
  static randomInt(min, max) {
    if (min > max) {
      return min;
    } else {
      return max;
    }
  }
}

console.log(MathUtils.add(4, 5));
console.log(MathUtils.subtract(7, 2));
console.log(MathUtils.randomInt(5, 9));

//task6: 6. Smart Light Bulb Class with Access Control
// Create a SmartLightBulb class:
// Public method: turnOn(), turnOff()
// Private method: #connectToWiFi()
// turnOn() first calls #connectToWiFi() and then logs: "Light is ON"
// Static method: info() — logs "SmartLightBulb v1.0 supports remote control and scheduling."
// Try accessing the private method directly and observe the error.

class SmartLightBulb {
  static info() {
    console.log("SmartLightBulb v1.0 supports remote control and scheduling.");
  }
  #connectToWifi() {
    console.log("Turning on Wifi");
  }
  turnOn() {
    this.#connectToWifi();
    console.log("Light Turned On");
  }
  turnOff() {
    console.log("Light turned Off");
  }
}
const nayaBatti = new SmartLightBulb();
SmartLightBulb.info();
nayaBatti.turnOn();
nayaBatti.turnOff();

//task7: Animal Class and Subclasses
// Base Class: Animal(name, sound)
// Method: makeSound() logs: "The [name] says [sound]"
// Subclass 1: Dog(name) — inherits from Animal
// Overrides makeSound() → "The Dog [name] barks!"
// Subclass 2: Cat(name) — overrides makeSound() → "The Cat [name] meows!"
// Call super() inside each subclass constructor
// Add a shared method sleep() in Animal and test with both Dog and Cat instances.

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  makeSound() {
    console.log(`${this.name} says ${this.sound}`);
  }
  sleep() {
    console.log(`${this.name} is sleeping`);
  }
}
class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  makeSound() {
    console.log(`The Dog ${this.name} barks`);
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  makeSound() {
    console.log(`The Cat ${this.name} meows`);
  }
}

const punte = new Dog("Punte");
punte.makeSound();
punte.sleep();

const billie = new Cat("billu");
billie.makeSound();
billie.sleep();
