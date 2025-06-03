import User from "../models/User";

class UserController {
  // Store
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  // Show
  async show(req, res) {
    try {
      const { id } = req.params.id;
      const user = await User.findByPk(id);
      const response = res.json(user);
      if (response === null) res.status(404).json(null);
      return response;
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  // Update
  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(404).json({
          errors: ["Id não enviado."],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(404).json({
          errors: ["Usuário não existe"],
        });
      }

      const novosDados = await user.update(req.body);

      return res.json(novosDados);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(404).json({
          errors: ["Id não enviado."],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(404).json({
          errors: ["Usuário não existe"],
        });
      }

      await user.destroy();
      return res.json(user);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();

/*
Um controller deve ter 5 métodos:

index -> Lista todos os usuários
store/create -> Cria um novo usuário
delete -> Apaga um novo usuário
show -> Mostra um usuário
update -> Atualiza um usuário
*/
