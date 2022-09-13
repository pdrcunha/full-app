import express from "express";
import produtosController from "../controller/produtosController.js";
const router=express.Router();

router.get("/produtos",produtosController.listarProdutos)
.post("/produtos",produtosController.cadatrarProdutos)
.put("/produtos/:id",produtosController.atualizarProduto)
.get("/produtos/:id",produtosController.listarProdutosPorID)
.get("/produtos/categoria/:value",produtosController.listarProdutosPorCategoria)
.delete("/produtos/:id",produtosController.deletarProduto)

export default router;