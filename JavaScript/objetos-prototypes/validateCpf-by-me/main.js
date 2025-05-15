/*
705.484.450-52 070.987.720-03
Pegar 9 dígitos para pegar o primeiro dígito.

Multiplicar cada um por um número regressivo de:
10 9 8 7 6 5 4 3 2 

Depois somar cada número resultante para ter um total

Pegar o total -> Primeiro dígito usando a fórmula:
11 - (total % 11) -> Total disso é o Primeiro dígito
Esse número não pode ser maior que 9.
Se o número for maior que 9, ele será 0.

Depois de termos o primeiro dígito:
Agora pegamos até o dígito que já temos
Começamos agora de 11:

11 10 9 8 7 6 5 4 3 2

O total também vai seguir a fórmula:
11 - (total % 11) = segundo digito.
Se o número for maior que 9, ele será 0.

Depois concatenamos os 9 dígitos que iniciamos com 
os dígitos gerados.

Por fim, comparamos o CPF com os dígitos gerados com o 
CPF original

Se o dígito variar, é inválido.

o CPF precisa ser uma string.
*/

let cpfUser = "705.484.450-52";
cpfUser = clearCpf(cpfUser);
console.log(verifyCpf(cpfUser));

function verifyCpf(cpf) {
  cpf = cpf.split("").slice(0, -2);
  const firstDigit = generateDigit(cpf);
  cpf.push(firstDigit);

  const secondDigit = generateDigit(cpf);
  cpf.push(secondDigit);

  const newCpf = clearCpf(cpf.join(""));

  if (cpfUser !== newCpf) {
    return "CPF Inválido!";
  }

  return "CPF Válido!";
}

function clearCpf(cpf) {
  cpf = cpf.replace(/\D+/g, "");
  return cpf;
}

function generateDigit(arrayCpf) {
  const multiplier = arrayCpf.length + 2;

  const multiplied = multiplyCpf(arrayCpf, multiplier);
  let digit = 11 - (multiplied % 11);

  if (digit > 9) {
    digit = 0;
  }

  return digit;
}

function multiplyCpf(arrayCpf, multiplier) {
  const total = arrayCpf
    .map((digit) => {
      multiplier--;
      return Number(digit) * multiplier;
    })
    .reduce((ac, val) => {
      return ac + val;
    });

  return total;
}
