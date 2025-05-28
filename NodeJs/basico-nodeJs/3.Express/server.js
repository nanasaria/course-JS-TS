/* Importa o express */
const express = require("express");

/* Executa o express */
const app = express();

/* 
Utilizamos métodos HTTP 
como: GET, POST, PUT, DELETE

Nesse caso dizemos servidor (app) entregue a rota página
que está na rota "/".

express (app) recebe como parâmetro:
1. rota
2. Função
    A função recebe dois parâmetros:
    - Requisição: Pedido para o servidor.
    - Resposta: Resposta do servidor.

Cliente-Servidor: Cliente faz uma requisição e o servidor
responde.

Podemos ter diversos métodos na mesma rota, porque o 
servidor lida de forma diferente com cada método.
*/

app.get("/", (req, res) => {
  res.send(`
    <form action ="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
    </form>
    `);
});

/* 
O verbo get e post são tratados de forma diferente 
pelo servidor e pelo navegador.
*/
app.post("/", (req, res) => {
  res.send("Recebi o formulário ;)");
});

/* 
Listen é usado para o servidor ouvir uma porta.
Nesse caso, estamos dizendo:

Express (app) escuta a porta 3333 
*/
app.listen(3333);
