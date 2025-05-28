/* next se refere ao próximo middleware a ser executado */
exports.paginaInicial = (req, res, next) => {
  res.render("index");
  return;
};

exports.trataPost = (req, res, next) => {
  return;
};
