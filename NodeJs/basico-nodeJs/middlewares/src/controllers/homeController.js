/* next se refere ao próximo middleware a ser executado */
exports.paginaInicial = (req, res, next) => {
  res.render("index");
};

exports.trataPost = (req, res, next) => {
  res.send(`Olá, ${req.body.nome} ${req.body.sobrenome}`);
};
