import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from './styles/Home.module.css'
import Menu from '../../componentes/Menu'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Livraria Next</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Menu />

        <main className={styles.main}>
          <h1  className={styles.title}>Página Inicial</h1>
        </main>
      </div>

    </>
  )
}