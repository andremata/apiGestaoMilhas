import { Request, Response } from 'express';
import { UsuarioDetalheService } from '../../services/usuario/UsuarioDetalheService';

class UsuarioDetalheController{
    async handle(req: Request, res: Response){
        const usuarioId = req.usuarioId;

        console.log("id:", usuarioId);

        const usuarioDetalheService = new UsuarioDetalheService();

        const usuario = await usuarioDetalheService.execute(usuarioId);

        return res.json(usuario);
    }
}

export { UsuarioDetalheController }