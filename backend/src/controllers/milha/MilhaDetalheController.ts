import { Request, Response } from 'express';
import { MilhaDetalheService } from '../../services/milha/MilhaDetalheService';

class MilhaDetalheController{
    async handle(req: Request, res: Response){
        const milha_id = req.query.milha_id as string;

        const milhaDetalheService = new MilhaDetalheService();

        const milha = await milhaDetalheService.execute({ milha_id });

        return res.json(milha);
    }
}

export { MilhaDetalheController }