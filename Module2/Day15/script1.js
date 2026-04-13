//This file  contains the task from task001 to task 20

//T-001: Create an array of 5 elements using the Array Constructor.

// const fruits = new Array("apple", "cherry", "mango", "guava", "pineapple");
// console.log(fruits);

//T002: Create an array of 3 empty slots.

// let emptyArr = new Array(3);
// console.log(emptyArr);

//T003: Create an array of 6 elements using the Array literals and access the fourth element in the array using its length property.

// const task3 = [1, 2, 3, 4, 5, 6];

// console.log(task3[task3.length - 3]);

//T004: Use the for loop on the above array to print elements in the odd index.

// for (let i = 1; i < task3.length; i = i + 2) {
//   console.log(task3[i]);
// }

//T005: Add one element at the front and the end of an array

// task3.unshift(0);
// task3.push(7);
// console.log(task3);

//T006: Remove an element from the front and the end of an array.

// task3.shift();
// task3.pop();
// console.log(task3);

//T007: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.

// const favFoods = [
//   "dal",
//   "bhat",
//   "tarkari",
//   "ice-cream",
//   "pizza",
//   "burger",
//   "noodles",
//   "chiya",
//   "momo",
//   "chowmein",
// ];

// const [, , , , , sixth] = favFoods;
// console.log(sixth);

//T008: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.

// const [, , ...last8] = favFoods;

// console.log(last8);

//T009: Clone an Array(Shallow cloning)

// const favFoodClone = [...favFoods];
// console.log(favFoodClone);

// T-010: Empty an array using its length property

// favFoodClone.length = 0;

// console.log(favFoodClone);

//  T-011: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use for-loop.

// const t11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < t11.length; i++) {
//   if (t11[i] == 5) {
//     t11.length = 6;
//   }
// }
// console.log(t11);

// T-012: Create an Array of 10 elements. Use the splice() method to empty the array.

// t11.splice(0);
// console.log(t11);

//T-013: Create an Array of 10 elements. You can empty the array in multiple ways: using the length property, using the pop() method, using the shift() method, setting the array with [], or the splice() method. Which among these methods are most efficient and why?

//Using the length property to empty an array is the most efficient way because it is quic  and no memory creation

//  T-014: What happens when you concatenate two empty arrays?

// let first = [];
// let second = [];
// let third = first.concat(second);
// console.log(third);

// A new empty array will be formed.

//T015: How can you check if a value is partially matching with any of the elements of an Array?

// const T15 = ["my", "apple", "my", 4, 7, 9, 1, 3];

// console.log(T15.some((x) => typeof x == "string" && x.includes("app")));

//T016:What is the difference between the slice() and splice() methods?

//Slice method is basically for creating a clone of an array while  splice method is for deleting  an item in an array

//T017: Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. You must be doing this in an immutable way such that the source array never gets modified.

// const t17 = ["a12", "b31", "a01", "c4", "d9"];

// const sorted = t17.toSorted();

// console.log(sorted);

//T018: Can you give examples of sparse and dense arrays?

//Densed arrays are those  arrays which have values at every index whereas  sparse arrays refer to which haveholes or empty in index just separated by commas

// const densed = [8, 9, 1, 2, 3];
// const sparsed1 = new Array(6);
// const sparsed2 = [1, , 4, 5];

//T019: Give a practical usages of the .fill() method

// Fill method is used to provide  default values so it's usecase could be even providing valu like sth to calendar or it can also be used just to provide default values in scenario

//T-020: How to convert an array to a string?

// const hello = ["h", "e", "l", "l", "o"];
// const str = hello.join("");
// console.log(str);

// One of the basic  ways to convert an array to string is join Method
