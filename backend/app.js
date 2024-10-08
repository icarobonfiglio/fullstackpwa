////Importando express configuração
//Importando mongoose(bd) para configuração
//Importando cors para configuração
//Importando bodyparser para configuração
//Puxando configurações do dotenv
//Criando variável 'app' para usar o express para configuração das rotas nas outras dependencias
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));  // Aumentando o limite de tamanho
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));  // Para dados enviados via URL encoded
app.use(express.static('public'));

// Conexão com o MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));
// Rotas
const PresencasRoute = require('./routes/presencas');
app.use('/api/presencas', PresencasRoute);

// Porta
//Process.env.port(especificamente para acessar variáveis de ambiente)
//.listen(escuta a variável)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
