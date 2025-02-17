import Image from "next/image";
import styles from "../page.module.scss";
import Link from "next/link";
import logo from '../../../public/logo.png';
import { api } from '@/services/api';
import { redirect } from 'next/navigation';
import { Exception } from "sass";

export default function Recuperar(){

    async function recuperar(formData: FormData){
        "use server"

        const email = formData.get("email");
        const senha = formData.get("senha");
        const senhaconfirmacao = formData.get("senhaconfirmacao");

        if(email === ""){
            throw new Error("Preencha o e-mail!");
        }

        if(senha === ""){
            throw new Error("Preencha senha!");
        }

        if(senha != senhaconfirmacao){
            throw new Error("As senhas precisão ser iguais!");
        }

        try{
            await api.post("/usuario/alterasenha", {
                email,
                senha
            })
        }catch(err){
            console.log("Erro");
            console.log(err);
        }

        redirect("/");
    }

    return(
        <>
            <div className={styles.containerCenter}>
                <Image
                    src={logo}
                    alt="Gestão de Milhas"
                    width={250}
                    height={250}
                />

                <section className={styles.login}>
                    <h1>Altere sua senha</h1>
                    <form action={recuperar}>
                        
                        <input 
                            type="email"
                            required
                            name="email"
                            placeholder="Digite seu e-mail"
                            className={styles.input}>
                        </input>

                        <input 
                            type="password"
                            required
                            name="senha"
                            placeholder="************"
                            className={styles.input}>
                        </input>

                        <input 
                            type="password"
                            required
                            name="senhaconfirmacao"
                            placeholder="************"
                            className={styles.input}>
                        </input>

                        <button type="submit" className={styles.button}>
                            ALTERAR
                        </button>
                    </form>

                    <Link href="/" className={styles.texto}>
                        Voltar para o login
                    </Link>
                </section>
            </div>
        </>
    )
}