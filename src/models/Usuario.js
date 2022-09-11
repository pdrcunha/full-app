import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
    {
        _id: { type: String },
        usuario:{type: String, required: true},
        nome:{type: String, required: true},
        email:{type: String, required: true},
        senha: {type: Number,required: true},
        imagem: {type: String}
    }
)
const usuario= mongoose.model("usuarios", usuarioSchema);
export default usuario;