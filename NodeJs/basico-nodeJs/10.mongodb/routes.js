const express = require("express");
const homeController = require("./src/controllers/homeController");
const contatoController = require("./src/controllers/contatoController");

const route = express.Router();

/* 
Middleware 
next se refere ao próximo middleware a ser executado 

function meuMiddleware(req, res, next) {
  console.log("Passei no seu middleware.");

  / É o next que está chamando o controller
  next();
}
 
O middleware vai antes do controller. 
No "meio do caminho".

Nesse caso, executa o middleware e o next de meuMiddleware
executa e via next() passa pro homeController depois.

Você pode passar para outro middleware mesmo depois de 
responder.

*/
route.get("/", homeController.paginaInicial);
route.post("/", homeController.trataPost);

route.get("/contato", contatoController.paginaInicial);

module.exports = route;
