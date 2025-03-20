alert("Olá"); // Alerta o usuário
confirm("Tudo certo?"); // Pede uma confirmação
prompt("Qual o seu nome?"); // Entrada do usuário

// Operação de adição com entrada de usuário
const num1 = prompt("Digite o primeiro número:");
const num2 = prompt("Digite o segundo número:");

alert(`Seu resultado é ${parseInt(num1) + parseInt(num2)}`);

// Exercício com variáveis

let varA = "A"; // B
let varB = "B"; // C
let varC = "C"; // A

const storageA = varA;

//Solução com variável para armazenar o A:
// varA = varB;
// varB = varC;
// varC = storageA;

// Ou com Array
[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);

// SOBRE STRINGS
let string = "Um texto";
const caractere_Espaco_Escape = 'Um "texto"';

console.log(string[3]); // Resulta em "t" porque pega a letra do indice.

// Métodos String
console.log(string.concat(" em outro")); // Método Concat
console.log(`${string} em outro`); // Template string
console.log(string.indexOf("texto")); // Saber em qual indice está o que deseja
console.log(string.match(/[a-z]/g)); // Expressão regular para encontrar as letras minúsculas
console.log(string.replace("Um", "Outro")); // Substituindo uma palavra por outra
console.log(string.length); // Tamanho da string
console.log(string.slice(0, 5)); // Fatiar a string, ou seja, trazer só um pedaço
console.log(string.substring(string.length - 5, string.length - 1)); // Metódo que faz a mesma coisa que slice
console.log(string.split("t")); // Método para dividir em arrays a partir do que passa para ele

// Numbers
let num3 = 1500;
let num4 = 2.5;
let num5 = 10.56374382456;
let temp = num1 * "Olá";
let num6 = 0.7;
let num7 = 0.1;
num6 += num7;

console.log(num3.toString(2)); // Versão binária
console.log(num5.toFixed(2)); // Define as casas decimais. Resultado: 10.56
console.log(Number.isInteger(num4)); // Verificar se o número é um inteiro
console.log(Number.isNaN(temp)); // Verifica se é um NaN(Not a Number)
console.log(num6); // num6 = num6 + num7

// Objeto Math
let num8 = 9.7583466;
let num9 = Math.floor(num8); // Arredondar o número para baixo, ou seja, resultado é 9.
let num10 = Math.ceil(num8); // Arredondar o número para cima, ou seja, resultado é 10.
let num11 = Math.round(num8); // Arredondar para o número mais próximo.
let maiorNumero = Math.max(1, 2, 3, 4, 5, 6); // Pegar o maior número da sequência
let menorNumero = Math.min(1, 2, 3, 4, 5, 6); // Pegar o menor número da sequência
let gerarNumero = Math.random(); // Gerar número aleatório entre 0 e 1.
let gerarNumeroEntre = Math.random() * (10 - 5) + 5; // Gerar número aleatório entre 5 e 10.
let valorPI = Math.PI; // Valor de PI
let potencia = Math.pow(2, 10); // primeiro parâmetro elevado ao 2°
let raiz = Math.sqrt(num8); // Pegar valor de raiz quadrada

// Arrays -> Lista ou coleção de coisas
const alunos = ["Luiz", "Ricardo", "Mariana"];
console.log(alunos[0]); // Acessando o primeiro item. Resultado: Luiz.
console.log(alunos.length); // Tamanho do array

alunos.push("Nayane"); // Adicionar elemento ao final do array
console.log(alunos); // ['Luiz', 'Ricardo', 'Mariana', 'Nayane']

alunos.unshift("Henrique"); // Adicionar elemento no começo do array
console.log(alunos); // ['Henrique', 'Luiz', 'Ricardo', 'Mariana', 'Nayane']

alunos.pop(); // Remove um item do fim do array
console.log(alunos); // ['Henrique', 'Luiz', 'Ricardo', 'Mariana']

const aluno = alunos.pop(); // Você pode salvar o elemento que está removendo em uma variável
const primeiroAluno = alunos.shift(); // Remove um item do começo e pode salvar o elemento que está removendo em uma variável
console.log(`Método pop: ${aluno} e Método shift: ${primeiroAluno}`);

delete alunos[1]; // Deletar um elemento do array e o indice não se altera
console.log(alunos); // ['Luiz', empty]

const professores = ["José", "Amaury", "Roberto"];
const fatia = professores.slice(0, 3); // Pegar os elementos 1 e 2.
console.log(`professores: ${professores} e alguns elementos (fatia): ${fatia}`);

console.log(professores instanceof Array); // Verificar se é array
