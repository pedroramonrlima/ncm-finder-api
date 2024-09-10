const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.generateToken = (user) => {
  return jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

exports.verifyToken = (token, callback) => {
  jwt.verify(token, process.env.JWT_SECRET, callback);
};
