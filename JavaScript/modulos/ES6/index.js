/*
O ES6 introduziu um sistema de módulos nativo para JavaScript.

Export

Duas formas principais:
1. Named Exports
Permite exportar múltiplos itens de um módulo.

export const nome = "Nome"
export function

depois da declaração:
const soma(x,y) => return x+y
export {soma}

Renomeando durante a exportação:
function multiplicar(a, b) { return a * b; }
export { multiplicar as mult };

2. Default Export
Cada módulo pode ter apenas uma exportação padrão.

export default class Usuario {
  constructor(nome) {
    this.nome = nome;
  }
}

Ou

const usuario = {
  nome: 'João',
  idade: 30
};
export default usuario;


Import

Importando Name Exports

Importando itens específicos
import { PI, somar } from './math.js';
console.log(PI);        // 3.14159
console.log(somar(2, 3)); // 5

Renomeando durante a importação
import { subtrair as sub } from './math.js';
console.log(sub(5, 2)); // 3

Importando todos os exports nomeados como um objeto
import * as MathUtils from './math.js';
console.log(MathUtils.PI);        // 3.14159
console.log(MathUtils.somar(2, 3)); // 5

Importando Default Export
import Usuario from './usuario.js';
const user = new Usuario('Maria');

O nome na importação pode ser qualquer um
import MeuUsuario from './usuario.js';
console.log(MeuUsuario.nome); // 'João'

Importando Default e Named Export juntos
import Usuario, { ROLES, verificarPermissao } from './usuario.js';


Caracterísitcas Importantes
1. Hoisting não funciona com imports.
2. Imports são estáticos.
3. Módulos tem escopo próprio.
4. Módulos são executados apenas uma vez.
5. Módulos são sempre em strict mode.

Default Exports vs Named Exports
1. Quantidade por módulo:
Named: Podem ser vários em um arquivo.
Default: Apenas 1 por arquivo.

2. Sintaxe de exportação.

3. Sintaxe de importação.

4. Uso de alias.
Named Export: Requer "as" para renomear na importação.
Default Export: Pode usar qualquer nome na importação, sem a necessidade de "as".

5. Importação em massa
Named Export pode usar o import * para importar.

6. Clareza
Named Export: Você sabe exatamente o que está importando.
Default: Nome pode variar.

A escolha varia, o mais indicado é utilizar default para o item principal de um 
módulo e named exports quando o módulo fornecer funcionalidades independentes.
*/
