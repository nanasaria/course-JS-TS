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

Express - Requisições

req.params -> Parâmetros por URL
https://www.site.com/1 -> Parâmetro

req.querys -> Query string na URL (?nome=joao)
https://www.site.com/1?nome=joao -> Para indicar que vai 
passar uma query ?query=

req.body => Corpo da requisição


app.use(express.urlencoded({ extended: true }))
O app.use é um método usado para registrar middlewares.

Middlewares -> São funções que executam algum código,
processam a requisição, podem modificar o objeto req ou res,
e então decidem se passam o controle para o próximo 
middleware ou encerram a resposta.

Resumo: app.use() serve para aplicar funções intermediárias
entre o cliente e o servidor em todas/algumas rotas.

Nesse caso do:
app.use(express.urlencoded({ extended: true }))

Esse middleware é usado para interpretar dados enviados 
em requisições HTTP com o 
Content-Type: application/x-www-form-urlencoded.

express.urlencoded() -> Converte textos recebidos via 
formulário para um objeto JavaScript. Dessa forma, o 
servidor consegue trabalhar com o retorno.

{extended: true} -> Parâmetro para definir qual biblioteca
de parsing será usada internamente.
extended: true -> Permite que objetos aninhados e arrays
sejam enviados.

extended: false -> Usa a biblioteca queryString que é mais
limitada e não consegue lidar tão bem com objetos 
complexos ou aninhados.

app.use(express.urlencoded({ extended: true })) 
É utilizado para que o Express consiga ler e interpretar 
corretamente os dados de formulários enviados no corpo de
uma requisição e transformar em um objeto Js.

Padrão MVC - (Model-View-Controller)
O padrão MVC divide uma aplicação em três componentes
fundamentais:

1. Model (Modelo): Gerencia os dados e a lógica de negócios
da aplicação.

2. View (Visualização): Apresenta a interface do usuário.

3. Controller (Controlador): Mantém o Model e a View em 
sincronia. É quem recebe as ações do usuário, atualiza
o modelo e informa à View para mostrar os resultados.

O MVC segue um fluxo de comunicação unidirecional:
- O Model nunca se comunica diretamente com a View.
- A View pode solicitar dados ao Model.
- O Controller é o único componente que pode modificar
o Model e a View.

O MVC pode ser usado em conjunto com outros padrões de
design, como o padrão Observer e o padrão Singleton.

Arquivo estático -> Arquivos fixos
*/
