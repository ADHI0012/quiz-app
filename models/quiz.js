const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  title: String,
  qns: Number,
  type: String,
  description: {
    type: String,
    // required: true,
  },
  questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  difficulty: {
    type: String,
    // required: true,
  },
});

module.exports = mongoose.model("Quiz", quizSchema);
