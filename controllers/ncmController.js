const ncmService = require('../services/ncmService');

exports.getNCM = async (req, res) => {
  const { produto } = req.body;
  if (!produto) {
    return res.status(400).json({ error: 'O produto é obrigatório.' });
  }
  try {
    const ncm = await ncmService.findNCM(produto);
    res.json(ncm);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Erro ao processar a solicitação.' });
  }
};
