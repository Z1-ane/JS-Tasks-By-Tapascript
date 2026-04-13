// Task1: Create a Simple Prototype Chain
// Define a base object animal with a method eat.
// Create another object dog that inherits from animal using Object.create.
// Call eat from dog and explain how the prototype chain resolves it.

const Animal = {
  eat() {
    console.log("I am eating");
  },
};

const dog = Object.create(Animal);
console.log(dog);

dog.eat();
console.log(Object.getPrototypeOf(dog));

//Task2: Build a Custom Constructor Function
// Create a constructor function Book(title, author).
// Add a method getDetails() to the prototype of Book.
// Instantiate two books and show they share the method from the prototype.

function Book(title, author) {
  this.title = title;
  this.author = author;
}
Book.prototype.getDetails = function () {
  console.log(`${this.title} is written by ${this.author}`);
};

const book1 = new Book("Maths", "Isaac");
const book2 = new Book("Physics", "Newton");
book1.getDetails();
book2.getDetails();

//Task3: Compare Object Creation Patterns
// Create three objects using:
// Object literals
// Constructor functions
// Object.create
// Add similar methods and compare how inheritance works in each pattern.

const Mango = {
  name: "Mango",
  color: "Yellow",
};

function Fruit(name, color) {
  this.name = name;
  this.color = color;

  Fruit.prototype.display = function () {
    console.log(`${name} is of ${color}`);
  };
}

const fruit1 = new Fruit("Apple", "Red");
const fruit2 = new Fruit("Banana", "Yellow");
fruit1.display();
fruit2.display();

console.log(fruit1.display === fruit2.display);
const anAnimal = {
  legs() {
    console.log("I have four legs");
  },
};

const Cat = Object.create(anAnimal);

//Task4: Simulate a Real-World Inheritance Chain
// Simulate a real-life hierarchy: Person → Student → GraduateStudent.
// Each level should add its own methods or properties using prototypes.
// Show how a GraduateStudent can access methods from both Student and Person.

class Person {
  constructor(name, age, gender) {
    this.gender = gender;
    this.age = age;
    this.name = name;
  }
  displayPerson = function () {
    console.log(`${this.name} is ${this.gender} is ${this.age}`);
  };
}

class Student extends Person {
  constructor(name, age, gender, id, grade) {
    super(gender, age, name);
    this.id = id;
    this.grade = grade;
  }
  studentInfo() {
    console.log(
      `${this.name} ${this.gender} aged ${this.age} is student of grade ${this.grade} and has id ${this.id}`,
    );
  }
}

class GraduateStudent extends Student {
  constructor(name, age, gender, id, grade, major) {
    super(name, age, gender, id, grade);
    this.major = major;
  }
  gradInfo() {
    console.log(
      `${this.name} ${this.gender} aged ${this.age} is student of grade ${this.grade} and has id ${this.id} and his major is ${this.major}`,
    );
  }
}
const Person1 = new Person("Dave", 35, "male");
Person1.displayPerson();
const student1 = new Student("Zero", 12, "male", 21, 9);
student1.studentInfo();

const gradStudent = new GraduateStudent(
  "Alex",
  13,
  "male",
  457,
  "bachelor",
  "physics",
);
gradStudent.gradInfo();

//Task5: Object.create vs Class vs Constructor Function
// Implement the same User entity using:
// Constructor Function
// ES6 Class
// Object.create
// Write a summary comparing syntax, readability, and prototype behavior.

function User(name, email) {
  this.name = name;
  this.email = email;
}

User.prototype.getInfo = function () {
  console.log(`${this.name} (${this.email})`);
};

const user1 = new User("Alex", "alex@email.com");
user1.getInfo();

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getInfo() {
    console.log(`${this.name} (${this.email})`);
  }
}

const user2 = new User("John", "john@email.com");
user2.getInfo();

const UserProto = {
  getInfo() {
    console.log(`${this.name} (${this.email})`);
  },
};

const user3 = Object.create(UserProto);
user3.name = "Emma";
user3.email = "emma@email.com";

user3.getInfo();

console.log(user1.getInfo === User.prototype.getInfo); // true
console.log(user2.getInfo === User.prototype.getInfo); // true

//Syntax of class method is better as they are also the modern efficient way
