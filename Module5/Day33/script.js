//Task1: Create a Map of Student IDs and Names Add at least 5 students.Retrieve a name using a student ID. Delete one entry and print the Map.

const studentMap = new Map([
  [12, "Sanmic"],
  [325, "Raj"],
  [243, "Raj"],
  [761, "Alex"],
  [432, "Prince"],
]);
studentMap.set(785, "Rakesh");
console.log(studentMap);
studentMap.delete(432);
console.log(studentMap);

//Task2: Create a Set of Programming Languages. Add duplicate languages to test uniqueness. Iterate and print all unique entries.

const language = new Set([
  "apple",
  "plum",
  "apple",
  "banana",
  "cherry",
  "lemon",
  "dragon fruit",
  "cherry",
]);
console.log(language);

language.forEach((lang) => {
  console.log(lang);
});

//Task3: Compare Object vs Map for Key-Value Storage
// Store the same data in both.
// Compare insertion order and key types (e.g., object keys).

const student = {
  fname: "Rakesh",
  age: 12,
  234: "code",
};

const stud = new Map([
  ["fname", "Rakesh"],
  ["age", 12],
  [234, "code"],
]);

console.log(student);
console.log(stud);

//Task4: Build a Contact List Using Map
// Use phone numbers as keys and names as values.
// Add, update, delete contacts.
// Search for a contact by number.

const contactList = new Map([
  [234, "Alex"],
  [213, "Prince"],
  [784, "Tyler"],
]);
contactList.set(765, "Sank");
contactList.delete(213);
contactList.set(234, "Bllake");
console.log(contactList);
console.log(contactList.get(784));

//Task5: Remove Duplicates from Array Using Set
const fruits = ["apple", "banana", "apple", "orange", "banana"];
// Convert to a Set and back to an array with only unique values.

const newFruits = new Set(fruits);
console.log(newFruits);

//Task6:  Track User Logins with Set
// Add user IDs when users log in.
// Remove them on logout.
// Check if a specific user is currently logged in.

const users = new Set();

function login(userId) {
  users.add(userId);
  console.log(`User ${userId} logged in`);
}

function logout(userId) {
  users.delete(userId);
  console.log(`User ${userId} logged out`);
}

function isLoggedIn(userId) {
  return users.has(userId);
}

login(12);
login(45);

console.log(isLoggedIn(12));
console.log(isLoggedIn(99));

logout(12);
console.log(isLoggedIn(12));

//task7: Create a Map of Book Titles and Authors
// Add at least 5 entries.
// Update an author.
// Count the number of books.

const bookList = new Map([
  ["Science", "Hawking"],
  ["Bio", "Eipstein"],
  ["java", "Cofu"],
  ["js", "tapa"],
]);
bookList.set("js", "tapscript");
console.log(bookList.size);
console.log(bookList);

//task8: Associate Metadata with DOM Elements Using WeakMap
// Create fake DOM elements (objects).
// Store related metadata in a WeakMap.
// Demonstrate benefits for garbage collection.

//10. Bulid a shopping Cart using Map
//Id =  key, quantity = values
// let shoppingCart = new Map([[512,30],[976,40],[431,70],[247,55]]);

// shoppingCart.set(141,60);
// shoppingCart.set(512,60);

// let quantArr = shoppingCart.values();
// console.log(quantArr);

// let sum = 0;
// for(let value of quantArr){
//     sum+=value;
// }
// console.log("Total quantity is:",sum);

//11.Anagram Checker with set

// function checkAnagram(word1,word2)
// {
//     const set1 = new Set(word1);
//     const set2 = new Set(word2);

//     for (val of set1)
//     {
//         if (set2.has(val))
//         {
//             console.log(`${val} is present in ${word2}`);
//         }
//         else{
//             console.log(`${val} is not present in ${word2}`);
//         }
//     }
// }

// checkAnagram('cato','act');

//12. First non-repeating  character with map.

// function firstNonRepeatingChar(str)
// {
//     const charFreq = new Map();
//     for (let char of str){
//         if(charFreq.has(char))
//         {
//             charFreq.set(char,charFreq.get(char) + 1);
//         }
//         else{
//             charFreq.set(char,1);
//         }
//     }
//     for (let char of  str){
//         if(charFreq.get(char)===1){
//             return char;
//         }
//     }
//     return null;
// }

// console.log(firstNonRepeatingChar("Apple"));

//13. Measure Performance: Object vs Map

// const obj = {};

// console.time('Object insertion');

// for (let i=0; i<100000; i++)
// {
//     obj['key'+i] = 'value' + i;
// }
// console.timeEnd('Object insertion');
// console.time('Map insertion');
// const map1 = new Map();
// for (let i= 0; i<100000; i++)
// {
//     map1.set('key'+i,'value'+i);
// }
// console.timeEnd('Map insertion');

//14. Voting app with set to prevent duplicate votes;

let voterId = new Set([101, 102, 103, 104, 105]);
console.log(voterId);

function check(id) {
  if (voterId.has(id)) {
    console.log("User has already voted.");
  } else {
    voterId.add(id);
  }
}
check(101);
check(107);
console.log(voterId);
