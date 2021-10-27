const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = mongoose.model("User");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  //auth ===

  if (!authorization) {
    return res.status(401).send({ error: "Unauthorized!" });
  }

  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, "secret_Key", async (err, payload) => {
    if (err) {
      return res.status(401).send({ error: "Unauthorized!" });
    }

    const { userId } = payload;

    const user = await User.findById(userId);
    req.user = user;
    next();
  });
};
