import User from "../models/User";
import jwt from "jsonwebtoken";

class TokenController {
  async store(req, res) {
    const { email = "", password = "" } = req.body;

    if (!email || !password) {
      res.status(401).json({
        errors: ["Credenciais Inválidas"],
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      res.status(401).json({
        errors: ["Usuário não existe"],
      });
    }

    if (!(await user.passwordIsValid(password))) {
      res.status(401).json({
        errors: ["Senha Inválida"],
      });
    }

    const { id } = user;

    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token, user: { nome: user.nome, id, email } });
  }
}

export default new TokenController();
