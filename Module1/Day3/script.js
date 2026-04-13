// 1. Odd or Even?

const number = 20;

if (number % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

//Task2: Do you have a Driving License?
// Let's check if you are eligible to get a driving license. The eligibility to get a driving licence is 18 years.
//  Manage age as a variable.
//  Check if the age is elligible for a driving license and print it on the console accordingly.

const age = 16;
if (age > 18) {
  console.log("eligible  to get driving license.");
} else {
  console.log("Not eligible for driving license.");
}

//Task3: Calculate CTC with a Bonus
// Let's calculate how much you earn from your office.
//  You get 12,300 rupees as your monthly salary.
//  You get a 20% bonus on your annual salary.
//  How much money do you make per annum as a CTC?

const salary = 20000;
const bonus = 20 / 100;

const annualSalary = bonus * (salary * 12);
console.log(annualSalary);

//Task4: Write a program for the Traffic Light Simulation.
// Red Light... Green Light... Let's Play!
//  Create a color variable.
//  Based on the color variable's value print in the console if a traveller needs to STOP or GO. The Red color is for STOP and the Green color is for GO.

const color = "Red Light";

if (color === "Red Light") {
  console.log("You need to stop");
} else if (color === "Green Light") {
  console.log("You can go");
}

//task5: Create an Electricity Bill Calculator
// Let's calculate how much you pay for electricity bills per month and annually.
//  Create a units variable. Based on this value you will calculate the total electricity bill for a months.
//  If each day you consume the units and each unit cost 150 rupees, how much will you be charged per month?
//  If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?

const monthBill = 30 * 150;
const yearlyBill = monthBill * 12;
const payable = 0.8 * yearlyBill;

console.log("Total  payable electricity bill  is Rs." + payable);

//task6: Leap Year Checker
// Is 2025 a Leap Year? Take year as input.
//  Use the arithmetic operator and ternary operator to print if a year is a leap year or not.

const year = 2025;

year % 4 == 0 ? console.log("LeapYear") : console.log("Not Leap year");

//task7: Max of Three Numbers
// Find the max number from the lot.
//  Take three numbers and assign them to variables p, q, and r.
//  Now find the maximum of these three numbers using the comparison operators.

const p = 30;
const q = 50;
const r = 20;

if (p > q && p > r) {
  console.log(p + "is maximum");
} else if (q > p && q > r) {
  console.log(q + " is maximum");
} else {
  console.log(r + "is maximum");
}

//task8:
// 8. Bitwise Doubling
// A tricky one for you
//  Create a variable count and assign a value, say, 5.
//  Now use the Bitwise shift operator to make the number double.
//  Print it on the console.

const num = 5;
console.log(5 << 1);
