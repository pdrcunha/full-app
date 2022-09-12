import usuarios from "../models/Usuario.js";

class UsuariosController {
    static listarUsuarios = (req, res) => {
        usuarios.find((err, usuario) => {
            res.send(usuario);
        })
    }
    static listarUsuariosPorId=(req,res)=>{
        let id= req.params.id;
        usuarios.findById(id,(error, usuarios)=>{
            if(!error){
                res.send(usuarios)
            }else{
                res.status(500).send({menssagem:`Falaha ao buscar o usuario ${error}`})
            }
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
    static atualizarUsuarios=(req,res)=>{
        let id=req.params.id;
        usuarios.findByIdAndUpdate(id,{$set: req.body}, (error)=>{
            if(!error){
                res.send({menssagem:"Usuario atualizado com sucesso"})
            }else{
                res.status(500).send({menssagem:`Houve um erro: ${error}`})
            }
        })
    }
    static deletarUsuarios=(req,res)=>{
        let id=req.params.id;
        usuarios.findByIdAndDelete(id,(error)=>{
            if(!error){
                res.send({menssagem:"Usuario Deletado com sucesso"})
            }else{
                res.status(500).send({menssagem:`Houve um erro: ${error}`})
            }
        })
    }
}

export default UsuariosController;