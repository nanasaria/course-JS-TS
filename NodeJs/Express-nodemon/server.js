const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <form action ="/" method="POST">
        Nome: <input type="text" name="nome">
        Sobrenome: <input type="text" name="sobrenome">
        <button>Enviar</button>
    </form>
    `);
});

app.post("/", (req, res) => {
  res.send("Recebi o formulário ;)");
  /* 
    req.body é o que vem para POST ou PUT.
    É o corpo da requisição que vem de um formulário.
    Para acessar, acessa a propriedade "name" do formulário.
  */
  console.log(req.body.nome);
  console.log(req.body.sobrenome);
});

/* 
Para receber o parâmetro via URL coloque : e o nome do 
parâmetro, mas dessa forma é obrigatório passar o parâmetro 
*/
app.get("/param/:idUsuarios", (req, res) => {
  /* 
    O req.params é um objeto e você pode manipulá-lo 
    chamando req.params
   */
  res.send(req.params.idUsuarios);
});

/* Para deixar o parâmetro como opcional, coloque um ? */
app.get("/pdinamico/:idUsuarios?/:parametro?", (req, res) => {
  res.send(req.params.idUsuarios);
});

/* 
Para passar uma query, é só passar na URL
/query?nome=britney&sobrenome=spears
*/
app.get("/query", (req, res) => {
  /* 
    O req.query é um objeto e você pode manipulá-lo 
    chamando req.query
   */
  res.send(req.query);
});

app.listen(3333);
