const quizData = [
  {
    question: "What does DOM stand for?",
    options: [
      "Document Order Model",
      "Document Object Model",
      "Document Orient Model",
      "Document Open Mode",
    ],
    correct: 1,
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "Apple"],
    correct: 1,
  },
  {
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: ["var", "let", "const", "static"],
    correct: 2,
  },
  {
    question: "Which method converts a JSON string into a JavaScript object?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.object()",
      "JSON.convert()",
    ],
    correct: 1,
  },
  {
    question: "Which array method adds an element to the end?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correct: 0,
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    options: ["String", "Boolean", "Float", "Undefined"],
    correct: 2,
  },
  {
    question: "Which symbol is used for single-line comments?",
    options: ["/* */", "//", "#", "<!-- -->"],
    correct: 1,
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Creative Style System",
      "Cascading Style Sheets",
      "Colorful Style Sheets",
    ],
    correct: 2,
  },
  {
    question: "Which method removes the last element of an array?",
    options: ["shift()", "pop()", "slice()", "splice()"],
    correct: 1,
  },
  {
    question: "Which function is used to delay execution in JavaScript?",
    options: ["setDelay()", "delay()", "setInterval()", "setTimeout()"],
    correct: 3,
  },
];

let questions = [...quizData].sort(() => Math.random() - 0.5);
let currentQn = 0;
let score = 0;
let timer;
let timeLeft = 15;

const questionElm = document.getElementById("question");
const optionsElm = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const timerElm = document.querySelector(".time");
const resultElm = document.getElementById("result");

function loadQuestion() {
  clearInterval(timer);

  timeLeft = 15;
  updateTimer();
  timer = setInterval(countDown, 1000);

  const q = questions[currentQn];

  questionElm.textContent = `Q${currentQn + 1}. ${q.question}`;
  optionsElm.innerHTML = "";

  q.options.forEach((option, index) => {
    const optBtn = document.createElement("button");
    optBtn.classList.add("option-btn");
    optBtn.textContent = option;
    optBtn.addEventListener("click", () => selectAnswer(index));
    optionsElm.appendChild(optBtn);
  });

  nextBtn.style.display = "none";
}

function countDown() {
  timeLeft--;
  updateTimer();

  if (timeLeft === 0) {
    clearInterval(timer);
    selectAnswer(-1); // prevent free score
  }
}

function updateTimer() {
  timerElm.textContent = timeLeft;
}

function selectAnswer(index) {
  clearInterval(timer);

  const q = questions[currentQn];
  const buttons = document.querySelectorAll(".option-btn");

  buttons.forEach((btn) => (btn.disabled = true));

  if (index === q.correct) {
    buttons[index].classList.add("correct");
    score++;
  } else {
    if (index !== -1) {
      buttons[index].classList.add("wrong");
    }
    buttons[q.correct].classList.add("correct");
  }

  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentQn++;

  if (currentQn < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  clearInterval(timer);

  nextBtn.style.display = "none";

  const highScore = Number(localStorage.getItem("quizHighScore")) || 0;

  const isNew = score > highScore;

  if (isNew) {
    localStorage.setItem("quizHighScore", score);
  }

  resultElm.innerHTML = `
    <h2>Quiz Completed !!</h2>
    <p>You scored ${score} out of ${questions.length}</p>
    <p>Highest Score: ${Math.max(score, highScore)}</p>
    ${isNew ? "<p>🎉 New High Score!</p>" : ""}
    <button onclick="location.reload()">Restart Quiz</button>
  `;
}

loadQuestion();
