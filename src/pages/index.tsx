import Head from 'next/head';
import Link from 'next/link';
import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Biblioteca dos sonhos</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.content}>
          <span>Olá seja bem vindo</span>
          <p>
            Somos a blibioteca dos seus sonhos, {'\n'}
            compartilhe-os em forma de texto com a gente.
          </p>

          <Link href="/dashboard">
            <button>Entrar</button>
          </Link>
        </section>
        <img src="/books.svg" alt="imagem de logo" />
      </main>
    </>
  );
}
