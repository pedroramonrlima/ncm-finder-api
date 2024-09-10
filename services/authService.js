const bcrypt = require('bcryptjs');
const userRepository = require('../repositories/userRepository');
const jwt = require('../utils/jwt');

exports.login = async (username, password) => {
  const user = userRepository.findByUsername(username);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return null;
  }
  return jwt.generateToken(user);
};
