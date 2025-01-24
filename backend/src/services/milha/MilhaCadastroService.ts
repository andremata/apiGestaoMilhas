import prismaClient from "../../prisma";

interface MilhaCadastro{
    data: string;
    quantidade: string;
    valorunitario: string;
    valortotal: string;
    observacao: string;
    fidelidade_id: string;
}

class MilhaCadastroService{
    async execute({
        data,
        quantidade,
        valorunitario,
        valortotal,
        observacao,
        fidelidade_id}: MilhaCadastro){

        this.validarDados(data, quantidade);

        const milha = await prismaClient.milha.create({
            data:{
                data: data,
                quantidade: quantidade,
                valorunitario: valorunitario,
                valortotal: valortotal,
                observacao: observacao,
                fidelidade_id: fidelidade_id,
            },
            select:{
                data: true,
                quantidade: true,
                valorunitario: true,
                valortotal: true,
                observacao: true,
            }
        });

        return milha;
    }

    validarDados(data: string, quantidade: string): void{
        if(!data){
            throw new Error("Informe uma data!");
        }

        if(!quantidade){
            throw new Error("Informe uma quantidade!");
        }
    }
}

export { MilhaCadastroService }