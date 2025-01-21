import { Router } from "express";
import { UsuarioController } from './controllers/usuario/UsuarioController';
import { UsuarioAuthController } from './controllers/usuario/UsuarioAuthController';
import { UsuarioDetalheController } from "./controllers/usuario/UsuarioDetalheController";
import { isAutenticado } from './middlewares/isAutenticado';

const router = Router();

router.post('/usuarios', new UsuarioController().handle);
router.post('/session', new UsuarioAuthController().handle);
router.get('/me', isAutenticado, new UsuarioDetalheController().handle);

/*router.get('/teste', (req: any, res: any) => {
    throw new Error('Erro ao fazer requisição');
    return res.json({ ok: true })
})*/

export { router };