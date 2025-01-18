import { Request, Response } from 'express';
import { UsuarioService } from '../../services/usuario/UsuarioService';

class UsuarioController{
    async handle(req: Request, res: Response){
        const {nome, email, senha, telefone, status} = req.body;

        const usuarioService = new UsuarioService();
        const retorno = await usuarioService.execute({
            nome,
            email,
            senha,
            telefone,
            status
        });

        return res.json(retorno);
    }
}

export { UsuarioController }