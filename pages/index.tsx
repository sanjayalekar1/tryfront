import type { NextPage } from 'next'
import Head from 'next/head'
import HomePage from '../components/HomePage'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Try Foundation</title>
        <meta name="Try Foundation" content="Social foundation for young generation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <HomePage />
    </div>
  )
}

export default Home
