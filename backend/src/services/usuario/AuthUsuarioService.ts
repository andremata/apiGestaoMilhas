import prismaClient from "../../prisma";
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface AuthUsuarioRequest{
    email: string;
    senha: string;
}

class AuthUsuarioService{
    async execute({
        email,
        senha }: AuthUsuarioRequest){

        this.validarDados(email, senha);

        const usuario = await prismaClient.usuario.findFirst({
            where:{
                email: email
            }
        });

        if(!usuario){
            throw new Error("E-mail ou senha incorretos!");
        }

        const senhaIguais = await compare(senha, usuario.senha);

        if(!senhaIguais){
            throw new Error("E-mail ou senha incorretos!");
        }

        if(usuario.status != 'ATIVO'){
            throw new Error("Usuário sem acesso, contate o suporte!");
        }

        const token = sign(
            {
                name: usuario.nome,
                email: usuario.email
            },
            process.env.JWT_SECRET,
            {
                subject: usuario.id,
                expiresIn: '30d'
            }
        )

        return {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            token: token
        }
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

export { AuthUsuarioService };