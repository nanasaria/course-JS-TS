/*
Arrays
___________________________________________________________
Recapitulando
Para criar arrays:
                   0        1         2    -> Indices
const nomes = ["Eduardo", "Maria", "Joana"]

Podemos utilizar também:
const nomes = new Array("Eduardo", "Maria", "Joana")
Funciona da mesma forma!

Copiar todos os elementos e espalhar dentro de outro array:
const novo = [...nomes]

Adicionar ao fim do array:
push()

Remover do fim do array e retornar o valor:
pop()

Adicionar ao inicio do array:
unshift()

***Pode causar problema de performance por 
deslocar todos os indices do array.***

Remover do inicio do array e retornar o valor:
shift() 

Fatiar um array:
slice(inicio, fim)

const nomes = ["Eduardo", "Maria", "Joana"]

nomes.slice(1,3) 
Retorna: ["Maria", "Joana"]

Para separar uma string em um array:
split(separador)

const nome = "Chappel Roan"
const nomes = nome.split(" ") 
Retorna: ["Chappel", " Roan"]  

Para remover espaços:
trim()

Para unir valores do array:
join(separador)

const nomes = ["Chappel", " Roan"]
const nome = nomes.join(" ")
Retorna: "Chappel Roan"
___________________________________________________________

Método Splice

Essa função mexe no array original assim como pop e push.

1° Argumento: Qual o índice que quer começar a mexer.
2° Argumento: Quantos elementos remover do array
3° Argumento ou mais: O que quer adicionar no array

splice(indice, deletar, adicionar)
O retorno dessa função é um array.

Podemos utilizar negativos também.

Simulando a função pop():
const nomes = ["Chappel", " Roan", "Lady", "Gaga"] 
const removido = nomes.splice(-1, 1);

removido retorna:
["Gaga"] 

nomes retorna:
["Chappel", " Roan", "Lady"] 

Ao utilizar negativo, os indices invertem, exceto o 0.

                 -4          -3      -2    -1
                  0           1       2     3
const nomes = ["Chappel", " Roan", "Lady", "Gaga"] 

Para adicionar:
nomes.splice(3, 0, "Britney")

Retorno:   
    0           1       2        3         4
["Chappel", " Roan", "Lady", "Britney", "Gaga"]

Simular o shift():
const nomes = ["Chappel", " Roan", "Lady", "Gaga"] 
const removidos = nomes.splice(0, 1)

Retorno nomes:
[" Roan", "Lady", "Gaga"]

Retorno removidos:
["Chappel"]

Simular o push():
const nomes = ["Chappel", " Roan", "Lady", "Gaga"]
nomes.splice(nomes.length, 0, "Britney")

Retorno:
["Chappel", " Roan", "Lady", "Gaga", "Britney"]

Simular o unshift():
const nomes = ["Chappel", " Roan", "Lady", "Gaga"]
nomes.splice(0, 0, "Britney")

Retorno:
["Britney", "Chappel", " Roan", "Lady", "Gaga"]

___________________________________________________________

Concatenando arrays

Com concat():
const a1 = [1,2,3]
const a2 = [4,5,6]

a3 = a1.concat(a2)

Retorno:
[1,2,3,4,5,6]

Podemos mandar mais um array também:
a3 = a1.concat(a2, [7,8,9], "Beyoncé")

Espalhar o array com Spread ... :
const a3 = [..a1, ..a2]

Retorno:
[1,2,3,4,5,6]

Para adicionar valor:
const a3 = [..a1, Beyoncé, ..a2]

Retorno:
[1,2,3,"Beyoncé",4,5,6]

Quando mandamos um array literal, é adicionado um array
LITERAL. Ex:
const a3 = [..a1, ..a2, [7, 8,9]]

Retorno: 
[1,2,3,4,5,6,[7,8,9]]

Para passarmos os valores, usamos o spread:
const a3 = [..a1, ..a2, ...[7, 8,9]]

Retorno: 
[1,2,3,4,5,6,7,8,9]

___________________________________________________________

Para saber se um valor está contido no array:
const nomes = ["Chappel", " Roan", "Lady", "Gaga"]
nomes.includes("Lady") -> Retorna true ou false, nesse 
caso true.
___________________________________________________________

FILTER
Função para filtrar um array.

Filter recebe como argumento uma função de callback,
essa função de callback vai iterar sobre cada um dos 
itens do array. Essa função é a Callback filter.

Filter sempre retorna um array com a mesma quantidade
       de elementos ou menos.
*/

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const filter = numeros.filter((num) => num > 10);
console.log(filter);

/**
 * Callback filter
 * 1° Argumento: O valor do elemento, esse "valor" é
 * cada um dos elementos.
 *
 * 2° Argumento: Indice de cada elemento.
 *
 * 3° Argumento: Array completo
 *
 * Esse callback filter requer um retorno boolean.
 * Ou seja, você diz a cada volta quais elementos quer
 * que pertençam ao novo array.
 * A cada true, entra no novo array.
 */

