const HomeModel = require("../models/HomeModel");

HomeModel.create({
  titulo: "Um título de testes",
  descricao: "Uma descrição de testes.",
})
  .then((dados) => console.log(dados))
  .catch((e) => console.error(e));

/* Podemos manipular a sessão */
exports.paginaInicial = (req, res, next) => {
  req.session.usuario = { nome: "Luiz", logado: true };
  res.render("index", {
    titulo: "Título da Página",
  });
  req.flash("info", "Olá Mundo!");
  res.render("index");
  return;
};

exports.trataPost = (req, res, next) => {
  return;
};
