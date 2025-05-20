const nome = "Brooke";
const sobrenome = "Davis";

const falaNome = () => {
  console.log(nome, sobrenome);
};

/* 
Forma de exportar:
module.exports.nome = nome
module.exports.sobrenome = sobrenome
module.exports.falaNome = falaNome

ou:
*/
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = "O que eu quiser exportar";

/* This se refere ao module.exports */


class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
}

exports.Pessoa = Pessoa