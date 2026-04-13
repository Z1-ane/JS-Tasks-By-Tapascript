// How to Approach These Assignments
// Read the Code: Understand what it’s trying to do.
// Run the Code: See what’s printed in the console (and what’s not!).
// Debug: Use console.log(), DevTools, breakpoints, or visual stepping.
// Fix: Carefully apply knowledge of scope, async, closures, or object handling.
// Refactor: Bonus points for writing cleaner, modern code.

//task1: 1. Closure Confusion
// function makeMultipliers() {
//   const result = [];
//   for (let i = 1; i <= 3; i++) {
//     result.push(function (num) {
//       return num * i;
//     });
//   }
//   return result;
// }

// const [double, triple, quadruple] = makeMultipliers();

// console.log(double(2)); // Expected: 2 * 1 = 2
// console.log(triple(2)); // Expected: 2 * 2 = 4
// console.log(quadruple(2)); // Expected: 2 * 3 = 6

//task2: Async Bug with setTimeout in Loop

// setTimeout(() => {
//   for (var i = 0; i <= 3; i++) {
//     console.log("Count:", i);
//   }
// }, 1000);

// for (let i = 0; i <= 3; i++) {
//   setTimeout(function () {
//     console.log("Count:", i);
//   }, 1000);
// }

// for (var i = 0; i <= 3; i++) {
//   setTimeout(() => {
//     console.log("Count:", i);
//   }, 1000);
// }

//Task3: Object Mutation Trap
// const config = {
//   appName: "CoolApp",
//   version: "1.0",
// };

// function updateConfig(newConfig) {
//   Object.assign(config, newConfig);
//   console.log(config);
// }

// updateConfig({ version: "2.0" });
// Error: Assignment to constant variable.
// Goal: Fix the error without changing const to let, and apply a clean way to update nested configs.

//Task4:
// Issue: Error isn’t caught properly. Unhandled rejection occurs.
// Goal: Catch the error properly using try/catch with await pattern.

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
}
async function start() {
  try {
    const res = await fetchData();
    console.log("Then block:", res);

    throw new Error("Something went wrong!");
  } catch (err) {
    console.log("Caught error:", err.message);
  }
}

start();
