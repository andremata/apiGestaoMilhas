import prismaClient from "../../prisma";

interface MilhaRequest{
    fidelidade_id: string;
}

class MilhaBuscaPorFidelidadeService{
    async execute({ fidelidade_id }: MilhaRequest){
        const milhas = await prismaClient.milha.findMany({
            where:{
                fidelidade_id: fidelidade_id
            },
            orderBy:{
                datacadastro: 'desc'
            }
        });

        return milhas;
    }
}

export { MilhaBuscaPorFidelidadeService }