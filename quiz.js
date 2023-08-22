const questionElement = document.querySelector('.question');
const answersContainer = document.querySelector('.answers');
const scoreElement = document.querySelector('.score');

const questions = [
  {
    question: "What is the capital of Spain?",
    answers: ["Madrid", "Barcelona", "Seville", "Valencia"],
    correct: 0,
  },
  {
    question: "What is the capital of Italy?",
    answers: ["Venice", "Milan", "Rome", "Florence"],
    correct: 2,
  },
  {
    question: "What is the capital of Germany?",
    answers: ["Hamburg", "Munich", "Frankfurt", "Berlin"],
    correct: 3,
  },
  {
    question: "What is the capital of Japan?",
    answers: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
    correct: 0,
  },
  {
    question: "What is the capital of Australia?",
    answers: ["Canberra", "Sydney", "Melbourne", "Brisbane"],
    correct: 0,
  },
];

let numberOfQuestions = questions.length;
let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const questionData = questions[currentQuestionIndex];
  questionElement.textContent = questionData.question;

  answersContainer.innerHTML = '';
  questionData.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.classList.add('answer');
    button.textContent = answer;
    button.addEventListener('click', () => checkAnswer(index));
    answersContainer.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  const correctIndex = questions[currentQuestionIndex].correct;
  if (selectedIndex === correctIndex) {
    score++;
    console.log(score);
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < numberOfQuestions) {
    loadQuestion();
  } else {
    showScore();
  }
}


function showScore() {
  questionElement.textContent = 'Quiz Complete!';
  answersContainer.innerHTML = '';
  scoreElement.textContent = score;
}

loadQuestion();
