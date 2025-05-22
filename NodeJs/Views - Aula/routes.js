const express = require("express");

/* Chama o método router */
const route = express.Router();

/* Importando os controllers */
const homeController = require("./src/controllers/homeController");
const contatoController = require("./src/controllers/contatoController");

/* 
O trabalho desse arquivo é apenas realizar o roteamento.
Quem irá executar funções é o controller.
*/

/* Rotas da Home */
route.get("/", homeController.paginaInicial);
route.post("/", homeController.trataPost);

/* Rotas de Contato */
route.get("/contato", contatoController.paginaInicial);

/* Exportando o módulo route */
module.exports = route;
