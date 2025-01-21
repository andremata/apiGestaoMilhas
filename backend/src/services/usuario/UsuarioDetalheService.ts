import prismaClient from "../../prisma";

class UsuarioDetalheService{
    async execute(usuarioId: string){
        const usuario = await prismaClient.usuario.findFirst({
            where:{
                id: usuarioId
            },
            select:{
                id: true,
                nome: true,
                email: true,
                telefone: true,
                status: true,
            }
        });

        return usuario;
    }
}

export { UsuarioDetalheService }