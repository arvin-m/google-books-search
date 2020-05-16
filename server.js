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
mongoose.connect(process.env.MONGODB_URI || "mongodb://user:123456a@ds027155.mlab.com:27155/heroku_2khvzx17", { useNewUrlParser: true, useUnifiedTopology: true });
// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
