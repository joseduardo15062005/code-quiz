const timer = document.getElementById("timer");
const sectionWelcome = document.getElementById("welcome");

const sectionQuestion = document.getElementById("question");
const questionTitle = document.getElementById("questionTitle");
const questionOptions = document.getElementById("questionOptions");
const startQuizButton = document.getElementById("startQuiz");
let timeLeft = 20;
timer.textContent = timeLeft;

//Create a timer Count down
function initializeTimer() {
  var timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      timeLeft--;
    }
    if (timeLeft === 0) {
      clearInterval(timerCountdown);
    }
    timer.textContent = timeLeft;
  }, 1000);
}

//Start the quiz showing the first question
function startQuiz() {
  initializeTimer();
  sectionWelcome.classList.add("display-none");
  sectionQuestion.classList.remove("display-none");

  //Show First Question
  showQuestion(questions[0]);
}

function checkAnswer(event) {
  console.log(event.target.outerText);
  //TODO: if the answer is correct  Show the next question
  showQuestion(questions[1]);
}

function showQuestion(question) {
  //TODO:Remove child ul
  questionOptions.innerHTML = "";

  let n = 1;
  questionTitle.textContent = question.title;

  for (var option of question.options) {
    const liOption = document.createElement("li");
    liOption.addEventListener("click", checkAnswer);
    liOption.textContent = `${n}. ${option}`;
    questionOptions.appendChild(liOption);
    n++;
  }
}

startQuizButton.addEventListener("click", startQuiz);
