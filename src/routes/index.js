import express from "express";
import produtos from "./produtosRoute.js";
import usuarios from "./usuariosRoute.js";
const routes=(app)=>{
    app.route("/").get((req,res)=>{res.send("Index")})
    app.use(
        express.json(),
        produtos,
        usuarios
    )
}
export default routes