const express = require("express");
const mongoose = mongoose("mongoose");
const User = mongoose.model("User");

const router = express.Router();

router.post("/signup", (req, res) => {
  console.log(req.body);
  res.send("You made a post request");
});

module.exports = router;
