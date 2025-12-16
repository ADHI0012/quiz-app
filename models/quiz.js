const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  title: String,
  qns: Number,
  type: String,
  description: String,
  questions: [
    {
      question: String,
      option1: String,
      option2: String,
      option3: String,
      option4: String,
      correctAnswer: {
        option: String,
        answer: String,
      },
    },
  ],
});

module.exports = mongoose.model("Quiz", quizSchema);
