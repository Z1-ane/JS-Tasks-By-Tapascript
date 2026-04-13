//Task1: Expian Temporal Dead Zone by creating 3 variables in side a block. Post the code as your answer.

// TDZ applies to `let` and `const`.
// It is the time between entering the block `{}` and the actual declaration.
// Accessing the variable in this zone throws a ReferenceError.
// `var` does NOT have TDZ (it is hoisted and initialized with `undefined`).

{
  // console.log(a); //  ReferenceError (TDZ for `a`)
  // console.log(b); //  ReferenceError (TDZ for `b`)
  console.log(c); // undefined (no TDZ for `var`)

  let a = 10; // TDZ for `a` ends here
  const b = 20; // TDZ for `b` ends here
  var c = 30; // `var` is hoisted and initialized as undefined

  console.log(a); // 10
  console.log(b); // 20
  console.log(c); // 30
}

//Task2: Explain variable and  fuunction hoisting and post the code as your example:

//Hoisting means JS moves variable declarations to the top of the scope before the code execution (not the actual values only declarations

//Variable hoisting:

console.log(fname); //here var is  hoisted and initialized with undefined
var fname = "Alex";

//   console.log(pi);  Variables are hoisted but not initialized so, it gives reference error.
//   console.log(shape);
const pi = 3.141;
let shape = "circle";
console.log(pi);
console.log(shape);

//Function Hoisting

printMessage();

function printMessage() {
  console.log("I am  printing message");
}

// function hoisting with var
console.log(funcHoist); // Since var are initialized with undefined it gives undefined
// funcHoist(); This gives types error: funcHoist isn't a function as funchoist is initialized with undefined
var funcHoist = function () {
  console.log("I am function hoisting  with var");
};

funcHoist();

//function hoisting with an arrow function 'let'
// arrHoist(); We can't access arrHoist before initaialization basically the  concept of TDZ
let arrHoist = () => {
  console.log("I am an arrow function ");
};
arrHoist();
