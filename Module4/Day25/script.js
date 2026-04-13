//Task1:  Use fetch() to retrieve a list of users from https://jsonplaceholder.typicode.com/users and log the names to the console

async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  data.forEach((obj) => {
    console.log(obj.name);
  });
}
fetchUsers();

//Task2: Fetch all posts by userId=1 from https://jsonplaceholder.typicode.com/posts?userId=1 and display the titles in the DOM

async function fetchPost() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?userId=1",
  );
  const data = await response.json();
  showPost(data);
}

function showPost(data) {
  const ulElm = document.querySelector(".task2 ul");
  data.forEach((obj) => {
    const liElm = document.createElement("li");
    liElm.textContent = obj.title;
    ulElm.appendChild(liElm);
  });
}

fetchPost();

//Task3: Send a POST request to https://jsonplaceholder.typicode.com/posts with a new post (title, body, userId). Show the response in console

async function Task3() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      title: "Demo Post",
      body: "This is a demo showing the usage of post request",
      userId: 431,
    }),
  });
  const data = await response.json();
  console.log(data);
}

Task3();

//Task4: Update the post with ID = 1 by sending a PUT request with a new title and body. Use the same endpoint

async function Task4() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: 1,
      title: "I am updated",
      body: "Time to update me too.",
      userId: 431,
    }),
  });
  const data = await response.json();
  console.log(data);
}
Task4();

//Task5: Send a PATCH request to update just the title of post ID = 1

async function Task5() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      body: "Just the body got updated",
    }),
  });
  const data = await response.json();
  console.log(data);
}
Task5();

//Task6: Send a DELETE request to remove post with ID = 1. Log the status of the response

async function Task6() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });
  console.log(response.status);
}
Task6();

//Task7: Send a POST request to https://jsonplaceholder.typicode.com/posts with Content-Type: application/json in headers. Log the response

async function Task7() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response);
}
Task7();

//Task8: Create a custom function request(url, options) that wraps fetch. Use it to GET users and POST a new post

async function request(url, options = {}) {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Request failed:", error);
  }
}

async function getUsers() {
  const users = await request("https://jsonplaceholder.typicode.com/users");
  console.log(users);
}
getUsers();

async function createPost() {
  const newPost = await request("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: 13,
      title: "Hello World",
      body: "This is a body made via our custom request function",
      userId: 431,
    }),
  });

  console.log(newPost);
}
createPost();

//task9: Make a fetch call to a broken URL and use .catch() or try...catch to show a user-friendly error message

async function brokenURL() {
  try {
    const response = await fetch("http://");
    if (!response.ok) {
      throw new Error("Got an error");
    }
  } catch (err) {
    console.log(err);
  }
}
