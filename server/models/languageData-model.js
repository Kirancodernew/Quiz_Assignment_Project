const mongoose = require("mongoose");
//question schema
const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
  marks: {
    type: Number,
    required: true,
    default: 1, // change the default marks if needed
  },

});
//wrapping question schema
const languageSchema = new mongoose.Schema({
  language: {
    type: String,
    required: true,
  },
  easy: {
    type: [questionSchema], // Embed the questionSchema for easy questions
  },
  medium: {
    type: [questionSchema], // Embed the questionSchema for medium questions
  },
  hard: {
    type: [questionSchema], // Embed the questionSchema for hard questions
  },
});

const Language = mongoose.model("Language", languageSchema);
module.exports = Language;
