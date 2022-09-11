import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema(
    {
        _id: { type: String },
        produto:{type: String, required: true},
        descricao:{type: String, required: true},
        price: {type: Number},
        imagem: {type: String, required: true}
    }
)
const produtos= mongoose.model("produtos", produtoSchema);
export default produtos;