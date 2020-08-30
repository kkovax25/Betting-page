const jwt = require('jsonwebtoken');
require("dotenv").config();
const secret = process.env.JWT_SECRET

module.exports = function (req, res, next) {
  // Get the token from the header
  const token = req.header('x-auth-token');

  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, secret);

    req.user = decoded.user
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Tokenis not valid' })
  }

}