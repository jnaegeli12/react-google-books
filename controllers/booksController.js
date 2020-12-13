const db = require("../models");

// Defining methods for the booksController
const booksController = {
  findFavorites: function(req, res) {
    db.Book.find({})
      .sort({ date: -1 })
      .then(books => res.json(books))
      .catch(err => res.status(422).json(err));
  },
  addFavorite: function(req, res) {
    db.Book.create(req.body);
      // .then(book => res.json(book));
  },
  removeFavorite: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(book => book.remove())
      .then(book => res.json(book));
  }
};

module.exports = booksController;