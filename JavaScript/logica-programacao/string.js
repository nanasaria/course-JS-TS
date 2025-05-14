/*
Operadores de comparação
> - Maior que
>= - Maior ou igual a
< - Menor que
<= - Menor que ou igual a
== - Igualdade (valor)
=== - Igualdade estrita (valor e tipo)
!= - Diferente (valor)
!== - Diferente estrito (valor e tipo)

Operadores de Comparação
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO

IF e ELSE 
- Sempre que utilizar um else, irá ser necessário utilizar um if antes.
- Pode ter diversos else if nas checagens
- Somente um else na checagem

Operador Ternário
ex:
*/
const pontuacaoUsuario = 1000;
const nivelUsuario =
  pontuacaoUsuario >= 1000 ? "Usuário VIP" : "Usuário Normal";
console.log(nivelUsuario);

/*
Objeto Date.

Date é uma função construtora, então ela precisa ser instanciada.
Em javascript, o mês começa em 0, então vai de 0 - 11.
Podemos passar strings no objeto date.
*/

const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia);
console.log(data.toString());

const abril = new Date(2019, 3, 20, 15, 14, 27);
console.log(abril);

const dataString = new Date("2025-03-20 22:47:32.100");
console.log("Dia", dataString.getDate());
console.log("Mês", dataString.getMonth()); // Mês começa do 0
console.log("Ano", dataString.getFullYear());
console.log("Hora", dataString.getHours());
console.log("Minuto", dataString.getMinutes());
console.log("Segundo", dataString.getSeconds());
console.log("Milésimo Segundo", dataString.getMilliseconds());
console.log("Dia da Semana", dataString.getDay()); // Pega o número do dia da semana. 0 - Domingo, 6 - Sábado

function addZero(num) {
  return num >= 10 ? num : `0${num}`;
}

