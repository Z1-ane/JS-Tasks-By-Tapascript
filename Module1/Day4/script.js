//Task1: What will be the output
let day = "Monday";

switch (day) {
  case "monday":
    console.log("It's the start of the week.");
    break;
  default:
    console.log("It's a normal day.");
}

console.log(
  "The output of task 1  will be: It's a normal day because the case is  checking the monday but it's case sensitive so it will be false and the default condition will be printed",
);

//Task  2:Build an ATM Cash Withdrawal System
// Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.

const moneyWithdrawal = 600;

if (moneyWithdrawal % 100 == 0) {
  console.log("Congrats You successfully withdrew money.");
} else {
  console.log("Money should be the multiple of 100. Try again");
}

//Task3: Build a Calculator with switch-case
// Write a simple calculator that takes an operator (+, -, , /, %) as input, and performs the operation on two numbers. Print the output on the console.

const num1 = 20;
const num2 = 30;
let opt = prompt("Enter the operator  sign (+,-,*,/)");

switch (opt) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  default:
    console.log("Wrong Operator");
}

//Task 4: Pay for your movie ticket
// Imagine, the INOX charges ticket prices based on age:
// Children (<18 years): $3
// Adults (18 - 60 years): $10
// Seniors (60+ years): $8
// Write a program that prints the ticket price based on the person’s age.

const age = 30;

if (age < 18) console.log("Your movie ticket costs Rs. $3");
else if (age <= 60) console.log("Your movie ticket costs Rs. $10");
else console.log("Your movie ticket costs Rs. $8");

//Task5:Horoscope Sign Checker
// Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. Make it month bases, not date based. Like March and April borns are Aries, Aplil and May born are Taurus, and so on. Do not use if-else.

const birthMonth = "April";

switch (birthMonth) {
  case "December":
  case "January":
    console.log("Capricorn");
    break;
  case "January":
  case "February":
    console.log("Aquarius");
    break;
  case "February":
  case "March":
    console.log("Pisces");
    break;
  case "March":
  case "April":
    console.log("Aries");
    break;
  case "April":
  case "May":
    console.log("Taurus");
    break;
  case "May":
  case "June":
    console.log("Gemini");
    break;
  case "June":
  case "July":
    console.log("Cancer");
    break;
  case "July":
  case "August":
    console.log("Leo");
    break;
  case "August":
  case "September":
    console.log("Virgo");
  case "September":
  case "October":
    console.log("Libra");
    break;
  case "October":
  case "November":
    console.log("Scorpio");
    break;
  case "November":
  case "December":
    console.log("Sagittarius");
    break;
  default:
    console.log("Check your birthmonth.");
}

//task6: 6. Which Triangle?
// A triangle has 3 sides. A Triangle type is determined by its sides:
// Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs everytime manually to see if the output changes correctly.

const side1 = 5;
const side2 = 6;
const side3 = 6;

if (side1 === side2 && side2 === side3) {
  console.log("Equilateral Triangle");
} else if (side1 === side2 || side2 === side3 || side1 === side3) {
  console.log("Isosceles Triangle");
} else {
  console.log("Scalene Triangle");
}
