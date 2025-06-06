import Aluno from "../models/Aluno";

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    res.json(alunos);
  }

  async store(req, res) {
    try {
      const aluno = Aluno.create(req.body);
      return res.json(aluno);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((e) => e.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ["Faltando o ID"],
        });
      }

      const aluno = await aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ["Aluno não existe"],
        });
      }

      return res.json(aluno);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((e) => e.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ["Faltando o ID"],
        });
      }

      const aluno = await aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ["Aluno não existe"],
        });
      }

      await aluno.destroy();
      return res.json({
        apagado: true,
      });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((e) => e.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ["Faltando o ID"],
        });
      }

      const aluno = await aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ["Aluno não existe"],
        });
      }

      const alunoAtualizado = await aluno.update(req.body);
      return res.json(alunoAtualizado);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((e) => e.message),
      });
    }
  }
}

export default new AlunoController();
