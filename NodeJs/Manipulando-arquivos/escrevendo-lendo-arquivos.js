const fs = require("fs").promises;
const path = require("path");
const caminhoArquivo = path.resolve(__dirname, "teste.txt");

/* 
Método para escrever em um arquivo, se não existir, ele cria
caso exista, substitui.

Argumentos:
1. caminho do arquivo a ser modificado.
2. conteúdo
3. objeto options

A flag define como o arquivo será aberto para escrita. O
Node usa as mesmas flags do sistema operacional.

Flags mais usadas no writeFile:

w -> Escreve no arquivo. Se o arquivo existir, ele é 
sobrescrito. Se não existir, é criado (padrão do node).

a -> Adiciona no final do arquivo, se o arquivo não existir, 
é criado.

wx -> Escreve no arquivo, mas falha se o arquivo já existir.

ax -> Adiciona no final do arquivo, mas falha se o arquivo
já existir.

fs.writeFile(caminhoArquivo, "Frase 1\n", { flag: "a" });
*/

const caminhoArquivoJson = path.resolve(__dirname, "teste.json");

/* Manipulando JSON */
const pessoas = [
  { nome: "João" },
  { nome: "Maria" },
  { nome: "Lucas" },
  { nome: "Nathan" },
  { nome: "James" },
  { nome: "Brooke" },
  { nome: "Julian" },
];

/* Converte o objeto para JSON */
const json = JSON.stringify(pessoas, "", 2);

fs.writeFile(caminhoArquivoJson, json, { flag: "w" });

/* Ler arquivo */

async function leArquivo(caminho) {
  const dados = await fs.readFile(caminho, "utf8");
  renderizaDados(dados);
}

function renderizaDados(dados) {
  /* JSON.parse() -> Converte o JSON para um objeto */
  dados = JSON.parse(dados);
  dados.forEach((val) => console.log(val.nome));
}

leArquivo(caminhoArquivoJson);