/*
function callbackFilter(valor, indice, array) {
  if (valor > 10) {
    return true;
  } else {
    return false;
  }
}

A condição já retorna true ou false.
Então, retorne a condição.
*/
function callbackFilter(valor) {
  return valor > 10;
}

const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);

/*
Você pode criar a função de callback utilizando 
uma função anônima
 */

const numerosFiltrados2 = numeros.filter(function (valor) {
  return valor > 10;
});

/*
Com arrow function

*******************************************************
* Lembrando que quando a função contém apenas 1 linha,*
* o retorno fica implícito.                           *               
*******************************************************

 */

const numerosFiltrados3 = numeros.filter((valor) => valor > 10);

/*
Utilizando filter em objetos.
*/

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

const nameWith5letterOrMore = pessoas.filter(
  (pessoa) => pessoa.nome.length >= 5
);

console.log("Nomes com 5 letras ou mais:", nameWith5letterOrMore);

const more50years = pessoas.filter((pessoa) => pessoa.idade > 50);
console.log("Pessoas com mais de 50 anos:", more50years);

const nameLastA = pessoas.filter((pessoa) => pessoa.nome.endsWith("a"));
console.log("Nomes que terminam com A:", nameLastA);

/**
 MAP -> Função para modificar um array ou objeto.

O método map() itera sobre cada elemento de um array e 
aplica uma função de transformação a cada elemento, 
retornando um novo array com os resultados. Diferente do 
filter() que seleciona elementos, o map() transforma cada 
elemento. O array resultante do map() sempre terá o mesmo 
número de elementos que o array original.

Exemplo onde dobramos os números do array:
 */

const double = numeros.map((num) => num * 2);
console.log(double);

/**
 Aprofundando

****************************************************
* Ele itera sobre todos os valores e mantém todos  *
* os valores!                                      *
****************************************************

 */

const numerosEmDobro = numeros.map(function (valor) {
  return valor * 2;
});

console.log(numerosEmDobro);

/*
Utilizando o map em objetos
*/

const names = pessoas.map((pessoa) => pessoa.nome);
console.log(names);

/* 
const idades = pessoas.map((obj) => {
  return { idade: obj.idade };
});

De forma simplificada:
*/
const idades = pessoas.map((obj) => ({ idade: obj.idade }));
console.log(idades);

const addId = pessoas.map((obj) => ({ id: Math.random(), ...obj }));
console.log(addId);

/*
Reduce
Função mais utilizada para reduzir um array a um único
elemento.

O reduce() é utilizado principalmente para:

Somar todos os valores de um array;

Calcular médias, máximos ou mínimos;

Transformar um array em um objeto;

Contar ocorrências de valores;

Aplanar arrays aninhados;

Agrupar dados por categorias;

Encadear operações que normalmente exigiriam múltiplos loops;

1° parâmetro: Acumulador
2° parâmetro: Valor atual
3° parâmetro: Índice
4° parâmetro: Array Original

Também podemos receber um valor inicial depois do escopo
da função.
*/

const total = numeros.reduce(
  function (acumulador, valor) {
    acumulador += valor;
    return acumulador;
  },
  //Valor inicial
  0
);

console.log(total);

const parReduce = numeros.reduce(
  function (acumulador, valor) {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
  },
  //Valor inicial
  []
);

console.log(parReduce);

const doubleReduce = numeros.reduce(
  function (acumulador, valor) {
    acumulador.push(valor * 2);
    return acumulador;
  },
  //Valor inicial
  []
);

console.log(doubleReduce);

/*
Uso comum:
*/

const totalReduce = numeros.reduce(
  (acumulador, valor) => (acumulador += valor),
  0
);

console.log(totalReduce);

const olderPerson = pessoas.reduce(function (acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
});

console.log(olderPerson);

/*
Map + filter + reduce

Como unir?
Podemos combinar e retornar um único valor.
Da seguinte forma:
*/
const numerosPares = numeros
  .filter((valor) => valor % 2 === 0)
  .map((valor) => valor * 2)
  .reduce((acumulador, valor) => (acumulador += valor));

console.log(numerosPares);

/*
Foreach

Forma de iterar sobre arrays.
Foreach só está disponível para arrays.

Foreach não permite usar o break ou continue.
Não funciona bem com operações assíncronas com await.
Não retorna valor.
*/
const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

a1.forEach(function (valor, indice, array) {
  console.log(array[indice]);
});

/*
Simulando um reduce
 */
let totalForeach = 0;
a1.forEach((valor) => {
  totalForeach += valor;
});

console.log(totalForeach);
