//Task1: Create a function wait(ms) that returns a promise which resolves after ms milliseconds. Use async/await to log messages before and after the delay

async function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function run() {
  console.log("Before waiting...");

  await wait(3000);

  console.log("After 3 seconds!");
}

run();

//Task2: Using async/await, log "One", then after 1 second log "Two", then "Three" after another 2 seconds. No setTimeout outside of promises

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

async function check() {
  console.log("One");

  await delay(1000);
  console.log("Two");

  await delay(2000);
  console.log("Three");
}

check();

//Task3: Use fetch() with async/await to load a local JSON file (data.json) and display its contents in the console

async function loadData() {
  try {
    const response = await fetch("local.json");

    if (!response.ok) {
      throw new Error("Failed to fetch file");
    }

    const data = await response.json();
    console.log(data);
    console.log(data.appName);
    console.log(data.author);
    data.users.forEach((person) => {
      console.log(person.name);
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

loadData();

//task4: Use the public API https://jsonplaceholder.typicode.com/users/1 to fetch and display the user’s name, email, and address on the page

const url = "https://jsnplaceholder.typicode.com/users/1";

async function fetchAPI(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log(data.username, data.website);
    const q5Response = document.querySelector(".q5_response");
    q5Response.textContent = `Company = ${data.company.name}`;
  } catch (error) {
    console.log(error.message);
    const q5Response = document.querySelector(".q5_response");
    q5Response.textContent = `${error.message}: Please try again.`;
  }
}

fetchAPI(url);

//task5: Modify the previous task to handle errors (e.g., wrong URL) and display a user-friendly error message in the DOM

//Task6: . Refactor then/catch to async/await
// fetch("/api/data")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

async function fetchApiData() {
  try {
    const response = await fetch("/api/data");
    const data = await response.json();
  } catch (err) {
    console.error(err);
  }
}

fetchApiData();
