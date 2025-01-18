import prismaClient from '../../prisma';
import { hash } from 'bcryptjs';

interface UsuarioRequest{
    nome: string;
    email: string;
    senha: string;
    telefone: string;
    status: string;
}

class UsuarioService{
    async execute({ 
        nome, 
        email, 
        senha, 
        telefone, 
        status }: UsuarioRequest){

        this.validarDados(nome, email, senha, telefone);

        const usuarioExiste = await prismaClient.usuario.findFirst({
            where:{
                email: email
            }
        });

        if(usuarioExiste){
            throw new Error("Este e-mail já esta cadastrado!");
        }

        const senhaHash = await hash(senha, 8);

        const usuario = await prismaClient.usuario.create({
            data:{
                nome: nome,
                email: email,
                senha: senhaHash,
                telefone: telefone,
                status: status,
            },
            select:{
                id: true,
                nome: true,
                telefone: true,
                status: true,
            }
        })

        return usuario;
    }

    validarDados(nome: string, email: string, senha: string, telefone: string): void {
        if(!nome){
            throw new Error("Informe seu nome!");
        }

        if(!email){
            throw new Error("Informe seu e-mail!");
        }

        if(!senha){
            throw new Error("Informe sua senha!");
        }

        if(!telefone){
            throw new Error("Informe seu telefone!");
        }
    }
}

export { UsuarioService }