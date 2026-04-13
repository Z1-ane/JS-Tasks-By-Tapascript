//Task1: 1. Generate a Pyramid Pattern using Nested Loop as it is shown below:
// *
// * *
// * * *
// * * * *
// * * * * *

for (let i = 1; i <= 5; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += "* ";
  }

  console.log(row);
}

//Task2: Create a multipliction table using for loop.

const num = 3;
for (let i = 1; i <= 10; i++) {
  console.log(`${num} * ${i} = ` + num * i);
}

//Task 3:
// Find the summation of all odd numbers between 1 to 500 and print them on the console log.

let sum = 0;
for (let i = 0; i < 500; i++) {
  if (i % 2 != 0) {
    sum += i;
  }
}
console.log(sum);

//Task4: Skipping multiples of 3:

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) continue;
  else console.log(i);
}

//task5: Write a program to reverse the digits of a given number using a while loop.

let number = 203;
let rem = 0;
let reverse = 0;
while (number != 0) {
  rem = number % 10;
  reverse = reverse * 10 + rem;
  number = Math.floor(number / 10);
}
console.log(reverse);

//task6:

// for while loop is executed when we know number of iterations and while loop are executed until the condition is true. Do  while  loop gets executed atleast once as it's condition ix checked at the end.
