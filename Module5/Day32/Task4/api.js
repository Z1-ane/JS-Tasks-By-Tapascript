let users = [
  { id: 1, name: "Alex" },
  { id: 2, name: "John" },
];

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchUsers() {
  await delay(1000);
  return [...users];
}

export async function createUser(name) {
  await delay(1000);

  const newUser = {
    id: Date.now(),
    name,
  };

  users.push(newUser);
  return newUser;
}
