import { Request, Response } from 'express';
import { UsuarioAlteraSenhaService } from '../../services/usuario/UsuarioAlteraSenhaService';

class UsuarioAlteraSenhaController{
    async handle(req: Request, res: Response){
        const { email, senha } = req.body;

        const usuarioAlteraSenha = new UsuarioAlteraSenhaService();

        const usuario = await usuarioAlteraSenha.execute({
            email, senha
        });

        return res.json(usuario);
    }
}

export { UsuarioAlteraSenhaController }