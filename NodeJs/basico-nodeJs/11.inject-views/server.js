require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");
const helmet = require("helmet");
const csrf = require("csurf");
const {
  middlewareGlobal,
  checkCsrfError,
  csrfMiddleware,
} = require("./src/middlewares/middleware");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.emit("pronto");
  })
  .catch((e) => console.log(e));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public")));
app.use(helmet());
app.use(csrf());
app.use(routes);
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);

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

app.on("pronto", () => {
  app.listen(3333);
});
