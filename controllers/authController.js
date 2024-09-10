const authService = require('../services/authService');

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const token = await authService.login(username, password);
    if (!token) return res.status(401).json({ error: 'Credenciais inválidas' });
    res.json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Erro no servidor'});
  }
};
