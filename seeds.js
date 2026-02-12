const mongoose = require("mongoose");
const Quiz = require("./models/quiz");
const Question = require("./models/question");

mongoose
  .connect("mongodb://127.0.0.1:27017/quiz-app")
  .then(() => {
    console.log("MONGO CONNECTION SUCCESSFULL");
  })
  .catch(() => {
    console.log("MONGO CONNECTION ERROR");
  });

const quizzes = [
  {
    title: "Web Basics Quiz",
    qns: 3,
    type: "Web Development",
    description: "HTML, CSS, and JavaScript fundamentals",
    difficulty: "Easy",
    questions: [
      {
        question: "What does HTML stand for?",
        option1: "HyperText Markup Language",
        option2: "HighText Machine Language",
        option3: "HyperTransfer Markup Language",
        option4: "Home Tool Markup Language",
        correctAnswer: {
          option: "option1",
          answer: "HyperText Markup Language",
        },
      },
      {
        question: "Which tag is used for a line break in HTML?",
        option1: "<lb>",
        option2: "<break>",
        option3: "<br>",
        option4: "<line>",
        correctAnswer: {
          option: "option3",
          answer: "<br>",
        },
      },
      {
        question: "Which keyword declares a constant in JavaScript?",
        option1: "var",
        option2: "let",
        option3: "const",
        option4: "static",
        correctAnswer: {
          option: "option3",
          answer: "const",
        },
      },
    ],
  },

  {
    title: "Computer Science Basics",
    qns: 3,
    type: "CS Fundamentals",
    description: "Core CS concepts",
    difficulty: "Easy",
    questions: [
      {
        question: "Which data structure follows FIFO?",
        option1: "Stack",
        option2: "Queue",
        option3: "Tree",
        option4: "Graph",
        correctAnswer: {
          option: "option2",
          answer: "Queue",
        },
      },
      {
        question: "Which data structure follows LIFO?",
        option1: "Queue",
        option2: "Heap",
        option3: "Stack",
        option4: "Graph",
        correctAnswer: {
          option: "option3",
          answer: "Stack",
        },
      },
      {
        question: "Binary number system uses base?",
        option1: "2",
        option2: "8",
        option3: "10",
        option4: "16",
        correctAnswer: {
          option: "option1",
          answer: "2",
        },
      },
    ],
  },

  {
    title: "Networking Basics",
    qns: 3,
    type: "Computer Networks",
    description: "Basic networking knowledge",
    difficulty: "Easy",
    questions: [
      {
        question: "What does IP stand for?",
        option1: "Internet Program",
        option2: "Internet Protocol",
        option3: "Internal Process",
        option4: "Interface Program",
        correctAnswer: {
          option: "option2",
          answer: "Internet Protocol",
        },
      },
      {
        question: "Which device routes data between networks?",
        option1: "Switch",
        option2: "Hub",
        option3: "Router",
        option4: "Repeater",
        correctAnswer: {
          option: "option3",
          answer: "Router",
        },
      },
      {
        question: "Which protocol is used to transfer web pages?",
        option1: "FTP",
        option2: "SMTP",
        option3: "HTTP",
        option4: "SNMP",
        correctAnswer: {
          option: "option3",
          answer: "HTTP",
        },
      },
    ],
  },
];
const insertQuizzes = async () => {
  const questionIds = [];
  for (let quiz of quizzes) {
    for (let question of quiz.questions) {
      const q = await Question.create(question);
      questionIds.push(q._id);
    }

    await Quiz.create({
      title: quiz.title,
      type: quiz.type,
      description: quiz.description,
      difficulty: quiz.difficulty,
      questions: questionIds,
    });
  }
};

insertQuizzes()
  .then(() => {
    console.log("INSERTED DATA !");
  })
  .catch((err) => console.log(err));
