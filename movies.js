const questionElement = document.querySelector('.question');
const answersContainer = document.querySelector('.answers');
const scoreElement = document.querySelector('.score');

const questions = [
    {
      question: "Which movie features a young wizard named Harry Potter?",
      answers: ["The Lord of the Rings", "Harry Potter and the Sorcerer's Stone", "Twilight", "Pirates of the Caribbean"],
      correct: 1,
    },
    {
      question: "Who played the role of Tony Stark/Iron Man in the Marvel Cinematic Universe?",
      answers: ["Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo", "Chris Evans"],
      correct: 1,
    },
    {
      question: "Which TV show is set in the fictional continents of Westeros and Essos?",
      answers: ["Stranger Things", "Breaking Bad", "Game of Thrones", "The Walking Dead"],
      correct: 2,
    },
    {
      question: "Which movie features a group of friends going on a road trip to find a missing teenager?",
      answers: ["Superbad", "The Hangover", "Dazed and Confused", "The Goonies"],
      correct: 3,
    },
    {
      question: "Who directed the film 'Inception'?",
      answers: ["Steven Spielberg", "Christopher Nolan", "James Cameron", "Quentin Tarantino"],
      correct: 1,
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
