const express = require("express");
const router = express.Router();
const booksController = require("../controllers/booksController");

router.route("/")
  .get(booksController.findFavorites)
  .post(booksController.addFavorite);

// Matches with "/api/books/:id"
router.route("/:id")
//   .get(bookController.findById)
//   .put(bookController.update)
  .delete(booksController.removeFavorite);

module.exports = router;