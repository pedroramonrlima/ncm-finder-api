const jwt = require('../utils/jwt');

exports.verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).json({ error: 'Nenhum token fornecido.' });
  }
  jwt.verifyToken(token.split(' ')[1], (err, decoded) => {
    if (err) return res.status(401).json({ error: 'Token inválido.' });
    req.userId = decoded.id;
    next();
  });
};
