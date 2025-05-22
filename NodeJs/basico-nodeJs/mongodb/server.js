require("dotenv").config()
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

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public")));
app.use(routes);
app.use(middlewareGlobal);

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

/*
app.on escuta o evento que foi emitido.
Nesse caso, o evento "pronto"
*/
app.on("pronto", () => {
  app.listen(3333);
});
