// 1. IMPORTAÇÕES (Apenas uma de cada!)
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// 2. CONFIGURAÇÃO DO APP
const app = express();

// 3. MIDDLEWARES
app.use(cors());
app.use(express.json());

// 4. CONEXÃO COM O MONGODB (Usando o seu link do Atlas no .env)
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Conectado ao MongoDB Atlas com sucesso!'))
    .catch((err) => console.error('❌ Erro ao conectar ao MongoDB:', err));

// 5. ROTAS (Exemplos das rotas que criamos)
// Importe aqui seus arquivos de rotas
const authRoutes = require('./src/routes/authRoutes');
const bookRoutes = require('./src/routes/bookRoutes');

// Uso das rotas
app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);

// Rota de teste inicial (para ver se o servidor responde no navegador)
app.get('/', (req, res) => {
    res.send('🚀 API da Livraria Rodando!');
});

// 6. INICIALIZAÇÃO DO SERVIDOR
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
    console.log(`📍 Teste o GET no navegador: http://localhost:${PORT}`);
});