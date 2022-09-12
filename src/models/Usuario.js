import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
    {
        id: { type: String },
        usuario:{type: String, required: true},
        nome:{type: String, required: true},
        email:{type: String, required: true},
        senha: {type: String,required: true},
        imagem: {type: String}
    }
)
const usuario= mongoose.model("usuarios", usuarioSchema);
export default usuario;