import prismaClient from "../../prisma";

interface MilhaDetalheRequest{
    milha_id: string
}

class MilhaDetalheService{
    async execute({ milha_id }: MilhaDetalheRequest){
        const milha = await prismaClient.milha.findUnique({
            where:{
                id: milha_id
            }
        });

        return milha;
    }
}

export { MilhaDetalheService }