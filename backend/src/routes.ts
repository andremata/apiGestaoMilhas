import { Router } from "express";
import multer from 'multer';
import { UsuarioController } from './controllers/usuario/UsuarioController';
import { UsuarioAuthController } from './controllers/usuario/UsuarioAuthController';
import { UsuarioDetalheController } from "./controllers/usuario/UsuarioDetalheController";
import { FidelidadeCadastroController } from './controllers/fidelidade/FidelidadeCadastroController';
import { FidelidadeBuscaController } from './controllers/fidelidade/FidelidadeBuscaController';
import { MilhaCadastroController } from "./controllers/milha/MilhaCadastroController";
import { MilhaBuscaController } from "./controllers/milha/MilhaBuscaController";
import { isAutenticado } from './middlewares/isAutenticado';
import uploadConfig from './config/multer';

const router = Router();

const upload = multer(uploadConfig.upload("./img"));

//Usuarios
router.post('/usuarios', new UsuarioController().handle);
router.post('/session', new UsuarioAuthController().handle);
router.get('/me', isAutenticado, new UsuarioDetalheController().handle);

//Fidelidades
router.post('/fidelidade', isAutenticado, upload.single('file'), new FidelidadeCadastroController().handle);
router.get('/fidelidade', isAutenticado, new FidelidadeBuscaController().handle);

//Milhas
router.post('/milha', isAutenticado, new MilhaCadastroController().handle);
router.get('/milha', isAutenticado, new MilhaBuscaController().handle);

export { router };