module.exports = (req, res, next) => {
  console.log("Oi, sou um middleware global :)");

  if (req.body.nome) {
    console.log(`Vi que você postou ${req.body.nome}`);
  }
  next();
};
