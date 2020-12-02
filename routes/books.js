const express = require("express");
const router = require("express").Router();
const db = require("../models");

// // Matches with "/api/books"
// router.route("/")
//   .get(booksController.findFavorites)
//   .post(booksController.addFavorite);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .delete(booksController.removeFavorite);

router.get("/", (req, res) => {
  db.Book.find({})
    .sort({ date: -1 })
    .then(books => res.json(books))
    .catch(err => res.status(422).json(err));
});

router.post("/", (req, res) => {
  db.Book.insert(req.body)
    .then(book => res.json(book));
});

router.delete("/", (req, res) => {
  db.Book.findById({ _id: req.params.id })
    .then(book => book.remove())
    .then(book => res.json(book));
});

module.exports = router;
