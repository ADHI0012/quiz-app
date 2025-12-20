const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Question = require("./models/question");
const Quiz = require("./models/quiz");
const ejsMate = require("ejs-mate");

mongoose
  .connect("mongodb://127.0.0.1:27017/quiz-app")
  .then(() => {
    console.log("MONGO CONNECTION SUCCESSFULL");
  })
  .catch(() => {
    console.log("MONGO CONNECTION ERROR");
  });
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");
app.engine("ejs", ejsMate);

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/quizzes", async (req, res) => {
  const quizzes = await Quiz.find({});
  res.render("quizzes", { quizzes });
});

app.post("/question", async (req, res) => {
  const title = req.query.title;
  const { question, option1, option2, option3, option4, correctOption } =
    req.body;

  const reqQuiz = await Quiz.findOne({ title });
  const data = {
    question,
    option1,
    option2,
    option3,
    option4,
    correctAnswer: {
      option: correctOption,
      answer: req.body[`${correctOption}`],
    },
  };
  const q = new Question(data);
  await q.save();
  reqQuiz.questions.push(q._id);
  await reqQuiz.save();
});

app.get("/create", (req, res) => {
  res.render("create");
});

app.post("/create", async (req, res) => {
  const { type, qns, title, description } = req.body;
  const newQuiz = new Quiz({ title, qns, type, description });
  await newQuiz.save();
  res.render("page", { qns, title, type });
});

app.get("/quiz/:id", async (req, res) => {
  const { id } = req.params;
  const reqQuiz = await Quiz.findById(id).populate("questions");
  if (!reqQuiz) {
    res.send("No such quiz !!");
    return;
  }
  res.render("quiz", { quiz: reqQuiz });
});

app.post("/quiz/:id", async (req, res) => {
  const { id } = req.params;
  const resultObject = {};
  const rightOrWrongObject = {};
  const questions = {};
  const quiz = await Quiz.findById(id).populate("questions");
  let i = 1,
    score = 0;
  for (let q of quiz.questions) {
    questions[`question-${i}`] = q.question;
    resultObject[`question-${i}`] = q.correctAnswer.answer;
    i++;
  }

  for (let q in resultObject) {
    if (resultObject[q] == req.body[q]) {
      rightOrWrongObject[q] = 1;
      score++;
    } else {
      rightOrWrongObject[q] = 0;
    }
  }
  res.render("result", {
    score,
    rightOrWrongObject,
    questions,
    userAnswers: req.body,
    resultObject,
  });
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000!");
});
