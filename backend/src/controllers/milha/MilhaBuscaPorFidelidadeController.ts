import { Request, Response } from 'express';
import { MilhaBuscaPorFidelidadeService } from '../../services/milha/MilhaBuscaPorFidelidadeService';

class MilhaBuscaPorFidelidadeController{
    async handle(req: Request, res: Response){
        const fidelidade_id = req.query.fidelidade_id as string;

        const milhasPorFidelidade = new MilhaBuscaPorFidelidadeService();

        const milhas = await milhasPorFidelidade.execute({ fidelidade_id });

        return res.json(milhas);
    }
}

export { MilhaBuscaPorFidelidadeController }