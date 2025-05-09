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

/*
defineProperty -> DefineProperties
*/

function Produto3(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  /*
    O defineProperty recebe o objeto e a propriedade que não quer alterar.
    Quando o configurable está habilitado, você pode redefinir a 
    configuração da propriedade.
    Value pode ser qualquer coisa (função, int, string, boolean...)
    Para exibir e não permitir que o atributo seja alterado:
  */
  Object.defineProperty(this, "estoque", {
    enumerable: true, // Mostra a chave
    value: estoque, // Valor da chave
    writable: false, //Se puder alterar esse valor ou não
    configurable: false, // Se puder apagar a chave ou não.
  });
}

const p3 = new Produto3("Camiseta", 20, 3);
console.log(p3.nome);

/*
Para mostrar as chaves do objeto.
*/
console.log(Object.keys(p3));

/*
defineProperties faz o mesmo, mas com mais de 1 objeto.
*/

function Produto4(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperties(this, {
    nome: {
      enumerable: true, // Mostra a chave
      value: estoque, // Valor da chave
      writable: false, //Se puder alterar esse valor ou não
      configurable: false, // Se puder apagar a chave ou não.
    },
    preco: {
      enumerable: true, // Mostra a chave
      value: estoque, // Valor da chave
      writable: false, //Se puder alterar esse valor ou não
      configurable: false, // Se puder apagar a chave ou não.
    },
  });
}

/*
Getters e Setters

Maneira de proteger as propriedades.

Get -> Apenas PEGAR a informação.
Set -> Atribuir informação.
*/

function Produto5(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // Mostra a chave
    configurable: false, // Se puder apagar a chave ou não.
    get: function () {
      return estoquePrivado;
    },
    set: function (valor) {
      if (typeof valor !== "number") {
        throw new TypeError("Foi passado um valor que não é número.");
      }
      estoquePrivado = valor;
    },
  });
}

const p5 = new Produto5("Camiseta", 20, 3);
console.log(p5.estoque);

/*
Funçaõ Factory
*/

function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      if (typeof valor !== "String") {
        throw new TypeError("Necessário passar uma string!");
      }
      nome = valor;
    },
  };
}

const p6 = criaProduto("Camiseta");
// p6.nome = 123; -> Gera uma exceção (erro).
console.log(p6.nome);

/*
Métodos Úteis de Objetos

Object.keys -> Retorna as chaves
Object.freeze -> Congela o objeto
Object.defineProperties -> Define várias propriedades
Object.defineProperty -> Define uma propriedade
*/

const produto6 = {
  nome: "Caneca",
  preco: 25.99,
};

/**
 Apenas referenciando o mesmo objeto. 
 Aponta para o mesmo lugar na memória.
 */
const outraCoisa = produto6;
outraCoisa.nome = "Prato"; //Muda de Produto6 e outraCoisa

/*
Copiando o objeto e alocando em outro lugar na memória:
*/
const caneca = { ...produto6 };
caneca.nome = "Caneca";
caneca.preco = 29.99;

/*
Object.assign()
*/
