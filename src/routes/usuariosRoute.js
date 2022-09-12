import express from "express";
import usuariosController from "../controller/usuariosController.js";
const router=express.Router();

router.get("/usuarios",usuariosController.listarUsuarios);
router.post("/usuarios",usuariosController.criarUsuarios);
export default router;