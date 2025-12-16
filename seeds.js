const mongoose = require("mongoose");
const Question = require("./models/science");

mongoose
  .connect("mongodb://127.0.0.1:27017/quiz-app")
  .then(() => {
    console.log("MONGO CONNECTION SUCCESSFULL");
  })
  .catch(() => {
    console.log("MONGO CONNECTION ERROR");
  });

const questions = [
  {
    question: "What is the capital of Australia?",
    option1: "Sydney",
    option2: "Melbourne",
    option3: "Canberra",
    option4: "Perth",
    correctAnswer: "Canberra",
  },
  {
    question: "Which planet is known as the Red Planet?",
    option1: "Venus",
    option2: "Mars",
    option3: "Jupiter",
    option4: "Saturn",
    correctAnswer: "Mars",
  },
  {
    question: "Who wrote 'Hamlet'?",
    option1: "Charles Dickens",
    option2: "William Shakespeare",
    option3: "Mark Twain",
    option4: "Oscar Wilde",
    correctAnswer: "William Shakespeare",
  },
  {
    question: "Which continent is the largest by area?",
    option1: "Africa",
    option2: "Asia",
    option3: "Europe",
    option4: "South America",
    correctAnswer: "Asia",
  },
  {
    question: "What is the currency of Japan?",
    option1: "Yen",
    option2: "Won",
    option3: "Yuan",
    option4: "Ringgit",
    correctAnswer: "Yen",
  },
  {
    question: "Which ocean is the deepest?",
    option1: "Atlantic",
    option2: "Indian",
    option3: "Arctic",
    option4: "Pacific",
    correctAnswer: "Pacific",
  },
  {
    question: "How many bones does an adult human have?",
    option1: "206",
    option2: "190",
    option3: "219",
    option4: "240",
    correctAnswer: "206",
  },
  {
    question: "Which country invented paper?",
    option1: "Egypt",
    option2: "China",
    option3: "Greece",
    option4: "India",
    correctAnswer: "China",
  },
  {
    question: "The Great Barrier Reef is located in:",
    option1: "Australia",
    option2: "Canada",
    option3: "South Africa",
    option4: "Brazil",
    correctAnswer: "Australia",
  },
  {
    question: "What is the fastest land animal?",
    option1: "Lion",
    option2: "Cheetah",
    option3: "Leopard",
    option4: "Tiger",
    correctAnswer: "Cheetah",
  },

  // Sports
  {
    question: "How many players are on a basketball team on the court?",
    option1: "6",
    option2: "4",
    option3: "5",
    option4: "7",
    correctAnswer: "5",
  },
  {
    question: "Who has won the most FIFA World Cups?",
    option1: "Germany",
    option2: "Argentina",
    option3: "Italy",
    option4: "Brazil",
    correctAnswer: "Brazil",
  },
  {
    question: "In tennis, what is a score of 40–40 called?",
    option1: "Tie",
    option2: "Deuce",
    option3: "Match point",
    option4: "Break",
    correctAnswer: "Deuce",
  },
  {
    question: "Which sport uses a shuttlecock?",
    option1: "Tennis",
    option2: "Squash",
    option3: "Badminton",
    option4: "Table Tennis",
    correctAnswer: "Badminton",
  },
  {
    question: "Where were the 2016 Summer Olympics held?",
    option1: "Tokyo",
    option2: "Rio de Janeiro",
    option3: "London",
    option4: "Beijing",
    correctAnswer: "Rio de Janeiro",
  },

  // Science & Tech
  {
    question: "What is the chemical symbol for Gold?",
    option1: "Ag",
    option2: "Au",
    option3: "Gd",
    option4: "Go",
    correctAnswer: "Au",
  },
  {
    question: "Which gas do plants absorb during photosynthesis?",
    option1: "Oxygen",
    option2: "Carbon monoxide",
    option3: "Carbon dioxide",
    option4: "Nitrogen",
    correctAnswer: "Carbon dioxide",
  },
  {
    question: "What does 'CPU' stand for?",
    option1: "Central Process Unit",
    option2: "Computer Power Unit",
    option3: "Control Processing Unit",
    option4: "Central Processing Unit",
    correctAnswer: "Central Processing Unit",
  },
  {
    question: "What is the approximate speed of light?",
    option1: "300 km/s",
    option2: "30,000 km/s",
    option3: "300,000 km/s",
    option4: "3,000,000 km/s",
    correctAnswer: "300,000 km/s",
  },
  {
    question: "Which company developed the Android operating system?",
    option1: "Apple",
    option2: "Google",
    option3: "Microsoft",
    option4: "IBM",
    correctAnswer: "Google",
  },
];

Question.insertMany(questions).then(() => {
  console.log("Inserted Data !");
});
