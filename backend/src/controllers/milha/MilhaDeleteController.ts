import { Request, Response } from 'express';
import { MilhaDeleteService } from '../../services/milha/MilhaDeleteService';

class MilhaDeleteController{
    async handle(req: Request, res: Response){
        const milha_id = req.query.milha_id as string;

        const milhaDeleteService = new MilhaDeleteService();

        const milha = await milhaDeleteService.execute({ milha_id });

        return res.json(milha);
    }
}

export { MilhaDeleteController }