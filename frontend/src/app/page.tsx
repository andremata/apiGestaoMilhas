import Image from "next/image";
import styles from "./page.module.scss";
import logo from '../../public/logo.png';
import Link from 'next/link';
import { api } from "@/services/api";
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default function Home() {

  async function login(formData: FormData){
    "use server"

    const email = formData.get("email");
    const senha = formData.get("senha");

    if(email === "" || senha === ""){
      return;
    }

    try{
      const response = await api.post("/session", {
        email,
        senha
      });

      if(!response.data.token){
        return;
      }

      console.log(response.data);

      const time = 60 * 60 * 24 * 30 * 1000;
      const cookieStore = await cookies();

      cookieStore.set("session", response.data.token, {
        maxAge: time,
        path: "/",
        httpOnly: false,
        secure: process.env.NODE_ENV === "production"
      });

    }catch(err){
      console.log(err);
      return;
    }

    redirect("/dashboard");
  }

  return (
    <>
      <div className={styles.containerCenter}>
        <Image
          src={logo}
          alt="Gestão de Milhas"
          width={250}
          height={250}
        />

        <section className={styles.login}>
          <form action={login}>
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
              ENTRAR
            </button>
          </form>

          <Link href="/cadastro" className={styles.texto}>
            Não pussui uma conta? Cadastre-se
          </Link>

          <Link href="/recuperar" className={styles.texto}>
            Esqueceu sua senha? Recupere aqui
          </Link>


        </section>
      </div>
    </>
  );
}
