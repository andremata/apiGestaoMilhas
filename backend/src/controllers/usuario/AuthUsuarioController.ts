import { Request, Response } from 'express';
import { AuthUsuarioService } from '../../services/usuario/AuthUsuarioService'

class AuthUsuarioController{
    async handle(req: Request, res: Response){
        const { email, senha } = req.body;

        const authUsuarioService = new AuthUsuarioService();
        const retorno = await authUsuarioService.execute({
            email,
            senha
        });

        return res.json(retorno);
    }
}

export { AuthUsuarioController };