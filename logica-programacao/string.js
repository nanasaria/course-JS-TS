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
let diaDaSemana = new Date().getDay()

switch(diaDaSemana) {
  case 0: diaDaSemana = 'Domingo'
  break;
  case 1: diaDaSemana = 'Segunda'
  break;
  case 2: diaDaSemana = 'Terça'
  break;
  case 3: diaDaSemana = 'Quarta'
  break;
  case 4: diaDaSemana = 'Quinta'
  break;
  case 5: diaDaSemana = 'Sexta'
  break;
  case 6: diaDaSemana = 'Sábado'
  break;
  default: diaDaSemana = 'Não foi possível saber o dia da semana'
}

console.log(diaDaSemana)

/*
Você pode fazer uma função e ao invés de break, passar um "return"
*/
 


