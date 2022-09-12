import express from "express";
import usuariosController from "../controller/usuariosController.js";
const router=express.Router();

router.get("/usuarios",usuariosController.listarUsuarios)
.get("/usuarios/:id",usuariosController.listarUsuariosPorId)
.post("/usuarios",usuariosController.criarUsuarios)
.put("/usuarios/:id",usuariosController.atualizarUsuarios)
.delete("/usuarios/:id",usuariosController.deletarUsuarios)
export default router;