import { Request, Response } from 'express';
import { FidelidadeCadastroService } from '../../services/fidelidade/FidelidadeCadastroService';

class FidelidadeCadastroController{
    async handle(req: Request, res: Response){
        const { nome} = req.body;

        const fidelidadeService = new FidelidadeCadastroService();

        const { filename: foto } = req.file;

        const fidelidade = await fidelidadeService.execute({
            nome,
            foto,
        });

        return res.json(fidelidade);
    }
}

export { FidelidadeCadastroController }