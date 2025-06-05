import { Router } from "express";
import userController from "../controllers/UserController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

/* Funções vão dentro do controller */
router.post("/", userController.store);
router.put("/", loginRequired, userController.update);
router.delete("/", loginRequired, userController.delete);

export default router;

/*
index -> Lista todos os usuários
store/create -> Cria um novo usuário
delete -> Apaga um novo usuário
show -> Mostra um usuário
update -> Atualiza um usuário
*/
