//built the logic myself but took help of  AI to do error handling which I figured  out  later

console.log("Welcome to Number Guessing Game");

function numberGuessingGame() {
  const randomNum = Math.floor(Math.random() * 10) + 1;
  let count = 0;

  while (true) {
    const input = prompt("Enter a number between 1 and 10 (or Cancel to quit)");

    if (input === null) {
      console.log("Game cancelled.");
      return;
    }

    const userInput = Number(input);
    count++;

    if (isNaN(userInput)) {
      console.log("Please enter a valid number.");
      continue;
    }

    if (userInput > randomNum) {
      console.log("Too High");
    } else if (userInput < randomNum) {
      console.log("Too Low");
    } else {
      console.log(`Congrats! You guessed the number in ${count} attempts.`);
      return;
    }
  }
}

numberGuessingGame();
