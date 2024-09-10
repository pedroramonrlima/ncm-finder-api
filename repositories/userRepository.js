const users = [
    { id: 1, username: 'usuario1', password: require('bcryptjs').hashSync('senha123', 8) }
  ];
  
  exports.findByUsername = (username) => {
    return users.find(user => user.username === username);
  };