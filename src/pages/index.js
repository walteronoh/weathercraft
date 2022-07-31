import Head from 'next/head'
import About from '../components/about/about'
import Topics from '../components/blogs/topics'
import Contacts from '../components/contacts/contacts'
import NavBar from '../components/navbar/navbar'
import Skills from '../components/skills/skills'
import Work from '../components/work/work'
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
      <Skills />
      <Topics />
      <Work />
      <Contacts />
    </div>
  )
}
