const timer = document.getElementById("timer");
const sectionWelcome = document.getElementById("welcome");

const sectionQuestion = document.getElementById("question");
const questionTitle = document.getElementById("questionTitle");
const questionOptions = document.getElementById("questionOptions");
const startQuizButton = document.getElementById("startQuiz");

//TODO: Create a timer Count down
function InitializeTimer(timeLeft) {
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

function startQuiz() {
  sectionWelcome.classList.add("display-none");
  sectionQuestion.classList.remove("display-none");
  InitializeTimer(20);

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
