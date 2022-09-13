import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema(
    {
        id: { type: String },
        produto:{type: String, required: true},
        descricao:{type: String, required: true},
        price: {type: Number},
        categoria: {type: String},
        imagem: {type: String, required: true},
        ativo: {type: Boolean, required: true}
    }
)
const produtos= mongoose.model("produtos", produtoSchema);
export default produtos;