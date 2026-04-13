//This file contains the task from T49 to T67

//T-049: Given the array-like object below, access the second element and log it:

const arrayLike = { 0: "First", 1: "Second", length: 2 };

console.log(arrayLike[1]);

// T-050: Write a function that takes a variable number of arguments and converts the arguments object into a real array using Array.from.

function makeArray(...args) {
  const newArr = Array.from(args);
  console.log(newArr);
}
makeArray(2, 3, 4, 5, 6, "appke", "ball");

//T-051: Write a snippet to select all div elements on a webpage (using document.querySelectorAll) and convert the resulting NodeList into an array.

// Array.from(items)

//T-052:  T-052: Merge these two arrays into a single array:
const arr1 = [1, 2];
const arr2 = [3, 4];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

// T-053: Create an array of n duplicate values using Array.from. Input: Create an array with 5 "A" values. Output: ["A", "A", "A", "A", "A"]

const t53 = Array.from({ length: 5 }, () => "A");
console.log(t53);

//T-054: Use Array.from to convert a string like "Hello" into an array of characters.

const t54 = Array.from("Hello");
console.log(t54);

// T-055: For the array, ['apple', 'banana', 'apricot', 'mango', 'blueberry'], group words by their first letter using group().

const fruits = ["apple", "banana", "apricot", "mango", "blueberry"];

const grouped = Object.groupBy(fruits, (fruit) => fruit[0]);
console.log(grouped);

// T-057: From this array [3, 7, 3, 2, 3, 8, 7, 7], find the most repeated number. Hint: Use array method.

//T-058: Find the median of [5, 2, 9, 1, 3, 6, 8].

const arr = [5, 2, 9, 1, 3, 6, 8];

const sorted = [...arr].sort((a, b) => a - b);

const mid = Math.floor(sorted.length / 2);
console.log("Middle index:", mid);

let median;
if (sorted.length % 2 === 0) {
  median = (sorted[mid - 1] + sorted[mid]) / 2;
} else {
  median = sorted[mid];
}

console.log("Median:", median);

//T-059: Convert this array [['a', 1], ['b', 2], ['c', 3]], into { a: 1, b: 2, c: 3 } using array method(s).

const arr59 = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];

const t59 = Object.fromEntries(arr59);
console.log(t59);

//T-060: Flatten and convert all letters to uppercase in one step using flatMap(). Here is input array: [['a', 'b'], ['c', 'd']].

const arr60 = [
  ["a", "b"],
  ["c", "d"],
];

const t60 = arr60.flatMap((arr) => arr.map((letter) => letter.toUpperCase()));

console.log(t60);

//T-061: Count the occurrences of each fruit in this array: ['apple', 'banana', 'apple', 'mango', 'banana', 'banana']

const fruits61 = ["apple", "banana", "apple", "mango", "banana", "banana"];

const count = fruits61.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count);

//T-062: Extract extract [‘b’, ‘c’, ‘d’] using slice() from this array: ['a', 'b', 'c', 'd', 'e']

const t62 = ["a", "b", "c", "d", "e"];

const result = t62.slice(1, 4);

console.log(result); // ['b', 'c', 'd']

//T-063: Sort the array [9, 3, 1, 6, 8] in ascending order using toSorted()

const nums = [9, 3, 1, 6, 8];
const sortedNum = nums.toSorted((a, b) => a - b);

console.log(sortedNum);

//T-064:  T-064: Reverse [1, 2, 3, 4, 5] using toReversed() and compare it with reverse()

const t64 = [1, 2, 3, 4, 5];
const reversed = t64.toReversed();
console.log(reversed);

//toReversed is an immutable method which doesn't change the original and returns a new array

//T-065:  T-065: Group the follwing array elements based on age(Adult vs Non-Adult):

const users = [
  { name: "Alice", age: 55 },
  { name: "Bob", age: 3 },
  { name: "Charlie", age: 25 },
];

const t65 = users.reduce((acc, user) => {
  const category = user.age >= 18 ? "Adult" : "Non-Adult";
  acc[category] = acc[category] || [];
  acc[category].push(user);
  return acc;
}, {});

console.log(t65);

//T-066: Find the longest word in this sentence using Array and Array methods: "40 Days of JavaScript by tapaScript is a powerful initiative".

const sentence = "40 Days of JavaScript by tapaScript is a powerful initiative";

const longestWord = sentence
  .split(" ")
  .reduce(
    (longest, word) => (word.length > longest.length ? word : longest),
    "",
  );

console.log(longestWord);

//T-067: Find common elements between two arrays, [1, 2, 3, 4], [3, 4, 5, 6]

const arrA = [1, 2, 3, 4];
const arrB = [3, 4, 5, 6];

const common = arrA.filter((num) => arrB.includes(num));

console.log(common);
