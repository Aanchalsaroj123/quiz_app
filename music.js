const questionElement = document.querySelector('.question');
const answersContainer = document.querySelector('.answers');
const scoreElement = document.querySelector('.score');
const questions = [
    {
      question: "Which band is known for hits like 'Bohemian Rhapsody' and 'We Will Rock You'?",
      answers: ["The Beatles", "Led Zeppelin", "Queen", "The Rolling Stones"],
      correct: 2,
    },
    {
      question: "Who is often referred to as the 'King of Pop'?",
      answers: ["Elvis Presley", "Michael Jackson", "Prince", "David Bowie"],
      correct: 1,
    },
    {
      question: "Which artist released the album 'Thriller', one of the best-selling albums of all time?",
      answers: ["Madonna", "Whitney Houston", "Adele", "Michael Jackson"],
      correct: 3,
    },
    {
      question: "Which genre of music originated in Jamaica and features heavy basslines and offbeat rhythms?",
      answers: ["Country", "Hip-hop", "Reggae", "Rock"],
      correct: 2,
    },
    {
      question: "Who wrote the song 'Imagine' and is known for his activism and peace efforts?",
      answers: ["Elton John", "Bob Dylan", "John Lennon", "Paul McCartney"],
      correct: 2,
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
