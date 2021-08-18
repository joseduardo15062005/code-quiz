const timer = document.getElementById("timer");
const sectionWelcome = document.getElementById("welcome");
const sectionQuestion = document.getElementById("question");
const startQuizButton = document.getElementById("startQuiz");

question = {
  title: "",
  option1: "",
  option2: "",
  option3: "",
  option4: "",
  correctOption: "",
};

function startQuiz() {
  sectionWelcome.classList.add("display-none");
  sectionQuestion.classList.remove("display-none");
}

startQuizButton.addEventListener("click", startQuiz);
