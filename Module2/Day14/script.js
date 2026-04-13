//Task1: What will be the output of the following code?
try {
  let r = p + 50;
  console.log(r);
} catch (error) {
  console.log("An error occurred:", error.name);
}

//The output  will be An error occurred: reference error

//Task2: Write a function processPayment(amount) that checks if the amount is positive and not exceeding balance. If any condition fails, throw appropriate errors

function processPayment(amount) {
  let balance = 500;
  try {
    if (amount < 0) {
      throw new Error("Amount is negative");
    }
    if (amount > balance) {
      throw new Error("Balance Insufficient");
    }
    console.log("Eligible to withdraw  balance");
  } catch (error) {
    console.log("Can't Withdrow " + error.message);
  }
}

processPayment(200);
processPayment(600);
processPayment(-50);

//Task3: Implement a custom error handling system for an e-commerce website that categorizes errors as
// UserError
// PaymentError
// ServerError
// EmailError

class UserError extends Error {
  constructor(message) {
    super(message);
    this.name = "User Error";
  }
}
class PaymentError extends Error {
  constructor(message) {
    super(message);
    this.name = "Payment Error";
  }
}
class ServerError extends Error {
  constructor(message) {
    super(message);
    this.name = "Server Error";
  }
}
class EmailError extends Error {
  constructor(message) {
    super(message);
    this.name = "Email Error";
  }
}

//Task4: 4. Simulate an API call function fetchData(url). If the URL does not start with "https", throw an "Invalid URL" error. Handle it using try...catch

function fetchData(url) {
  try {
    if (url.startsWith("https://")) {
      console.log("Correct URL Format");
    } else throw new Error("Invalid URL Format");
  } catch (error) {
    console.log(error.message);
  }
}

fetchData("https://chatgpt.com/");

//Task5:  Implement a custom error type ValidationError using constructor functions to handle form validation errors

class ValidationError extends Error {
  constructor(message, errors = []) {
    super(message);
    this.name = "Validation Error";
    this.errors = errors;
  }
}

const userInput = { username: "", age: -2 };

function validateUser(userInput) {
  const errors = [];
  if (userInput.username === "") {
    errors.push("User name cannot be empty");
  }
  if (userInput.age < 0) {
    errors.push("User age cannot be negative");
  }
  if (errors.length > 0) {
    throw new ValidationError("Validation failed", errors);
  }
}

try {
  validateUser(userInput);
} catch (e) {
  if (e instanceof ValidationError) {
    console.log(e.name, e.message);
    e.errors.forEach((errorName, i) => {
      console.log(`${i + 1}.${errorName}`);
    });
  }
}

//task6: Write a function readFile(filePath) that simulates reading a file. If the file does not exist (simulate with a condition), throw a "File not found" error. Handle the error with try...catch. Make sure you have code to handle releasing the IO resources

// function readFile(filePath) {
//   try {
//     if (filePath != "") {
//       throw new Error("File  Not Found");
//     }
//     console.log("File Found");
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// readFile("xyz");

//task7: Write a function parseJson(str) that takes a JSON string and tries to parse it using JSON.parse(). If parsing fails, catch the error and return "Invalid JSON"

function parseJson(str) {
  try {
    const JSONobj = JSON.parse(str);
    console.log("Successfully Parsed");
    return JSONobj;
  } catch (error) {
    return "Invalid JSON";
  }
}
const user = '{ "name": "Lokesh", "age": 20 }';
const invalidUser = '{name:"Lokesh"}';
console.log(parseJson(user));

console.log(parseJson(invalidUser));

//Task8:  What is the purpose of throw in JavaScript?
// It catches an error
// It stops the execution of a program
// It creates a new error manually
// It prints an error message

//The answer is  It creates a  new error manually

//Task9:  What does the finally block do in a try...catch statement?
// Runs only if an error occurs
// Runs only if no error occurs
// Runs regardless of whether an error occurs or not
// Stops the execution of the script

//The answer is runs regardless of  whether an  error  occurs or  not

//task10: Create a table exaplaining the usages of try, catch, throw, rethrow, error object

// The use of try is  to execute the block of code and if anny error exists display it  with the help of an error to prevent app crashing. Throw is for throwing  an error  manually as your desire and error object is a built  in object in JS which has existing properties like error.message, error.status and it's and argument of the catch object. And rethrow is  for When you catch an error but decide it should be handled further up the call stack, you can throw it again.
