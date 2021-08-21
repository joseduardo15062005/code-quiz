const timer = document.getElementById("timer");
const sectionWelcome = document.getElementById("welcome");

const sectionQuestion = document.getElementById("question");
const questionTitle = document.getElementById("questionTitle");
const questionOptions = document.getElementById("questionOptions");
const startQuizButton = document.getElementById("startQuiz");
const questionAnswerText = document.getElementById("questionAnswerText");
let timeLeft = 100;
let questionNumber = 0;
let intervalId = 0;

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
    //TODO: Show the Section add Initials ang save  high Scores
    clearInterval(intervalId);
    const highScore = timer.textContent;
    console.log(highScore);
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

startQuizButton.addEventListener("click", startQuiz);

sectionQuestion.addEventListener("click", function (event) {
  const questionId = Number(event.target.getAttribute("data-id"));
  const answer = event.target.getAttribute("data-option");
  //Validate Question is Wrong or Correct
  questionAnswerText.textContent = validateQuestion(questionId, answer);
  //Show Next Question
  questionNumber++;
  showQuestion();
});
