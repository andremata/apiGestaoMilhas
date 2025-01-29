import { Request, Response } from 'express';
import { FidelidadeAtualizaService } from '../../services/fidelidade/FidelidadeAtualizaService';

class FidelidadeAtualizaController{
    async handle(req: Request, res: Response){
        const {
            fidelidade_id,
            nome,
            foto } = req.body;

        const fidelidadeAtualizaService = new FidelidadeAtualizaService();

        const fidelidade = await fidelidadeAtualizaService.execute({
            fidelidade_id,
            nome,
            foto,
        });

        return res.json(fidelidade);
    }
}

export { FidelidadeAtualizaController }