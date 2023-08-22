const questionElement = document.querySelector('.question');
const answersContainer = document.querySelector('.answers');
const scoreElement = document.querySelector('.score');

const questions = [
    {
      question: "Which war was fought between the North and the South in the United States?",
      answers: ["Revolutionary War", "Civil War", "World War I", "World War II"],
      correct: 1,
    },
    {
      question: "Who is known for discovering the theory of evolution?",
      answers: ["Isaac Newton", "Galileo Galilei", "Charles Darwin", "Albert Einstein"],
      correct: 2,
    },
    {
      question: "Which ancient civilization built the pyramids in Egypt?",
      answers: ["Mayans", "Aztecs", "Incas", "Egyptians"],
      correct: 3,
    },
    {
      question: "Which city was the capital of the Roman Empire?",
      answers: ["Athens", "Rome", "Alexandria", "Constantinople"],
      correct: 1,
    },
    {
      question: "What event marked the beginning of World War I?",
      answers: ["Assassination of Archduke Franz Ferdinand", "Bombing of Hiroshima", "Signing of the Treaty of Versailles", "Battle of Stalingrad"],
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
