import { Router } from "express";
import { UsuarioController } from './controllers/usuario/UsuarioController';
import { AuthUsuarioController } from './controllers/usuario/AuthUsuarioController';

const router = Router();

router.post('/usuarios', new UsuarioController().handle);
router.post('/session', new AuthUsuarioController().handle);

/*router.get('/teste', (req: any, res: any) => {
    throw new Error('Erro ao fazer requisição');
    return res.json({ ok: true })
})*/

export { router };