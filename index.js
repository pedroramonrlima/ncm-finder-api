require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const ncmRoutes = require('./routes/ncmRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Configuração básica do CORS para permitir todas as origens
app.use(cors());

// Middleware para processar JSON
app.use(express.json());



// Rotas
app.use('/auth', authRoutes);
app.use('/api', ncmRoutes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
