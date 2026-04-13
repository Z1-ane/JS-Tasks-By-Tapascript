import { fetchUsers, createUser } from "./api.js";

const userList = document.getElementById("userList");
const form = document.getElementById("userForm");
const input = document.getElementById("username");

async function loadUsers() {
  userList.innerHTML = "Loading...";

  const users = await fetchUsers();

  userList.innerHTML = "";
  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = user.name;
    userList.appendChild(li);
  });
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  await createUser(input.value);
  input.value = "";
  loadUsers();
});

loadUsers();
