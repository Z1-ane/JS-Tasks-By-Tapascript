//Q1: Create a form dynamically using JavaScript and manipulate its behavior

const selectElm = document.querySelector("select");
// console.log(optList);
const form = document.createElement("form");
// optList.forEach((optElm) => {
//   optElm.addEventListener("change", (e) => {
//     createFormBox(e.target.value);
//     console.log(optElm.value);
//   });
// });

selectElm.addEventListener("change", (e) => {
  createFormBox(e.target.value);
});

function createFormBox(type) {
  let input = document.createElement("input");
  input.style.display = "block";
  input.style.margin = ".35rem";
  const formBox = document.querySelector(".form_box");
  input.setAttribute("type", type);
  input.setAttribute("name", type);
  input.setAttribute("placeholder", `Enter your ${type}`);
  form.appendChild(input);
  formBox.appendChild(form);
}

const resetBtn = document.querySelector(".reset button");
console.log(resetBtn);

resetBtn.addEventListener("click", () => {
  form.innerHTML = "";
});

const submitBtn = document.querySelector(".submit button");
submitBtn.addEventListener("click", () => {
  const inputs = document.querySelectorAll("input");
  const formData = {};
  inputs.forEach((input) => {
    formData[input.name] = input.value;
  });
  console.log(formData);
  form.innerHTML = "";
});

//Task2: Add, delete, and search rows in a dynamic table
// A form to add rows (Name, Age, Role).
// Each row should have a “Delete” button to remove it.
// Add a search input that filters the rows by name.
// Use insertRow, deleteRow, and textContent/innerText.

//Task3:

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("black");
  } else {
    document.body.classList.remove("black");
  }
});
const toggleThemeBtn = document.querySelector(".toggle_theme");
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("black");
  if (document.body.classList.contains("black")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
