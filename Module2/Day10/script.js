//Task1: What will be the output of the following code and why?

// let user = "Alice";

function outer() {
  function inner() {
    console.log(user);
  }
  let user = "Bob";
  inner();
}

outer();

//here the output will be bob as inner function is being called after declaring and intializing user as Bob inside the outer function

//task2: 2. What is the mistake in the code below?
let total = 0; // Global, bad practice

function add(num) {
  total += num;
}

add(5);
add(10);
console.log(total);

//Here the mistake in code is  that total is being declared in global state and used inside the add  function which gives the chance that total can be manipulated from outside unknnowingly which  will  produce  an error

//task3: Create a function with a nested function and log a variable from the parent function.

function parent() {
  let name = "parent";
  function child() {
    console.log("I am a child and I have a " + name);
  }
  child();
}
parent();

//task4:  Use a loop inside a function and declare a variable inside the loop. Can you access it outside?

function counter() {
  for (let i = 0; i < 11; i++) {
    const msg = "Happy Birthday";
  }
  //   console.log(msg); No we can't access it produces reference error
}
counter();

//task5: Write a function that tries to access a variable declared inside another function.

function sibling1() {
  let city = "Ktm";
  sibling2(city);
}

function sibling2(city) {
  console.log("My brother lives in " + city);
}

sibling1();

//Task8: what will be the output:
// console.log(a);
let a = 10;

//Output will be a can't be accessed before initialization

//task7: 7. Where is the age variable accessible?
function showAge() {
  let age = 25;
  console.log(age);
}

// console.log(age);
//  age variable is accessible only within the function showAge and  from the point where it is declared

//Task8: 8. What will be the output and explain the output?
let message = "Hello";

function outer1() {
  let message = "Hi";

  function inner1() {
    console.log(message);
  }

  inner1();
}

outer1();

//Here the  output will be Hi because insde the function before calling inner the message  is redeclared and assigned as Hi

//9. What will be the output and why?
let x = "Global";

function outer2() {
  let x = "Outer";

  function inner2() {
    let x = "Inner";
    console.log(x);
  }

  inner2();
}

outer2();

//Here the output willbe inner as x is declared and assigned as Inner inside the inner2 function

//10: What will be the output and why?
function counter() {
  let count = 0;
  return function () {
    count--;
    console.log(count);
  };
}

const reduce = counter();
reduce();
reduce();

// The output will be -1 , -2 as the returned function remembers the count variable
