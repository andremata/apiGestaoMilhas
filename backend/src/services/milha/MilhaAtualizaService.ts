import prismaClient from "../../prisma";

interface MilhaAtualizaRequest{
    milha_id: string,
    data: string,
    quantidade: string,
    valorunitario: string,
    valortotal: string,
    observacao: string,
    fidelidade_id: string
}

class MilhaAtualizaService{
    async execute({
        milha_id,
        data,
        quantidade,
        valorunitario,
        valortotal,
        observacao,
        fidelidade_id
     }: MilhaAtualizaRequest){
        
        const milha = await prismaClient.milha.update({
            where:{
                id: milha_id,
            },
            data:{
                data: data,
                quantidade: quantidade,
                valorunitario: valorunitario,
                valortotal: valortotal,
                observacao: observacao,
                fidelidade_id: fidelidade_id
            }
        });

        return milha;
     }
}

export { MilhaAtualizaService }