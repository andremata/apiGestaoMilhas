import prismaClient from "../../prisma";

class MilhaBuscaService{
    async execute(){
        const milhas = await prismaClient.milha.findMany({
            select:{
                id: true,
                data: true,
                quantidade: true,
                valorunitario: true,
                valortotal: true,
                observacao: true,
            }
        });

        return milhas;
    }
}

export { MilhaBuscaService }