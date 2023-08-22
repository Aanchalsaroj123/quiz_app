const questionElement = document.querySelector('.question');
const answersContainer = document.querySelector('.answers');
const scoreElement = document.querySelector('.score');

const questions = [
    {
      question: "Which company developed the first commercially successful personal computer?",
      answers: ["IBM", "Apple", "Microsoft", "Intel"],
      correct: 1,
    },
    {
      question: "What does 'HTTP' stand for in web technology?",
      answers: ["HyperText Transfer Protocol", "High-Tech Text Processing", "Hyper Transfer Text Protocol", "Home Tool Testing Protocol"],
      correct: 0,
    },
    {
      question: "Which programming language is often used for creating web pages and web applications?",
      answers: ["Java", "Python", "C++", "HTML"],
      correct: 3,
    },
    {
      question: "What does 'AI' stand for in the field of technology?",
      answers: ["Artificial Imagination", "Automated Intelligence", "Advanced Interactions", "Artificial Intelligence"],
      correct: 3,
    },
    {
      question: "Which technology is used to store data and programs on the internet, allowing them to be accessed from anywhere?",
      answers: ["Cloud computing", "Virtual reality", "Blockchain", "Quantum computing"],
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