function formatDate(data) {
  const dia = addZero(data.getDate());
  const mes = addZero(data.getMonth() + 1);
  const ano = addZero(data.getFullYear());
  const hora = addZero(data.getHours());
  const min = addZero(data.getMinutes());
  const seg = addZero(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const date = new Date();
console.log(formatDate(date));

/*
Estrutura condicional Switch/Case

- O Switch só funciona com números ou strings.
*/
let diaDaSemana = new Date().getDay();

switch (diaDaSemana) {
  case 0:
    diaDaSemana = "Domingo";
    break;
  case 1:
    diaDaSemana = "Segunda";
    break;
  case 2:
    diaDaSemana = "Terça";
    break;
  case 3:
    diaDaSemana = "Quarta";
    break;
  case 4:
    diaDaSemana = "Quinta";
    break;
  case 5:
    diaDaSemana = "Sexta";
    break;
  case 6:
    diaDaSemana = "Sábado";
    break;
  default:
    diaDaSemana = "Não foi possível saber o dia da semana";
}

console.log(diaDaSemana);

/*
Você pode fazer uma função e ao invés de break, passar um "return"

Atribuição via desestruturação (Arrays)

Operador "..." = rest Operator, ou seja, pega os dados restantes.
Mas pode ser o spread operator também que serve para expandir os
valores de um array ou objeto em outro array ou objeto.
*/

const numeros = [120, 205, 33, 42, 565];
const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero, terceiroNumero); // 120 205 33
console.log(resto); // (2) [42, 565]

const matrizNumeros = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const [, [, , seis]] = matrizNumeros; // Via desestruturação

console.log(matrizNumeros[1][2]); // 6
console.log(seis); // 6

/*
Atribuição via desestruturação (Objetos)
*/

const gerente = {
  nome: "Cauã",
  sobrenome: "Miranda",
  idade: 42,
  endereco: {
    rua: "Arlindo Colaço",
    numero: 532,
    complemento: "Ap. 62",
  },
};

// Pode colocar um "=" e atribuir um valor padrão para caso o atributo não exista no objeto.
const { nome = "", sobrenome, idade } = gerente;

console.log(nome, sobrenome, idade); // Cauã Miranda 42

// Você pode colocar outro nome na variável
const { nome: nomeGerente } = gerente;
console.log(nomeGerente); // Cauã

const {
  endereco: { rua, numero },
} = gerente;

/*
Nesse caso não funciona mais porque a variável endereço não existe mais.
console.log(endereco); - {rua: 'Arlindo Colaço', numero: 532, complemento: 'Ap. 62'}
*/

console.log(rua, numero); //Arlindo Colaço 532

/*
Nesse caso, a variável endereco existe, portanto, pode ser exibida
*/
const {
  endereco: { ruaGerente, numeroGerente },
  endereco,
} = gerente;

console.log(endereco);

/*
Operador rest em objetos
*/
const { nome: gerenteNome, ...restoGerente } = gerente;
console.log(restoGerente); // {sobrenome: 'Miranda', idade: 42, endereco: {…}}

/*
Estruturas de repetição:

For clássico

i - index
*/

for (let i = 0; i <= 5; i++) {
  console.log(`Linha ${i}`); // Imprime linha 0 até linha 5
}

for (let i = 50; i <= 100; i += 10) {
  console.log(`Linha ${i}`); // Incrementa de 10 em 10
}

for (let i = 50; i >= 0; i -= 10) {
  console.log(`Linha ${i}`); // Decrementa de 10 em 10
}

// Par ou Impar
for (let i = 0; i <= 10; i++) {
  const par = i % 2 === 0 ? "Par" : "Impar";
  console.log(i, par);
}

// Percorrer array
const frutas = ["Uva", "Morango", "Manga", "Pera", "Melancia"];

for (let i = 0; i < frutas.length; i++) {
  console.log(`Indice ${i}: ${frutas[i]}`); // Uva, morango, manga
}

/*
DOM e a Árvore DOM

Document Object Model.

O objeto geral do navegador é o Window, que é o topo. 
Os elementos subsequentes são filhos.
Em document está o HTML.

Pai    -> filho -> filho -> filho
Window -> HTML ->  Head  -> body

Ou seja, constrói-se uma árvore onde cada elemento é pai e filho.

DOM é na verdade, uma interface de objetos que permite a manipulação
dentro da página do navegador.

Estrutura de repetição

For in -> Lê os indices do array/vetor ou chaves do objeto
*/

const frutasFeira = ["Melão", "Abacate", "Mamão", "Amora"];

//Lê os indices do array
for (let indice in frutasFeira) {
  console.log(frutasFeira[indice]); //Imprime os itens do array
}

const ator = {
  nome: "Fabi",
  sobrenome: "Bang",
  idade: 40,
  papel: "Glinda",
  peça: "Wicked",
};

for (let chave in ator) {
  console.log(`${chave}: ${ator[chave]}`); // Imprime os atributos e seus valores
}

/*
For of - percorre objetos iteráveis. Ex: Array, strings...
Objetos iteráveis são objetos que podem ser percorridos elemento por
elemento .
*/

const nomeMedico = "Daniel";

for (let valor of nomeMedico) {
  console.log(valor); // Lê cada indice e retorna o valor
}

/*
ForEach -> Método que chama uma função para cada elemento no array
*/

frutasFeira.forEach((element, indice, array) => {
  console.log(element, indice, array); // Retorna o elemento, o indice e o array percorrido.
});

/*
______________________________________________________________________

For clássico - Geralmente para objetos iteráveis (array ou strings)
For in - Retorna o índice ou chave (strings, arrays ou objetos)
For of - Retorna o valor de objetos iteráveis (arrays ou strings)
______________________________________________________________________

NodeList - É um  objeto semelhante a um array que retorna um conjunto de 
elementos do document que representa o conteúdo da página. 
Dentro dos objetos do DOM podem conter uma lista de objetos, que no
caso, as NodeList.

Lembrando que: HTMLCollection representa uma coleção genérica (objeto array)
de elementos e oferece métodos e propriedades para selecioná-los da lista.


While e Do While - Enquanto e faça enquanto

Função para exibir sequência de 0 a 10
let controle = 0;

while (controle <= 10) {
  console.log(controle);
  controle++;
}

Função para checar números aleatórios, como roleta russa.
function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);
console.log("Número: ", rand);

while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}

Com Do While, você fornece uma condição para o while acontecer.
Ele executa e depois checa a condição.

do {
  rand = random(min, max);
  console.log(rand);
}while (rand !== 10)


Break e continue funciona em laços de repetição como for e while.
*/

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let n of num) {
  if (n === 7) {
    console.log("7 encontrado"); // Assim que há o break, não executa mais nada que está após.
    break;
  }
  console.log(n);
}

/*

Tratamento de erros

Try/Catch/Throw

Try é o bloco que fica o código para executar, catch é onde diz o erro.
Throw é para tratar o erro.
*/

try {
  console.log(naoExisto);
} catch (error) {
  console.error("Variável não existe");
}

/*
Tratamento de erros

Try/Catch/Finally
*/

try {
  // Executada quando não há erros
} catch (e) {
  //Executada quando há erros
} finally {
  // Executada sempre
}

/*
setInterval -> configura um Intervalo de tempo para que uma função seja 
executada em determinado momento
*/

function horaAtual() {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}

const mostrarHora = () => console.log(horaAtual());

/* 
1° parâmetro é a referência da função que será executada de tempos
em tempos. Passar a referência é chamar a função sem executá-la ou 
uma função anônima.

2° parâmetro você passa de quanto em quanto tempo a função será executada
em milésimos de segundos (Milissegundos).

setInterval(function () {
  console.log(horaAtual());
}, 1000);

Você também pode colocar dentro de uma variável
*/

const timer = setInterval(function () {
  console.log(horaAtual());
}, 1000);

/*
SetTimeout - Função usada para executar um código ou uma função após
um período de tempo em milissegundos.

setTimeout(funcao, tempo);
*/

setTimeout(function () {
  clearInterval(timer); // Recebe o nome do intervalo que quer parar.
}, 10000);

setTimeout(() => {
  console.log("Olá, mundo!");
}, 5000);

/*
event.target diz qual elemento está sendo clicado.

*/
