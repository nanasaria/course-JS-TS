const HomeModel = require("../models/HomeModel")

HomeModel.create({
  titulo: "Um título de testes",
  descricao: "Uma descrição de testes."
}).then(dados => console.log(dados)).catch(e => console.error(e))

exports.paginaInicial = (req, res, next) => {
  res.render("index");
  return;
};

exports.trataPost = (req, res, next) => {
  return;
};
