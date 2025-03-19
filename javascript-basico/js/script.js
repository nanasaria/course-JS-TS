alert('Olá') // Alerta o usuário
confirm('Tudo certo?') // Pede uma confirmação
prompt('Qual o seu nome?') // Entrada do usuário

// Desafio da AULA 11
const num1 = prompt('Digite o primeiro número:')
const num2 = prompt('Digite o segundo número:')

alert(`Seu resultado é ${parseInt(num1) + parseInt(num2)}`)

// Exercício com variáveis

let varA = 'A' // B
let varB = 'B' // C
let varC = 'C' // A

const storageA = varA;

//Solução com variável para armazenar o A
varA = varB;
varB = varC;
varC = storageA;

// Ou com Array
[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);

// SOBRE STRINGS
let string = 'Um texto';
const caractere_Espaco_Escape = "Um \"texto\""

console.log(string[3]) // Resulta em "t" porque pega a letra do indice.

// Métodos String
console.log(string.concat(' em outro')) // Método Concat
console.log(`${string} em outro`) // Template string
console.log(string.indexOf('texto')) // Saber em qual indice está o que deseja
console.log(string.match(/[a-z]/g)) // Expressão regular para encontrar as letras minúsculas
console.log(string.replace('Um', 'Outro')) // Substituindo uma palavra por outra
console.log(string.length) // Tamanho da string
console.log(string.slice(0, 5)) // Fatiar a string, ou seja, trazer só um pedaço
console.log(string.substring(string.length - 5, string.length - 1)) // Metódo que faz a mesma coisa que slice
console.log(string.split('t')) // Método para dividir em arrays a partir do que passa para ele

// Numbers

