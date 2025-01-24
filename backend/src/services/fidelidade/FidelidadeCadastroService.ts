import prismaClient from "../../prisma";

interface FidelidadeRequest{
    nome: string;
    foto: string;
}

class FidelidadeCadastroService{
    async execute({
        nome,
        foto}: FidelidadeRequest){

        this.validarDados(nome);
        
        const fidelidade = await prismaClient.fidelidade.create({
            data:{
                nome: nome,
                foto: foto,
            },
            select:{
                id: true,
                nome: true,
                foto: true,
            }
        });

        return fidelidade;
    }

    validarDados(nome: string): void {
        if(!nome){
            throw new Error("Informe o nome!");
        }
    }
}

export { FidelidadeCadastroService }