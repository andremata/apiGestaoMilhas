import { Request, Response } from 'express';
import { UsuarioAuthService } from '../../services/usuario/UsuarioAuthService'

class UsuarioAuthController{
    async handle(req: Request, res: Response){
        const { email, senha } = req.body;

        const usuarioAuthService = new UsuarioAuthService();
        const retorno = await usuarioAuthService.execute({
            email,
            senha
        });

        return res.json(retorno);
    }
}

export { UsuarioAuthController };