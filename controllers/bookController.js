const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findFavorites: function(req, res) {
    db.Book
      .find({})
      .sort({ date: -1 })
      .then(books => res.json(books))
      .catch(err => res.status(422).json(err));
  },
  addFavorite: function(req, res) {
    console.log(req.body);
    db.Book
      .insert(req.body)
      .then(dbModel => res.json(dbModel));
  },
  removeFavorite: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel));
  }
};
