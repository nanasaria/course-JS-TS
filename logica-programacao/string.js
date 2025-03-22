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

// DOM - Árvore DOM
