/*
Módulos

Módulos são basicamente arquivos que encapsulam código para
que ele possa ser organizado, reutilizado e isolado dentro
de uma aplicação.
Permite que o código seja divido em partes menores e só
carregar o que for necessário em cada parte do projeto.

Temos duas variáveis internas dentro do módulo
__filename -> Nome do arquivo atual
__dirname -> Pasta atual
*/
console.log(__filename);
console.log(__dirname);

/*
Para manipular caminhos:

path.resolve() -> Para resolver como vai criar o caminho
corretamente.

Recebe como argumento o diretório e o restante dos caminhos
como string.

Quando passamos .. estamos dizendo para voltar 1 pasta
Quando passamos apenas o . estamos dizendo que se refere a
pasta atual.
*/
const path = require("path");
console.log(path.resolve(__dirname, "..", "JavaScript"));
/* Retorno: JavaScript-TypeScript\JavaScript */

console.log(path.resolve(__dirname, ".", "Módulos", "app"));
/* Retorno: NodeJs\Módulos\app */

/* 
Arquivos 

o fs tem funções síncronas e assíncronas.

readdir() -> Lê os diretórios.
stat() -> Inspecionar detalhes de um arquivo.
writeFile() -> Cria e escreve em um arquivo.
readFile() -> Lê conteúdo de um arquivo.

OBSERVAÇÃO IMPORTANTE: Quando retornamos de uma função 
assíncrona, retornamos uma promessa.
*/
