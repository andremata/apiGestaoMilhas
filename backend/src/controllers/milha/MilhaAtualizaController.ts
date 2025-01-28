import { Request, Response } from 'express';
import { MilhaAtualizaService } from '../../services/milha/MilhaAtualizaService';

class MilhaAtualizaController{
    async handle(req: Request, res: Response){
        const {
            milha_id,
            data,
            quantidade,
            valorunitario,
            valortotal,
            observacao,
            fidelidade_id } = req.body;
        
        const milhaAtualizaService = new MilhaAtualizaService();

        const milha = await milhaAtualizaService.execute({
            milha_id,
            data,
            quantidade,
            valorunitario,
            valortotal,
            observacao,
            fidelidade_id,
        });

        return res.json(milha);
    }
}

export { MilhaAtualizaController }