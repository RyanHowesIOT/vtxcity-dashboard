import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Hub.module.css'

export default function Hub() {
  return (
    <div className={styles.container}>
      <Head>
        <title>City Hub</title>
        <meta name="description" content="Vortex City Hub" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Vortex City Hub
        </h1>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h2>Location 1</h2>
            <p>City Scanning</p>
          </a>

          <a href="" className={styles.card}>
            <h2>Location 2</h2>
            <p>City Scanning</p>
          </a>

          <a
            href="" className={styles.card}>
            <h2>Location 3</h2>
            <p>City Scanning</p>
          </a>

          <a href="" className={styles.card}>
            <h2>Location 4</h2>
            <p>City Scanning</p>
          </a>

          <a href="" className={styles.card}>
            <h2>Location 5</h2>
            <p>City Scanning</p>
          </a>

          <a href="" className={styles.card}>
            <h2>Location 6</h2>
            <p>City Scanning</p>
          </a>

          <a href="" className={styles.card}>
            <h2>Location 7</h2>
            <p>City Scanning</p>
          </a>

          <a href="" className={styles.card}>
            <h2>Location 8</h2>
            <p>City Scanning</p>
          </a>

          <a href="" className={styles.card}>
            <h2>Location 9</h2>
            <p>City Scanning</p>
          </a>

          <a href="" className={styles.card}>
            <h2>Location 10</h2>
            <p>City Scanning</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
