const Login = require("../models/LoginModel");

exports.index = (req, res) => {
  if (req.session.user) return res.render("login-logado");
  res.render("login");
};

exports.register = async (req, res) => {
  try {
    const login = new Login(req.body);
    await login.register();

    if (login.errors.length > 0) {
      /* Informando os erros de login ao usuário */
      req.flash("Errors", login.errors);
      /* 
    Salvando a sessão e passando uma função de callback.
    Ou seja, a sessão é salva com os dados e o erro e 
    depois redireciona de volta para a página de login.
    */
      req.session.save(function () {
        return res.redirect("back");
      });
      return;
    }

    req.flash("success", "Seu usuário foi criado com sucesso.");
    req.session.save(function () {
      return res.redirect("back");
    });
  } catch (error) {
    console.error(error);
    return res.render("404");
  }
};

exports.login = async (req, res) => {
  try {
    const login = new Login(req.body);
    await login.login();

    if (login.errors.length > 0) {
      req.flash("Errors", login.errors);

      req.session.save(function () {
        return res.redirect("back");
      });
      return;
    }

    req.flash("success", "Você entrou no sistema.");
    req.session.user = login.user;
    req.session.save(function () {
      return res.redirect("back");
    });
  } catch (error) {
    console.error(error);
    return res.render("404");
  }
};

exports.logout = () => {
  req.session.destroy();
  res.redirect("/");
};
