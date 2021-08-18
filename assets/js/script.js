const timer = document.getElementById("timer");
const sectionWelcome = document.getElementById("welcome");

const sectionQuestion = document.getElementById("question");
const questionTitle = document.getElementById("questionTitle");
const questionOptions = document.getElementById("questionOptions");
const startQuizButton = document.getElementById("startQuiz");

const questions = [
  {
    title: "Question #1 ?",
    options: ["string", "int", "alert", "number"],
    correctOption: "string",
  },
  {
    title: "Question #2 ?",
    options: ["string", "int", "alert", "number"],
    correctOption: "JS",
  },
  {
    title: "Question #3 ?",
    options: ["string", "int", "alert", "number"],
    correctOption: "string",
  },
  {
    title: "Question #4 ?",
    options: ["string", "int", "alert", "number"],
    correctOption: "string",
  },
];

function startQuiz() {
  sectionWelcome.classList.add("display-none");
  sectionQuestion.classList.remove("display-none");
  //TODO: Show First Question
  const question = questions[0];
  questionTitle.textContent = question.title;
  let n = 1;
  for (var option of question.options) {
    const liOption = document.createElement("li");
    liOption.addEventListener("click", checkAnswer);
    liOption.textContent = `${n}. ${option}`;
    questionOptions.appendChild(liOption);
    n++;
  }
}

function checkAnswer(event) {
  console.log(event.target.outerText);
}

startQuizButton.addEventListener("click", startQuiz);
