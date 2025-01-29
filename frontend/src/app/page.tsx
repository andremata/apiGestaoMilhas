import Image from "next/image";
import styles from "./page.module.scss";
import logo from '../../public/logo.png';
import Link from 'next/link';

export default function Home() {
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
          <form>
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
              name="password"
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
