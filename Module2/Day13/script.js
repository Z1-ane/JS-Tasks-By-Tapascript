// Task1: Create a table of two columns, situation and value. Now add the rows for every situations and the value of this in that situation. Please cover the following situations
// At the Global
// Inside an Object Method
// Inside the Satandalone non-Arrow Function
// Inside an Arrow Function(standalone)
// Inside an Arrow Function(as object method)
// Inside an object created with the Constructor Function
// Please add examples for each of the scenarios.

//Situation: At the Global
// Value:  This refers to the  window object
console.log(this);

//Situation: Inside an object method
//Value: this refers to the object where it's called
const obj1 = {
  brand: "Samsung",
  printBrand() {
    console.log(this.brand);
  },
};
obj1.printBrand();
//Situation: Inside the standalone and non arrow function
//Value: In non-strict method this refers to the window object and in strict mode it's undefined
function thisValue() {
  console.log(this);
}
thisValue();
//Situation: Inside an arrow function(standalone)
//Value: They don't have  their own  this they inherit  from surrounding

(() => {
  console.log(this);
})();

//Here in this case  it's parent is window  so it  inherits the value of window

//Situation: Inside an arrow function as Object Method
//Value :This would also inherit  from the surrounding scope and in this case surrounding scope is window as object literals  don't create a scope only function will create the scope

const user1 = {
  userName: "Eipsten",
  printUserName: () => {
    console.log(this.userName);
  },
};
user1.printUserName();

//Situation: Inside an object created with the Constructor Function
//Value: In terms of constructor this refers to the new object being created  and in place of method 'this' refers to the object where method is called.
function User(name, city) {
  console.log("Inside constructor, this is:", this);

  this.name = name;
  this.city = city;

  this.printInfo = function () {
    console.log("Inside method, this is:", this);
    console.log(`${this.name} lives in ${this.city}`);
  };
}

const userA = new User("Ram", "KTM");
userA.printInfo();

//Task2: What is the problem here? Fix it to log the correct name and explain the fix
// const user = {
//   name: "tapaScript",
//   greet: () => {
//     console.log(`Hello, ${this.name}!`);
//   },
// };

// user.greet();

const user = {
  name: "tapaScript",
  creatingScope() {
    const greet = () => {
      console.log(`Hello, ${this.name}!`);
    };
    greet();
  },
};

user.creatingScope();

// Since this always inherits from surrounding scope in case of an arrow function, one good soluton  is  to  create a scope using  outer function and converting that method  to an innerfunction  and invoking  that inner function outside of an outer function and later accesing outerfunction via a object

//Task3: Can you explain what is the problem here and fix the issue to log the correct name?
const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};
obj.greet();
// const greetFn = obj.greet;
// greetFn();

//Here the problem is function is not called via object so, this becomes undefined the method should be  accessed via a object only

//Task4: What is the problem with the following code? Why isn't it logging the name correctly?

const userC = {
  name: "Alex",
  greet: function () {
    const inner = () => {
      console.log(`Hello, ${this.name}!`);
    };
    inner();
  },
};

userC.greet();

//The problem here is the value of this insidea regular function is window object so accessing name gives undefine the solution can be converting  inner to an arrow function

//Task5: Create a Sports constructor function that takes name and number of players as arguments and assigns them using this keyword. Then, create two sports instances and log their details

function Sports(name, number) {
  this.name = name;
  this.number = number;

  this.printData = function () {
    console.log(this.name, this.number);
  };
}
const football = new Sports("Football", 11);
const basketball = new Sports("Basketball", 5);

football.printData();
basketball.printData();

//task6:  Can you attach the car1's describe() method to car2 object? Give all possible solutions that you can think of
const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};

car1.describe.call(car2);
car1.describe.apply(car2);
car2.describe = car1.describe.bind(car2);
car2.describe();

car2.describe = car1.describe;
car2.describe();

//Task7: What will be the  output of this code and why
const person = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

person.sayHello();
person.sayHelloArrow();

// the output will be charlie and  unndefined as sayHello is a regular function (method) of  person object where this points to that particular object. but sayHelloArrow is an arrow function  which  inherits this from the surroundinng  scope  and here it's window
