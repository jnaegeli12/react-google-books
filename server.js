const express = require("express");
const app = express();
const routes = require('./routes');
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;

require('dotenv').config()

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });

app.use("/api", routes);

// If no API routes are hit, send the React app
app.use('*', function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
  
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
