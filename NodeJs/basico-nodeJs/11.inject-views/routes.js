const express = require("express");
const homeController = require("./src/controllers/homeController");
const contatoController = require("./src/controllers/contatoController");

const route = express.Router();

route.get("/", homeController.paginaInicial);
route.post("/", homeController.trataPost);

route.get("/contato", contatoController.paginaInicial);

module.exports = route;
