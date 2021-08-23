const timer = document.getElementById("timer");

const sectionWelcome = document.getElementById("welcome");
const sectionQuestion = document.getElementById("question");
const sectionRegisterScore = document.getElementById("registerScore");

const questionTitle = document.getElementById("questionTitle");
const questionOptions = document.getElementById("questionOptions");
const startQuizButton = document.getElementById("startQuiz");
const questionAnswerText = document.getElementById("questionAnswerText");
const finalScoreEl = document.getElementById("finalScore");
const btnSaveScore = document.getElementById("btnSaveScore");
const initialsEl = document.getElementById("initials");

let timeLeft = 100;
let questionNumber = 0;
let intervalId = 0;
let score = 0;

//Create a timer Count down
function countdown() {
  timer.textContent = timeLeft;
  if (timeLeft > 0) {
    timeLeft--;
  }
  if (timeLeft === 0) {
    clearInterval(intervalId);
  }
}

//Start the quiz showing the first question
function startQuiz() {
  intervalId = setInterval(countdown, 1000);
  sectionWelcome.classList.add("display-none");
  sectionQuestion.classList.remove("display-none");

  //Show Question
  showQuestion();
}
function showQuestion() {
  //Validate if the questionNumber is the Last Question
  if (questionNumber >= questions.length) {
    //Show the Section add Initials ang save  high Scores
    endQuiz();
  } else {
    question = questions[questionNumber];
    //Remove child from  ul or content
    questionOptions.innerHTML = "";

    let n = 1;
    questionTitle.textContent = question.title;
    //Iterate for each options of the question and create the option.
    for (var option of question.options) {
      const liOption = document.createElement("li");
      liOption.textContent = `${n}. ${option}`;
      liOption.setAttribute("data-id", question.id);
      liOption.setAttribute("data-option", option);
      questionOptions.appendChild(liOption);
      n++;
    }
  }
}

function validateQuestion(questionId, answer) {
  //Get Question from the Array
  question = questions.find((q) => q.id === questionId);
  if (question) {
    if (question.answer == answer) {
      return "Correct";
    }
    //Wrong Answer  Subtracted 5s from the timer
    timeLeft -= 10;
    return "Wrong";
  }
}

function endQuiz() {
  //Stop timer and asign value to High Score variable
  clearInterval(intervalId);
  score = timer.textContent;
  finalScoreEl.textContent = score;
  //hide section question and show section register-score
  sectionRegisterScore.classList.remove("display-none");
  sectionQuestion.classList.add("display-none");
}

function saveScore(event) {
  event.preventDefault();
  const initials = initialsEl.value.toUpperCase();

  const scoreStorage = {
    initials,
    score,
  };
  console.log(scoreStorage);

  //get actual score from the locaStorage.
  let highScores = localStorage.getItem("highScores");
  //validate if is null- if null add the high Score to the localStorage
  if (!highScores) {
    highScores = [];
    highScores.push(scoreStorage);
    localStorage.setItem("highScores", JSON.stringify(highScores));
  } else {
    //TODO:if localStorage have element , validate number of items
  }
}

function questionClickHandler(event) {
  const questionId = Number(event.target.getAttribute("data-id"));
  const answer = event.target.getAttribute("data-option");
  //Validate Question is Wrong or Correct
  questionAnswerText.textContent = validateQuestion(questionId, answer);
  //Show Next Question
  questionNumber++;
  showQuestion();
}

startQuizButton.addEventListener("click", startQuiz);

btnSaveScore.addEventListener("click", saveScore);

sectionQuestion.addEventListener("click", questionClickHandler);
