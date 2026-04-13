// Task1. What will be the output of the following code and why?
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter();
counter();

//The output  will be 1 and 2 as the inner function is being returned and count is  incremented once inside the inner function but the inner function remebers the count variable so the value isbeing 2

//Task2: 2. What will be the output and why?
function testClosure() {
  let x = 10;
  return function () {
    return x * x;
  };
}
console.log(testClosure()());

//Here the output will be 100 as at first the testClose function is called and it initailizes z to  10  and it  returns another function and  now that function is also called immediately which return 10*10 and that's being logged so, output will be 100.

//Task3:  Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.

// function updateCounter() {
//   let count = 0;
//   const btnElm = document.querySelector("button");
//   btnElm.addEventListener("click", () => {
//     count++;
//     const spanElm = document.querySelector("span");
//     spanElm.textContent = count;
//   });
// }
// updateCounter();

//task4: Write a function createMultiplier(multiplier) that returns another function to multiply numbers.

function createMultiplier(multiplier) {
  let num = multiplier;
  return function () {
    for (let i = 0; i <= 10; i++) {
      console.log(`${num} * ${i} = ` + num * i);
    }
  };
}

let multiply = createMultiplier(5);
multiply();

//Task5: What happens if a closure references an object?
// The object is garbage collected immediately
// The object remains in memory as long as the closure exists
// The object is automatically cloned
// None of the Above.

//ans: The object remains in memory as long as the closure exists.

//Task6: Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functuions.

function counterFactory() {
  let count = 0;

  function increment() {
    count++;
    return count;
  }
  function decrement() {
    count--;
    return count;
  }
  function reset() {
    count = 0;
    return count;
  }
  return { increment, decrement, reset };
}

const funcCounter = counterFactory();
console.log(funcCounter.increment());
console.log(funcCounter.increment());
console.log(funcCounter.decrement());
console.log(funcCounter.reset());
console.log(funcCounter.decrement());
