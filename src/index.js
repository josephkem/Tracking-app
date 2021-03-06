require("./models/user");
const express = require("express");
const mongoose = require("mongoose");
const auth = require("./routes/auth");
const requireAuth = require("./middlewares/requireAuth");

const app = express();
app.use(express.json());

app.use(auth);

const mongoUri =
  "mongodb+srv://alex91:92631043@devcon.vu3ve.mongodb.net/Native?retryWrites=true&w=majority";

mongoose.connect(mongoUri);

mongoose.connection.on("connected", () => {
  console.log("Database connected");
});

mongoose.connection.on("error", () => {
  console.log("Error connecting to database");
});

app.get("/", requireAuth, (req, res) => {
  res.send(`Your email is ${req.user.email}`);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
