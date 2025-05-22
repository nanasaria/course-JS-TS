const express = require("express");
const homeController = require("./src/controllers/homeController");
const contatoController = require("./src/controllers/contatoController");

const route = express.Router();

/* 
Middleware 
next se refere ao próximo middleware a ser executado 
*/
function meuMiddleware(req, res, next) {
  console.log("Passei no seu middleware.");
}

/* 
O middleware vai antes do controller. 
No "meio do caminho".
*/
route.get("/", meuMiddleware, homeController.paginaInicial);
route.post("/", homeController.trataPost);

route.get("/contato", contatoController.paginaInicial);

module.exports = route;
