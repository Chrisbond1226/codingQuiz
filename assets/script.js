var timerEl = document.querySelector("#countdown");
let currentQuestionIndex = 0;
var startSection = document.querySelector("#startSection");
var startQuiz = document.querySelector("#quiz");
var startBtn = document.querySelector("#startButton");
var questionTitle = document.querySelector("#questionTitle");
var choicesDiv = document.querySelector("#choices");
var timeLeft = 60;

const questionsArray = [
  {
    question: "commonly used data types DO NOT include:",
    answers: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts",
  },
  {
    question: "The condition in an if/else statement is enclosed with ____.",
    answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    correctAnswer: "parenthesis",
  },
  {
    question: "Arrays in JavaScript can be used to store ___.",
    answers: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    correctAnswer: "all of the above",
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    answers: ["commas", "curly brackets", "quotes", "parenthesis"],
    correctAnswer: "curly brackets",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    correctAnswer: "console.log",
  },
];

function timer() {
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else {
      timerEl.textContent = "";
      clearInterval(timeInterval);
    }
  }, 1000);
}

function getQuestion() {
  let currentQuestion = questionsArray[currentQuestionIndex];
  console.log(currentQuestion);
  questionTitle.textContent = currentQuestion.question;
  document.querySelector("#choices").textContent = "";
  for (let i = 0; i < currentQuestion.answers.length; i++) {
    var choice = currentQuestion.answers[i];

    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("value", choice);
    choiceBtn.setAttribute("id", "choiceBtn");
    choiceBtn.textContent = choice;

    choicesDiv.appendChild(choiceBtn);
  }
}

function quizStart() {
  console.log("quiz started");
  startSection.setAttribute("class", "hide");
  startQuiz.removeAttribute("class");
  getQuestion();
  timer();
}

function checkAnswer(event) {
  console.log(event);
  let btn = event.target.value;
  console.log(btn);
  // check if the value of the button that was clicked is equal to the value at currentQuestionObject.correctAnswer

  let currentQuestion = questionsArray[currentQuestionIndex];
  if (event.target.value != currentQuestion.correctAnswer) {
    timeLeft - 10;
  }

  currentQuestionIndex++;
  getQuestion();

  console.log(event.target.value);
}
startBtn.onclick = quizStart;
choicesDiv.onclick = checkAnswer;
