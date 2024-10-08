//Importando express para criação e administração de rotas
//Criando variável 'router' para poder usar a função 'express.Router();' que vai habilitar a criação de rotas
//Rotas são utilizadas para receber as informações de nosso Controller(onde fica o crud ou regra de negóçios) e mandar para nosso bd
////Importando Controller para criação e administração de rotas
const express = require('express');
const router = express.Router();
const PresencasController = require('../controllers/PresencasController');
//Comando utilizado para criar rotas (router.verboDoCrud) depois dentro do parentese colocar com barra para representar a rota
//Depois referencie o Controller.VerboDoCrud
//Quando for representar a rota com / se no crud for usado id referencie a rota com '/:id'
router.get('/', PresencasController.getAllPresencas);
router.post('/', PresencasController.createPresenca);
router.put('/:id', PresencasController.updatePresenca);
router.delete('/:id', PresencasController.deletePresenca);
//Exportando rotas para app.js que controla nossas dependencias e onde fica as configurações delas
module.exports = router;
