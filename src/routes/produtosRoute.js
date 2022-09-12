import express from "express";
import produtosController from "../controller/produtosController.js";
const router=express.Router();

router.get("/produtos",produtosController.listarProdutos);
router.post("/produtos",produtosController.cadatrarProdutos);

export default router;