const JWT = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const generateToken = (userId) => {
  return JWT.sign(
    {
      id: userId,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "10d",
    }
  );
};
module.exports = generateToken;
