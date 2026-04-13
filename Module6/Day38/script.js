//Task1: 1. Identify Reachable vs Unreachable Objects
// Write a small program where:
// You create an object user
// Create a second object profile that references user
// Then set user = null
// Is the original user object still reachable? Why or why not?

let user1 = {
  name: "Alex",
  age: 12,
  weight: "60kg",
};
const user2 = user1;

user1 = null;
console.log(user1);
console.log(user2);

//Yes, the original object is still reachable in this scenario as user2 stores the reference of store1.

//Task2: Simulate and Break a Cyclic Reference
// Observe how cyclic references can cause memory retention.

// Create two objects a and b
// Make them reference each other (a.ref = b and b.ref = a)
// Nullify external references to both
// Explain why this may or may not cause a memory leak. Add a.ref = null; b.ref = null; and explain how it helps

let obj1 = {
  name: "apple",
};

let obj2 = {
  name: "orange",
};

// Create cyclic reference
obj1.ref = obj2;
obj2.ref = obj1;

// Remove external references
obj1 = null;
obj2 = null;

console.log(obj1);
console.log(obj2);

//Modern browsers (mark-and-sweep) → No memory leak; garbage collector removes them.

//Task3: DOM Leak Detection and Fix
// Learn how DOM elements and closures can create memory leaks.
// Create a button using JavaScript
// Add an event listener that references a variable outside the listener
// Remove the button from the DOM, but not the event listener
// Identify the leak & fix it.

const value = 30;

const button = document.createElement("button");
button.innerHTML = "Click Me";
document.body.appendChild(button);

function handleClick() {
  console.log(value);
}

button.addEventListener("click", handleClick);

document.body.removeChild(button);
