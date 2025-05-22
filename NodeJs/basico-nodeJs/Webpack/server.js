const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");

app.use(express.urlencoded({ extended: true }));

/* 
Configuração para o Express usar arquivos estáticos.
*/
app.use(express.static(path.resolve(__dirname, "public")));

/* 
Aplicar o middleware, ou seja, dizer para o express (app)
utilizar o routes.
 */
app.use(routes);

/*
app.set() -> Esse método define uma variável de configuração
no Express.

Recebe como parâmetro:
1. key
2. caminho

Nesse caso, passamos a key views, para o Express saber onde
procurar os arquivos de view.
*/
app.set("views", path.resolve(__dirname, "src", "views"));

/* 
Define qual engine de template o Express vai usar para
renderizar as views da sua aplicação.
*/
app.set("view engine", "ejs");

app.listen(3333);
