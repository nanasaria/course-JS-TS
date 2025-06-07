import { Router } from "express";
import loginRequired from "../middlewares/loginRequired";

import fotoController from "../controllers/FotoController";

const router = new Router();

/*
Funções vão dentro do controller
*/
router.get("/", loginRequired, fotoController.store);

export default router;
