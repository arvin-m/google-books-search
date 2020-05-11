const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes
app.use(routes);
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/google_book", { useNewUrlParser: true, useUnifiedTopology: true });
// Start the server
app.listen(PORT, () =>
  console.log(`🌎  ==> Server now running on PORT ${PORT}!`)
);
