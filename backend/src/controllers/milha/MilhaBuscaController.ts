import { Request, Response } from 'express';
import { MilhaBuscaService } from '../../services/milha/MilhaBuscaService';

class MilhaBuscaController{
    async handle(req: Request, res: Response){
        const milhaBuscaService = new MilhaBuscaService();

        const milhas = await milhaBuscaService.execute();

        return res.json(milhas);
    }
}

export { MilhaBuscaController }