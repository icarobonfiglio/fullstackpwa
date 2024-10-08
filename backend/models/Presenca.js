//Importando o Banco de Dados para Fazer os Esquemas 
const mongoose = require('mongoose');
//Os atributos utilizados do sistema estarão atribuidos dentro de chaves
//Tudo que irei exibir na tela do meu sistema estará configurado com o tipo(type) e se ela é obrigatório(required: true or false)
const PresencaSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    resumo_aula: { type: String, required: true },
    mensagem_do_aluno: { type: String, required: true },
    location: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
    },
    photo: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});
//Exportando o Esquema para utilizar nas outras partes do Meu Sistema como no meu Controlador que irá fazer operações com o esquema
module.exports = mongoose.model('Presenca', PresencaSchema);
