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

let cpf = "705.484.450-52";
let clearCpf = cpf.replace(/\D+/g, "");
Array.from(clearCpf);
// Vou utilizar acumulador.
