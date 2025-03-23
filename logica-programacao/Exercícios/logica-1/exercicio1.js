// Escreva uma função que recebe 2 números e retorne o maior deles.

function maiorNumero(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

console.log(maiorNumero(19, 35));

// Outra forma com apenas 1 linha
const max = (num1, num2) => (num1 > num2 ? num1 : num2);
console.log(max(1945, 1935));
