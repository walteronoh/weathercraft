import Head from 'next/head'
import About from '../components/about/about'
import NavBar from '../components/navbar/navbar'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Walter Kiprono</title>
        <meta name="description" content="Walter Kiprono Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <About />
    </div>
  )
}
