const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));

/* 
Aplicar o middleware, ou seja, dizer para o express (app)
utilizar o routes.
 */
app.use(routes);

app.listen(3333);
