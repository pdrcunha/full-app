import usuarios from "../models/Usuario.js";

class UsuariosController {
    static listarUsuarios = (req, res) => {
        usuarios.find((err, usuario) => {
            res.send(usuario);
        })
    }
    static criarUsuarios=(req,res)=>{
        let usuario= new usuarios(req.body);
        usuario.save((error)=>{
            if(error){
                res.status(500).send({menssagem:`Falaha ao cadastar o produto ${error}`});
            }else{
                res.send(usuario.toJSON());
            }
        })
    }
}

export default UsuariosController;