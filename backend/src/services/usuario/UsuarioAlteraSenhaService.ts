import prismaClient from "../../prisma";
import { hash } from 'bcryptjs';

interface UsuarioAlteraSenhaRequest{
    email: string;
    senha: string;
}

class UsuarioAlteraSenhaService{
    async execute({
        email,
        senha}: UsuarioAlteraSenhaRequest){

        this.validarDados(email, senha);

        const usuarioExiste = await prismaClient.usuario.findFirst({
            where:{
                email: email
            }
        });

        if(!usuarioExiste){
            throw new Error("Este e-mail não esta cadastrado!");
        }

        const usuarioEncontrado = await prismaClient.usuario.findFirst({
            where:{
                email: email
            }
        });

        const senhaHash = await hash(senha, 8);

        const usuario = await prismaClient.usuario.update({
            where:{
                id: usuarioEncontrado.id,
            },
            data:{
                senha: senhaHash,
            }
        });

        return usuario;
    }

    validarDados(email: string, senha: string){
        if(!email){
            throw new Error("Informe seu e-mail!");
        }

        if(!senha){
            throw new Error("Informe sua senha!");
        }
    }
}

export { UsuarioAlteraSenhaService }