// // challenge.js - This code has 5 bugs! Find and fix them all.

// let passingScore = 50;

// function calculateGrade() {
//     let scoreInput = document.getElementById("scor").value;
//     let score = scoreInput;  // Bug hint: type issue

//     let grade;

//     if (score >= 90) {
//         grade = "A";
//     } else if (score >= 80) {
//         grade = "B";
//     } else if (score >= 70) {
//         grade = "C"
//     } else if (score >= 60) {
//         grade = "D";
//     } else {
//         grade = "F";
//     }

//     document.getElementById("grade").textContent = grade;

//     checkPassFail(score);
// }

// function checkPassFail(score) {
//     let status;

//     if (score > passingScore) {
//         status = "PASSED";
//     } else {
//         status = "FAILED";
//     }

//     document.getElementById("status").textcontent = status;
// }

// document.getElementById("calculateBtn").addEventListener("click", calculategGrade);

let passingScore = 50;

function calculateGrade() {
  let scoreInput = Number(document.getElementById("score").value);
  let score = scoreInput;

  let grade;

  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  document.getElementById("grade").textContent = grade;

  checkPassFail(score);
}

function checkPassFail(score) {
  let status = "";

  if (score > passingScore) {
    status = "PASSED";
    console.log("passed");
  } else {
    console.log("Failed");
    status = "FAILED";
  }
  console.log("Hello");
  document.getElementById("status").textContent = status;
}

document
  .getElementById("calculateBtn")
  .addEventListener("click", calculateGrade);
