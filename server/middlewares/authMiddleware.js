const asyncHandler = require("express-async-handler");
const user = require("../model/user");
const jwt = require("jsonwebtoken");

const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      const User = await user.findById(decoded.id);
      req.user = user;
      next();
    } catch (error) {
      res.send(401);
      throw new Error("Not authorized or Invalid Token");
    }
  }
});
module.exports = authMiddleware;
