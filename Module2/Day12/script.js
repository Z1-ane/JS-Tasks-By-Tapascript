//Task1: What will be the output and why?
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");

//The output will be Not provided as operator(??) returns the value of right sidewhen  the left side  is null or undefined and here the age  is undefined so  it return Not provided

//Task2: What will happen if we try to modify a frozen object?
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);

//When we try to modify a  frozen object the value doesn't  change

//Task3: Given an object with deeply nested properties, extract name, company, and address.city using destructuring
const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107",
    },
  },
};

const {
  name,
  company: {
    name: companyName,
    location: { city, zip },
  },
} = person;
console.log(name);
console.log(companyName);
console.log(city);
console.log(zip);

//Task4: Build a Student Management System
// Store student details in an object (name, age, grades).
// Implement a method to calculate the average grade.

const studentGrade = {
  name: "Ramesh",
  age: 12,
  grades: [40, 50, 70, 95],

  average() {
    let sum = 0;
    let avg = 0;
    for (let i = 0; i < this.grades.length; i++) {
      sum += this.grades[i];
    }
    avg = sum / this.grades.length;
    return avg;
  },
};

console.log(studentGrade.average());

//Task 5: 5. Book Store Inventory System
// Store books in an object.
// Add functionality to check availability and restock books.

const bookStore = {
  book1: {
    name: "Let us C",
    available: false,
  },
  book2: {
    name: "Happy Halloween",
    available: true,
  },
  checkAvailability(bookIndex) {
    const book = this[bookIndex];
    if (book.available != true) {
      console.log("Not available Book Need to be restocked");
    } else {
      console.log("Books are available");
    }
  },
  restockBooks(bookIndex) {
    const book = this[bookIndex];
    if (book.available != true) {
      bookIndex.available = true;
      console.log(book.name + " Restocked");
    } else {
      console.log(book.name + " Available Books Cannot Restock");
    }
  },
};

bookStore.checkAvailability("book1");
bookStore.checkAvailability("book2");
bookStore.restockBooks("book1");
bookStore.restockBooks("book2");

//Task 6: What is the difference between Object.keys() and Object.entries()? Explain with examples

const animalNickname = {
  tiger: "bablu",
  lion: "pandey",
  cat: "billi",
  elephant: "hatti",
};

console.log(Object.keys(animalNickname));
console.log(Object.values(animalNickname));
console.log(Object.entries(animalNickname));

//Object.Keys returns an array of keys by iterating all of them, Object.values() returns an array of value whereas Object.entries() returns an array of key value pairs and each key value pair is an array

//task7: How do you check if an object has a certain property?

//We take help of the 'in' operator.

console.log("tiger" in animalNickname);

//task8: What will be the output and why?
const fperson = { name: "John" };
const newPerson = fperson;
newPerson.name = "Doe";
console.log(fperson.name);

//The output will be doe as objects references are passed or assigned so they are pointing in same location and changing one value now affects another

//task9: What’s the best way to deeply copy a nested object? Expalin with examples

//The way to  deeply copy a nested object is using structuredClone

const obj1 = {
  name: "Object1",
  location: {
    city: "KTM",
    home: {
      city: "New  Plaza",
    },
  },
};

const obj2 = structuredClone(obj1);
obj1.location.home.city = "Bagbazar";
console.log(obj1);
console.log(obj2);

//Task10: Loop and print values using Object destructuiring
const users = [
  {
    name: "Alex",
    address: "15th Park Avenue",
    age: 43,
  },
  {
    name: "Bob",
    address: "Canada",
    age: 53,
  },
  {
    name: "Carl",
    address: "Bangalore",
    age: 26,
  },
];

users.forEach((user) => {
  const { name, address, age } = user;
  console.log(name, address, age);
});
