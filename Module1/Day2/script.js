//Task 1: Declare variables for a person’s name, age, isStudent status, and favorite programming language.

let personName;
let age;
const isStudent = true;
const favoriteLanguage = "Javascript";

//Task2: //Print the values to the cconsole.

console.log(personName);
console.log(age);
console.log(isStudent);
console.log(favoriteLanguage);

//Task3: Try reassigning values to let and const variables and observe errors.

personName = "Ram";
console.log(personName);
// isStudent = false;
// console.log(isStudent);

//Task4: Create an object and an array, assign them to new variables, modify, and observe changes.

const object = {
  name: "Kanye",
  cast: "West",
};

const ObjCopy = object;

console.log(ObjCopy);
ObjCopy.name = "MeowMeow";
console.log(ObjCopy);
console.log(object);

const numArr = [1, "two", 3, 4, 5];
const numArrCopy = numArr;
console.log(numArrCopy);
numArrCopy[1] = 2;
numArr[0] = "One";

console.log(numArr);
console.log(numArrCopy);
