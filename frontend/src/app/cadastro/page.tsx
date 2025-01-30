import Image from "next/image";
import styles from "../page.module.scss";
import Link from "next/link";
import logo from '../../../public/logo.png';
import { api } from '@/services/api';
import { redirect } from 'next/navigation';

export default function Cadastro(){
    async function cadastrar(formData: FormData){
        "use server"

        const nome = formData.get("nome");
        const telefone = formData.get("telefone");
        const email = formData.get("email");
        const senha = formData.get("senha");
        const status = "ATIVO";

        if(nome === "" || email === "" || senha === ""){
            return;
        }

        try{
            await api.post("/usuario", {
                nome,
                telefone,
                email,
                senha,
                status
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
                    <h1>Crie sua conta</h1>
                    <form action={cadastrar}>
                        <input 
                            type="text"
                            required
                            name="nome"
                            placeholder="Digite seu nome"
                            className={styles.input}>
                        </input>
                        <input 
                            type="text"
                            required
                            name="telefone"
                            placeholder="(11) 98815-1234"
                            className={styles.input}>
                        </input>
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

                        <button type="submit" className={styles.button}>
                            CADASTRAR
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