import express from "express";
import db from "./config/dbConnect.js";
import produtos from "./models/Produto.js";
db.on("error",console.log.bind(console,"Erro de conexão"));
db.once("open",()=>{console.log("Conexão com o banco realizada com sucesso");});
const app = express();

app.use(express.json());
app.get("/produtos",(req,res)=>{
    produtos.find((err,produtos)=>{
        res.send(produtos)
    })
});
export default app;