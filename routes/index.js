const express = require("express");
const router = express.Router();
const bookRoutes = require("./books");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;