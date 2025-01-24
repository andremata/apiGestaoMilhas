import { Request, Response } from 'express';
import { FidelidadeBuscaService } from '../../services/fidelidade/FidelidadeBuscaService';

class FidelidadeBuscaController{
    async handle(req: Request, res: Response){
        const fidelidadeBuscaService = new FidelidadeBuscaService();

        const fidelidade = await fidelidadeBuscaService.execute();

        return res.json(fidelidade);
    }
}

export { FidelidadeBuscaController }