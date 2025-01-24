import { Request, Response } from 'express';
import { MilhaCadastroService } from '../../services/milha/MilhaCadastroService';

class MilhaCadastroController{
    async handle(req: Request, res: Response){
        const {
            data,
            quantidade,
            valorunitario,
            valortotal,
            observacao,
            fidelidade_id } = req.body;

        const milhaCadastroService = new MilhaCadastroService();

        const milha = milhaCadastroService.execute({
            data,
            quantidade,
            valorunitario,
            valortotal,
            observacao,
            fidelidade_id
        });

        return res.json(milha);
    }
}

export { MilhaCadastroController }