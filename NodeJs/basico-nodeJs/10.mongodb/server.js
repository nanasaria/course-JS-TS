require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");
const { middlewareGlobal } = require("./src/middlewares/middleware");

const mongoose = require("mongoose");

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    /*
    Emit significa disparar um evento.
    Usamos app.emit para disparar um evento com nome 
    específico e, opcionalmente, enviar dados junto
    com ele.

    Nesse caso, emitimos o evento "pronto".
     */
    app.emit("pronto");
  })
  .catch((e) => console.log(e));

const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public")));
app.use(routes);
app.use(middlewareGlobal);

/* 
Utilizando sessão 
session({...}) -> Configura o middleware de sessão do Express.
secret -> chave secreta usada para assinar e verificar a integridade
do cookie da sessão.
store -> Onde armazenar a sessão
resave -> Se quer salvar a sessão no servidor quando nada
se altera.
saveUninitialized: false -> Evita criar uma sessão nova sem conteúdo.
cookie: { ... } -> Configura o cookie que vai para o servidor.
*/
const sessionOptions = session({
  secret: "minha-chave-secreta",
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});

app.use(sessionOptions);
app.use(flash());

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

/*
app.on escuta o evento que foi emitido.
Nesse caso, o evento "pronto"
*/
app.on("pronto", () => {
  app.listen(3333);
});
