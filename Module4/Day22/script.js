//Task1: Pass a function to greet a user and then thank them

function greetAndThank(name, callback1, callback2) {
  callback1(name);
  callback2(name);
}

function greet(name) {
  console.log("Hello " + name);
}

function thank(name) {
  console.log("Thank you " + name);
}

greetAndThank("Ram", greet, thank);

//Task2: Implement a calculator function that accepts two numbers and a callback to perform operations like add, subtract

function calculator(a, b, operationCallback) {
  return operationCallback(a, b);
}

function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiplication(x, y) {
  return x * y;
}
function division(x, y) {
  return x / y;
}

console.log(calculator(3, 4, add));
console.log(calculator(2, 5, subtract));
console.log(calculator(4, 5, multiplication));
console.log(calculator(6, 3, division));

//Task3: Create a delayedMessage function that prints a message after a delay using setTimeout
function delayedMessage(message, delay, callback) {
  setTimeout(() => {
    console.log(message);
  }, delay);
  callback();
}

delayedMessage("Task complete", 2000, () => console.log("Callback Fired!"));

//Task4: Implement a function that filters numbers in an array based on a condition provided via callback

function filterNumbers(arr, conditionCallback) {
  let filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (conditionCallback(arr[i])) {
      filteredArray.push(arr[i]);
    }
  }

  return filteredArray;
}

filterNumbers([1, 2, 3, 4], (n) => n > 2);

//Task5: 5. Execute a sequence of tasks one after another using callbacks
function task1(callback) {
  console.log("Task 1 done");
  callback();
}

function task2(callback) {
  console.log("Task 2 done");
  callback();
}

function task3() {
  console.log("Task 3 done");
}

task1(() => {
  task2(() => {
    task3();
  });
});
