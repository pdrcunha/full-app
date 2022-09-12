import produtos from "../models/Produto.js";


class ProdutosController{
static listarProdutos=(req,res)=>{
    produtos.find((err,produtos)=>{
        res.send(produtos)
    })
}
static cadatrarProdutos=((req,res)=>{
    let produto=new produtos(req.body);

    produto.save((error)=>{
        if(error){
            res.status(500).send({menssagem:`Falaha ao cadastar o produto ${error}`})
        }else{
            res.status(201).send(produto.toJSON())
        }
    })
})
}

export default ProdutosController;