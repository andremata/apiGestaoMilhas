import prismaClient from "../../prisma";

interface MilhaRequest{
    milha_id: string
}

class MilhaDeleteService{
    async execute({ milha_id }: MilhaRequest){
        const milha = await prismaClient.milha.delete({
            where:{
                id: milha_id
            }
        });

        return milha;
    }
}

export { MilhaDeleteService }