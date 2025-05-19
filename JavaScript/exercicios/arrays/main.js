/*
Map

Dobrar os números
Dado o array [1, 2, 3, 4], crie um novo array com cada número dobrado.

Converter para string
Dado o array [10, 20, 30], transforme todos os números em strings.
*/

const arrayEx1 = [1, 2, 3, 4];
const arrayEx2 = [10, 20, 30];

const doubled = arrayEx1.map((item) => item * 2);
console.log(doubled);
const stringArray = arrayEx2.map((item) => item.toString());
console.log(stringArray);

/*
Extrair nomes
Dado o array:
*/
const users = [
  { id: 1, name: "Ana" },
  { id: 2, name: "Bruno" },
  { id: 3, name: "Carlos" },
];

const names = users.map((user) => user.name);
console.log(names);

/* Com desestruturação */

const nameDestructuring = users.map(({ name }) => name);
console.log(nameDestructuring);

/*
Filter

Números maiores que 10
Dado o array [5, 8, 13, 20, 3, 50], crie um novo array só com os números maiores que 10.

Filtrar usuários ativos
Dado:

const users2 = [
  { id: 1, name: "Ana", active: true },
  { id: 2, name: "Bruno", active: false },
  { id: 3, name: "Carlos", active: true },
];

Filtrar nomes com mais de 5 letras
Dado o array ['Ana', 'Bruno', 'Carlos', 'Eva'], filtre os nomes que têm mais de 5 letras.
*/

const arrayEx3 = [5, 8, 13, 20, 3, 50];
const greaterThanTen = arrayEx3.filter((item) => item > 10);
console.log(greaterThanTen);

const users2 = [
  { id: 1, name: "Ana", active: true },
  { id: 2, name: "Bruno", active: false },
  { id: 3, name: "Carlos", active: true },
];

const usersActive = users2.filter(({ active }) => active);
console.log(usersActive);

const names2 = ["Ana", "Bruno", "Carlos", "Eva"];
const greaterThanFiveLetters = names2.filter((name) => name.length > 5);
console.log(greaterThanFiveLetters);

/*
Reduce
Somar todos os números
Dado o array [1, 2, 3, 4], use reduce para somar todos os números.

Contar quantos números pares existem
Dado o array [1, 2, 3, 4, 5, 6], use reduce para contar quantos números pares ele possui.

Transformar array de strings em frase
Dado ['Olá', 'mundo', 'Javascript'], use reduce para juntar tudo em uma única string com espaços.
*/
const arrayEx4 = [1, 2, 3, 4];
const sum = arrayEx4.reduce((count, item) => (count += item), 0);
console.log(sum);

const arrayEx5 = [1, 2, 3, 4, 5, 6];
const quantPair = arrayEx5.reduce(
  (count, item) => (count += item % 2 === 0),
  0
);
console.log(quantPair);

const arrayEx6 = ["Olá", "mundo", "Javascript"];
const join = arrayEx6.reduce((count, item) => (count += ` ${item}`));
console.log(join);

/*
Juntando os 3

Dado o array:

const products = [
  { name: 'Mouse', price: 50 },
  { name: 'Teclado', price: 80 },
  { name: 'Monitor', price: 500 },
  { name: 'Cabo HDMI', price: 30 },
];

Faça:

Um array com os nomes dos produtos.

Um array só com produtos que custam mais de 100.

O valor total de todos os produtos.
*/

const products = [
  { name: "Mouse", price: 50 },
  { name: "Teclado", price: 80 },
  { name: "Monitor", price: 500 },
  { name: "Cabo HDMI", price: 30 },
];

const nameProducts = products.map(({ name }) => name);
const priceThan100 = products.filter(({ price }) => price > 100);
const sumProducts = products.reduce((total, { price }) => (total += price), 0);

console.log(
  `Um array com os nomes dos produtos: ${nameProducts}\nUm array só com produtos que custam mais de 100: ${priceThan100}\nO valor total de todos os produtos: ${sumProducts}`
);

/*
Exercícios de map
Elevar os números ao quadrado
Dado [2, 3, 4], crie um novo array com os números elevados ao quadrado.

Pegar o tamanho das palavras
Dado ['JavaScript', 'React', 'Node'], crie um array com o número de letras de cada palavra.
 */

const numbers = [2, 3, 4];
const squared = numbers.map((item) => item ** 2);
console.log(squared);

const words = ["JavaScript", "React", "Node"];
const lettersNum = words.map((item) => item.length);
console.log(lettersNum);

/*
Exercícios de filter
Filtrar números negativos
Dado [10, -2, 3, -5, 0, 7], crie um novo array só com os números positivos.

Filtrar strings com a letra 'a'
Dado ['Ana', 'Bruno', 'Carlos', 'Eva'], filtre os nomes que possuem a letra 'a' (maiúscula ou minúscula).

Filtrar itens repetidos (deixar só os diferentes)
Dado ['maçã', 'banana', 'uva', 'maçã', 'laranja', 'banana'], filtre para retornar um array só com os itens que aparecem uma única vez.
*/

const num2 = [10, -2, 3, -5, 0, 7];
const positive = num2.filter((num) => num >= 0);
console.log(positive);

const words2 = ["Ana", "Bruno", "Carlos", "Eva"];

const haveA = words2.filter((word) => word.toLowerCase().includes("a"));
console.log(haveA);

const words3 = ["maçã", "banana", "uva", "maçã", "laranja", "banana"];
newArray = [];
const words4 = words3.filter((fruit) => {
  if (!newArray.includes(fruit)) {
    newArray.push(fruit);
  }
});

console.log(newArray);

/*
Exercícios de reduce
Encontrar o maior número
Dado [5, 3, 9, 1, 20], use reduce para retornar o maior número.

Contar quantas vezes cada item aparece
Dado ['maçã', 'banana', 'uva', 'maçã', 'laranja', 'banana'], use reduce para gerar um objeto assim:

{
  maçã: 2,
  banana: 2,
  uva: 1,
  laranja: 1
}

Concatenar nomes com vírgula
Dado ['Ana', 'Bruno', 'Carlos'], use reduce para gerar uma string: "Ana, Bruno, Carlos".
*/

const num3 = [5, 3, 9, 1, 20];
const greaterNum = num3.reduce((ac, num) => (ac = num > ac ? num : ac));
console.log(greaterNum);

const countFruits = words3.reduce((ac, fruit) => {
  ac[fruit] = (ac[fruit] || 0) + 1;
  return ac;
}, {});

console.log(countFruits);

const words5 = ["Ana", "Bruno", "Carlos"];
const stringWord5 = words5.reduce((ac, item) => (ac += `, ${item}`));
console.log(stringWord5);
