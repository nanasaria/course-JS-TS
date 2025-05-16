const form = document.querySelector("form");
const usuarioInput = document.querySelector(".usuario");
const cpfInput = document.querySelector(".cpf");
const nomeInput = document.querySelector(".nome");
const sobrenomeInput = document.querySelector(".sobrenome");
const senhaInput = document.querySelector(".senha");
const repetirSenhaInput = document.querySelector(".repetir-senha");
const error = document.querySelector(".error");

class Formulario {
  constructor(nome, sobrenome, cpfInput, usuario, senha, repetirSenha) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.cpf = cpfInput;
    this.usuario = usuario;
    this.senha = senha;
    this.repetirSenha = repetirSenha;
  }

  validate() {
    error.innerHTML = "";
    if (this.isValidInput() && this.isValidUser() && this.isValidPassword()) {
      this.clear();
    }
  }

  isValidInput() {
    if (
      [
        this.nome,
        this.sobrenome,
        this.cpf,
        this.usuario,
        this.senha,
        this.repetirSenha,
      ].some((campo) => campo === "")
    ) {
      this.messageError("Nenhum campo pode estar vazio.");
      return false;
    }
    return true;
  }

  isValidUser() {
    const regex = /\W+/g;
    if (regex.test(this.usuario)) {
      this.messageError("Usuário pode conter apenas letras e/ou números");
      return false;
    }

    if (this.usuario.length < 3 || this.usuario.length > 12) {
      this.messageError("Usuário deve ter entre 3 e 12 caracteres");
      return false;
    }

    return true;
  }

  isValidPassword() {
    if (
      [this.senha, this.repetirSenha].some((s) => s.length < 6 || s.length > 12)
    ) {
      this.messageError("Senha precisa ter entre 6 e 12 caracteres");
      return false;
    }

    if (this.senha !== this.repetirSenha) {
      this.messageError("Senhas devem ser iguais.");
      return false;
    }

    return true;
  }

  messageError(message) {
    const li = document.createElement("li");
    li.innerText = message;
    error.appendChild(li);
  }

  clear() {
    nomeInput.value = "";
    sobrenomeInput.value = "";
    cpfInput.value = "";
    usuarioInput.value = "";
    senhaInput.value = "";
    repetirSenhaInput.value = "";
    error.innerHTML = "";
  }
}

form.addEventListener("submit", () => {
  const formulario = new Formulario(
    nomeInput.value,
    sobrenomeInput.value,
    cpfInput.value,
    usuarioInput.value,
    senhaInput.value,
    repetirSenhaInput.value
  );

  formulario.validate();
});
