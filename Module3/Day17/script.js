//task1: find the no. of  most repeated words
const q1Text = document
  .querySelector("#text")
  .textContent.toLowerCase()
  .split(" ");

const mostRepeated = q1Text.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

const result = Object.entries(mostRepeated).reduce(
  (max, [word, count]) => (count > max.count ? { word, count } : max),
  { word: "", count: 0 },
);

console.log(result);

const q1Ans = document.querySelector(".q1_ans");

q1Ans.textContent = `The most repeated  word  is ${result.word} and It's repeated ${result.count} times`;

//Task2: change the bg color of list alternately

const liElms = document.querySelectorAll("li");
liElms.forEach((liElm, i) => {
  if (i % 2 == 0) {
    liElm.style.backgroundColor = "black";
    liElm.style.color = "white";
  }
});

//Task3: Write different ways we can access DOM and what they returns

//1. getElementById - It returns the HTML element that meatches the Id annd null if not found

//2. getElementsByClassName - returns  an HTMLCollection(array-like): , we  need to convert to an array

//3. getElementsByTagName- returns  an HTMLCollection(array-like): , we  need to convert to an array

//querySelector - returns the first element found (could be element, class, id)

//querySelectorAll - returns a  nodeList of the elements

//Task4: Find and Replace Text Inside a Page

const q4Text = document.querySelector("#q4_text").textContent;
const content = q4Text.replace(/Javascript/gi, "JS");
document.querySelector("#q4_ans").textContent = content;

//Task5: Count  and display the no. of anchor tags

const anchorList = document.querySelectorAll("a");

document.querySelector(".q5_ans").textContent =
  `There are ${anchorList.length + 1} anchor tags`;
