//Task1: What's the output of the code below?
// function f1() {
//   console.log("f1");
// }

// function f2() {
//   console.log("f2");
// }

// function f3() {
//   console.log("f3");
// }

// function f4() {
//   console.log("f4");
// }

// console.log("Let's do it!");

// setTimeout(function () {
//   f1();
// }, 0);

// f4();

// setTimeout(function () {
//   f2();
// }, 5000);

// setTimeout(function () {
//   f3();
// }, 3000);

//Output:
// Let's do it!
// f4
// f1
// f3
// f2

//Task2: What's the output of the code below?
// function f1() {
//   console.log("f1");
// }

// console.log("Let's do it!");

// setTimeout(function () {
//   console.log("in settimeout");
// }, 0);

// f1();
// f1();
// f1();
// f1();

//Output:  Let's do it!, f1, f1, f1, f1, in settimeout

//Task3: 3. Which statements are true? Select multiple
//  JavaScript is single-threaded
//  By default, JavaScript is synchronous
//  Only promises make JavaScript asynchronous
//  All function callbacks are asynchronous

// First and second statements are true

//Task4: Which statement is true? Select Only one
// (_) JavaScript Function Execution Stack(Call Stack) never gets empty.
// (_) The job queue gets higher priority than the callback queue.
// (_) The only job of Event Loop is to manage the Call Stack
// (_) The StackOverflow exception is random.

//The 2nd statement is true.

//Task5: Guess The Output:

// const tom = () => console.log("Tom");

// const jerry = () => console.log("Jerry");

// const cartoon = () => {
//   console.log("Cartoon");

//   setTimeout(tom, 5000);

//   new Promise((resolve, reject) =>
//     resolve("should it be right after Tom, before Jerry?"),
//   ).then((resolve) => console.log(resolve));

//   jerry();
// };

// cartoon();

//Output:
// cartoon
//jerry
// should it be right after tom, before jerry?
// Tom

//task6: Guess the output
// const tom = () => console.log("Tom");
// const jerry = () => console.log("Jerry");
// const doggy = () => console.log("Doggy");

// const cartoon = () => {
//   console.log("Cartoon");

//   setTimeout(tom, 50);
//   setTimeout(doggy, 30);

//   new Promise((resolve, reject) =>
//     resolve("I am a Promise, right after tom and doggy! Really?"),
//   ).then((resolve) => console.log(resolve));
//   new Promise((resolve, reject) =>
//     resolve("I am a Promise after Promise!"),
//   ).then((resolve) => console.log(resolve));

//   jerry();
// };

// cartoon();

//Output:
// cartoon
// jerry
// I am a promise after tom and doggy! Really?
// I am a promise after promise
// doggy
// tom

//task7: 7. Guess the output
// const f1 = () => console.log("f1");
// const f2 = () => console.log("f2");
// const f3 = () => console.log("f3");
// const f4 = () => console.log("f4");

// f4();

// setTimeout(f1, 0);

// new Promise((resolve, reject) => {
//   resolve("Boom");
// }).then((result) => console.log(result));

// setTimeout(f2, 2000);

// new Promise((resolve, reject) => {
//   resolve("Sonic");
// }).then((result) => console.log(result));

// setTimeout(f3, 0);

// new Promise((resolve, reject) => {
//   resolve("Albert");
// }).then((result) => console.log(result));

//Output:
// f4
//Boom
//Sonic
//Albert
//f1
//f3
//f2

//task8: Guess the output:
// const f1 = () => {
//   console.log("f1");
//   f2();
// };
// const f2 = () => console.log("f2");
// const f3 = () => console.log("f3");
// const f4 = () => console.log("f4");

// f4();

// setTimeout(f1, 0);

// new Promise((resolve, reject) => {
//   resolve("Sonic");
// }).then((result) => console.log(result));

// setTimeout(f3, 0);

// new Promise((resolve, reject) => {
//   resolve("Albert");
// }).then((result) => console.log(result));

//Output:
//f4
//Sonic
//Albert
//f1
//f2
//f3

console.log("Please check source file");
