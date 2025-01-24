import prismaClient from "../../prisma";

class FidelidadeBuscaService{
    async execute(){
        const fidelidade = await prismaClient.fidelidade.findMany({
            select:{
                id: true,
                nome: true,
                foto: true,
            }
        });

        return fidelidade;
    };
}

export { FidelidadeBuscaService }