/* Para importar, é necessário importar todo o módulo 
const mod1 = require("./mod1");
*/

/* Aparece tudo o que foi exportado
console.log(mod1);

O que loga:
{
  nome: 'Brooke',
  sobrenome: 'Davis',
  falaNome: [Function: falaNome],
  qualquerCoisa: 'O que eu quiser exportar'
}

mod1.falaNome();
*/

/* Destructuring */
const { nome, sobrenome, falaNome, Pessoa } = require("./mod1");

falaNome();

const p1 = new Pessoa("Luiz");
console.log(p1);
