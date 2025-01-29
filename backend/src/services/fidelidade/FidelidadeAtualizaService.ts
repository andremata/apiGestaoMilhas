import prismaClient from "../../prisma";

interface FidelidadeAtualizaRequest{
    fidelidade_id: string;
    nome: string;
    foto: string
}

class FidelidadeAtualizaService{
    async execute({
        fidelidade_id,
        nome,
        foto}: FidelidadeAtualizaRequest){
        
        const fidelidade = await prismaClient.fidelidade.update({
            where:{
                id: fidelidade_id
            },
            data:{
                nome: nome,
                foto: foto
            }
        });

        return fidelidade;
    }
}

export { FidelidadeAtualizaService }