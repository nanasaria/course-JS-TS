import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Britney",
      sobrenome: "Spears",
      email: "britneyspears@gmai.com",
      idade: 42,
      peso: 55.3,
      altura: 1.63,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
