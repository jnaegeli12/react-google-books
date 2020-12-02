const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  googleId: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  title: {
    type: String,
    required: true
  },
  authors: {
    type: Array
  },
  description: {
    type: String
  },
  link: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;