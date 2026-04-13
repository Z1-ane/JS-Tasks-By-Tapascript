//Task1: Create a Promise that resolves with the string "Hello, Promises!" after 1 second.
// Log the result using .then().

const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hello World");
  }, 1000);
});

myPromise.then((result) => console.log(result));

//Task2: Reject a Promise Create a Promise that immediately rejects with the message "Something went wrong!".
// Handle the error using .catch().

const rejectPromise = new Promise((resolve, reject) => {
  reject("Something went wrong!");
});

rejectPromise.catch((error) => {
  console.log(error);
});

//Task3: Simulate Coin Toss
// Return a Promise that randomly resolves to "Heads" or "Tails" after 1 second.

const coinToss = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 2);
  if (random == 0) {
    resolve("Heads");
  } else reject("Tails");
});

coinToss
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

//Task4: Promise with Condition
// Create a function checkAge(age) that returns a Promise.
// Resolve if age >= 18, reject otherwise.

function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("Adult");
    } else {
      reject("Child");
    }
  });
}
checkAge(19)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//Task5:  Chain Promises Sequentially
// Create three Promises that log:
// "Step 1 done"
// "Step 2 done"
// "Step 3 done"
// Chain them using .then().

const Promise1 = new Promise((resolve, reject) => {
  resolve("Step1 Done");
});

const Promise2 = new Promise((resolve, reject) => {
  resolve("Step2 Done");
});

const Promise3 = new Promise((resolve, reject) => {
  resolve("Step3 Done");
});

Promise1.then((res1) => {
  console.log(res1);
  return Promise2;
})
  .then((res1) => {
    console.log(res1);
    return Promise3;
  })
  .then((res1) => {
    console.log(res1);
  });

//Task6: Value Transformation in Chain
// Create a Promise that resolves with 5.
// Chain .then() handlers to double it, then square it.
// Final output should be 100.

const Chain = new Promise((resolve, reject) => {
  resolve(5);
});

Chain.then((result) => {
  return result * 2;
}).then((result) => {
  console.log(result * result);
});

//Task7: Chain with Random Rejection
// First .then() resolves to "Start".
// Second .then() randomly throws an error or returns "Continue".
// Handle rejection gracefully.

const first = new Promise((resolve, reject) => {
  resolve("Start I am a promise");
});

const second = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 2);
  if (random == 0) {
    resolve("I am  a second promise");
  } else {
    reject("I am an error in 2nd promise");
  }
});

first
  .then((result) => {
    console.log(result);
    return second;
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

//Task8: Multiple then() calls on same Promise
// Create a single resolved Promise.
// Attach two different .then() handlers to it.
// Explain that both run independently.

let number = 5;
const multiple = new Promise((resolve, reject) => {
  number = number * 2;
  resolve(number);
});

multiple.then((result) => {
  console.log(result);
});

multiple.then((result) => {
  console.log(result);
});

// This shows both run  independently of  one another coz promises are not chained

//Task9: Return New Promises in .then()
// Chain multiple .then() where each returns a new Promise with a delay and logs a step like:
// “First”
// “Second”
// “Third”

const firstPromise = new Promise((resolve, reject) => {
  resolve("I am the first promise");
});

firstPromise
  .then((res) => {
    console.log(res);
    return new Promise((resolve, reject) => {
      resolve("First");
    });
  })
  .then((res) => {
    console.log(res);
    return new Promise((resolve, reject) => {
      resolve("Second");
    });
  })
  .then((res) => {
    console.log(res);
    return new Promise((resolve, reject) => {
      resolve("Third");
    });
  })
  .then((res) => {
    console.log(res);
  });

//Task10: Implement aa fakedb query
function fakeDBQuery(queryName) {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 1000) + 500;

    setTimeout(() => {
      const data = { query: queryName, result: `Result of ${queryName}` };
      console.log(`Resolved: ${queryName} after ${delay}ms`);
      resolve(data);
    }, delay);
  });
}

fakeDBQuery("User")
  .then((user) => {
    console.log(user);
    return fakeDBQuery("Orders");
  })
  .then((orders) => {
    console.log(orders);
    return fakeDBQuery("Payments");
  })
  .then((payments) => {
    console.log(payments);
    console.log("All queries completed!");
  })
  .catch((err) => {
    console.error("Something went wrong:", err);
  });
