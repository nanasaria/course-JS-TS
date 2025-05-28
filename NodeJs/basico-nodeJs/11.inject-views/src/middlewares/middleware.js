module.exports = (req, res, next) => {
  /*
  res.locals é um objeto no Express usado para armazenar
  dados que você quer disponibilizar para o restante do
  ciclo de resposta. Ou seja, até a resposta ser 
  enviada.
  */
  res.locals.umaVariavelLocal = "Este é o valor da variável local.";
  next();
};
