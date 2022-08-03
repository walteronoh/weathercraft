import React from 'react'
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
  const aboutRef = React.useRef(null);
  const skillsRef = React.useRef(null);
  const topicsRef = React.useRef(null);
  const workRef = React.useRef(null);
  const contactsRef = React.useRef(null);
  const [activeTabKey, setActiveTabKey] = React.useState(1);

  const scroll = (ref) => ref.current.scrollIntoView({
    behaviour: "smooth"
  });

  const tabs = [{
    name: "About",
    key: 1
  }, {
    name: "Skills",
    key: 2
  },
  {
    name: "Blog",
    key: 3
  },
  {
    name: "Portfolio",
    key: 4
  },
  {
    name: "Contacts",
    key: 5
  }
  ];

  const scrollToContent = (key) => {
    switch (key) {
      case 1:
        scroll(aboutRef);
        break;

      case 2:
        scroll(skillsRef);
        break;

      case 3:
        scroll(topicsRef);
        break;

      case 4:
        scroll(workRef);
        break;

      case 5:
        scroll(contactsRef);
        break;
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', (e) => {
      let scrollY = window.scrollY;
      if (scrollY >= 0 && scrollY < skillsRef.current.offsetTop) {
        setActiveTabKey(1);
      }
      else if (scrollY >= skillsRef.current.offsetTop && scrollY < topicsRef.current.offsetTop) {
        setActiveTabKey(2);
      }
      else if (scrollY >= topicsRef.current.offsetTop && scrollY < workRef.current.offsetTop) {
        setActiveTabKey(3);
      }
      else if (scrollY >= workRef.current.offsetTop && scrollY < contactsRef.current.offsetTop) {
        setActiveTabKey(4);
      }
      else if (scrollY >= contactsRef.current.offsetTop) {
        setActiveTabKey(5);
      }
    })
  }, []);

  return (
    <div>
      <Head>
        <title>Walter Kiprono</title>
        <meta name="description" content="Walter Kiprono Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar scrollToContent={scrollToContent} tabs={tabs} activeTabKey={activeTabKey} />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={topicsRef}>
        <Topics />
      </div>
      <div ref={workRef}>
        <Work />
      </div>
      <div ref={contactsRef}>
        <Contacts />
      </div>
    </div>
  )
}
