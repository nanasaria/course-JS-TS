/*
Revisando Objetos

Declaração:
*/
const pessoa = {
  nome: "Lady",
  sobrenome: "Gaga",
};

console.log(pessoa.nome);
console.log(pessoa["sobrenome"]);

/*
Acessando via colchetes
*/
const chave = "nome";
console.log(pessoa[chave]);

/*
Criando novo objeto com métodos.
Métodos são funções dentro de objetos que executam ações.
*/
const pessoa1 = new Object();
pessoa1.nome = "Britney";
pessoa1.sobrenome = "Spears";
pessoa1.idade = 43;
pessoa1.falarNome = function () {
  return `${this.nome} está falando seu nome.`;
};
pessoa1.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.falarNome());
console.log(pessoa1.getDataNascimento());

/*
Iteração para ver as chaves do objeto.
*/
for (let chave in pessoa1) {
  console.log(pessoa1[chave]);
}

/*
Temos formas de criar objetos:

Factory Function - Funções de fábrica
Constructor Function - Funções construtoras
Classes 
*/

/* Factory Function */
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}

const p1 = criaPessoa("Lady", "Gaga");
console.log(p1.nomeCompleto);

/* 
Constructor Function 
A função construtora pode adicionar propriedades e métodos ao objeto usando this.
O objeto é implicitamente retornado ao final da execução da função (a menos que você retorne explicitamente outro objeto).
*/

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.nomeCompleto = function () {
    return `${this.nome} ${this.sobrenome}`;
  };
}

/*
A palavra new cria um objeto vazio {} 
A palavra this referencia os atributos do novo objeto.
*/
const p2 = new Pessoa("Chappel", "Roan");
console.log(p2.nomeCompleto());
