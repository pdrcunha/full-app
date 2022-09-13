import produtos from "../models/Produto.js";


class ProdutosController {
    static listarProdutos = (req, res) => {
        produtos.find((err, produtos) => {
            res.send(produtos)
        })
    }
    static listarProdutosPorID = (req, res) => {
        let id = req.params.id
        produtos.findById(id, (error, produtos) => {
            if (!error) {
                res.send(produtos)
            } else {
                res.status(500).send({ menssagem: `Falaha ao buscar o produto ${error}` })
            }
        })
    }
    static listarProdutosPorCategoria = (req, res) => {
        let value = req.params.value;
        produtos.find({'categoria': value },{}, (error, produtos) => {
            if (!error) {
                res.send(produtos)
            } else {
                res.status(500).send({ menssagem: `Falaha ao buscar o produto ${error}` })
            }
        })
    }
    static cadatrarProdutos = ((req, res) => {
        let produto = new produtos(req.body);

        produto.save((error) => {
            if (error) {
                res.status(500).send({ menssagem: `Falaha ao cadastar o produto ${error}` })
            } else {
                res.status(201).send(produto.toJSON())
            }
        })
    })
    static atualizarProduto = ((req, res) => {
        let id = req.params.id;
        produtos.findByIdAndUpdate(id, { $set: req.body }, (error) => {
            if (!error) {
                res.send({ menssagem: "Produto atualizado com sucesso" })
            } else {
                res.status(500).send({ menssagem: `Houve um erro: ${error}` })
            }
        });
    })
    static deletarProduto = ((req, res) => {
        let id = req.params.id;
        produtos.findByIdAndDelete(id, (error) => {
            if (!error) {
                res.send({ menssagem: "Produto Deletado com sucesso" })
            } else {
                res.status(500).send({ menssagem: `Houve um erro: ${error}` })
            }
        })
    })
}

export default ProdutosController;