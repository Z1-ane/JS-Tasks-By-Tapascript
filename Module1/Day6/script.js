//Task 1: Create a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit. Formula: (Celsius * 9/5) + 32 = Fahrenheit

function celsiusToFahrenheit(celsius) {
  const Fahrenheit = (celsius * 9) / 5 + 32;
  return Fahrenheit;
}
console.log("The Fahrenheit value is " + celsiusToFahrenheit(10));

//Task2: Write a function findMax(num1, num2) that returns the larger of the two numbers. It should work for negative numbers as well.

function findMax(num1, num2) {
  if (num1 > num2) console.log(num1 + "is greatest.");
  else console.log(num2 + " is greatest");
}
findMax(10, 20);

//Task3: Create a function isPalindrome(str) that checks if a given string is a palindrome (reads the same forward and backward). You can not use any string function that we have not learned in the series so far.

let reversed = "";
function isPalindrome(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  if (reversed === str) console.log("Palindrome");
  else console.log("Not palindrome");
}
isPalindrome("oyo");

//Task4: Create a function factorial(n) that returns the factorial of n. Example 5! = 5 * 4 * 3 * 2 * 1

function factorial(n) {
  if (n == 0) return 1;
  else return n * factorial(n - 1);
}
console.log("The factorial  of  the given number is " + factorial(6));

//task5: Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string.

function countVowels(str) {
  str = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      count++;
    }
  }
  return count;
}

console.log("The number of vowels in this word is " + countVowels("education"));

//Task6: Write a function capitalizeWords(sentence) that takes a sentence and capitalizes the first letter of each word. You can use the toUpperCase() method of string to convert the lowercase to uppercase.

function capitalizeWords(sentence) {
  let result = "";

  for (let i = 0; i < sentence.length; i++) {
    if (i === 0) {
      result += sentence[i].toUpperCase();
    } else if (sentence[i - 1] === " ") {
      result += sentence[i].toUpperCase();
    } else {
      result += sentence[i];
    }
  }

  console.log(result);
}

capitalizeWords("i am a boy");

//task7: Write an IIFE that prints "Hello, JavaScript!" to the console. Here the Second word must be supplied using paramneter and argument.

(function () {
  console.log("Hello World");
})();

//task8: Write a function greet(name, callback), where callback prints a message using the name parameter.

function greet(name, callback) {
  printmessage(name);
}

function printmessage(name) {
  console.log("Hello " + name);
}

greet("Ram", printmessage);

//task9: Create Call Stack Execution Diagram for this flow
// function f1() {}
// function f2() {
//     f1();
// }
// f2();

// Step 1:
//  f2()

//  step 2:
//   f1()  //here f1gets executed so f2 can contnue
//   f2()

//   step3:
//    f2()// Now f2 gets excuted

//    step4:
//    //Empty Callstack

//task10: function f1() {}
// function f2() {}
// function f3() {
//     f1();
// }
// f2();
// f3();
// f1();

// Here f2 is called  and f2  is executed  first

// Abd f3 is clled now it goes inside f3 and f1 is called there so now f1 gets executed and f3 executionwill be continued

// After that f1 will  be executed.
