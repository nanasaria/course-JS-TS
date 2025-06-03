import { Router } from "express";
import userController from "../controllers/UserController";

const router = new Router();

/* Funções vão dentro do controller */
router.post("/", userController.store);
router.get("/", userController.index);
router.get("/:id", userController.show);
router.put("/:id", userController.update);
router.delete("/:id", userController.delete);

export default router;

/*
index -> Lista todos os usuários
store/create -> Cria um novo usuário
delete -> Apaga um novo usuário
show -> Mostra um usuário
update -> Atualiza um usuário
*/
