import React from 'react'
import Head from 'next/head'
import About from '../components/about/about'
import Topics from '../components/blogs/topics'
import Contacts from '../components/contacts/contacts'
import NavBar from '../components/navbar/navbar'
import Skills from '../components/skills/skills'
import Work from '../components/work/work'
import Footer from '../components/footer/footer'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getCurrentWeather } from '../services/services'
import Utils from '../utils/util'

export default function Home() {
  const utils = new Utils();
  const [activeTabKey, setActiveTabKey] = React.useState(1);
  const [currentWeather, setCurrentWeather] = React.useState("");

  React.useEffect(() => {
    getCurrentWeather().then((response) => {
      let weather = response.weather[0].main;
      console.log(utils.getWeatherInfo(weather));
      setCurrentWeather(weather);
    })
  }, []);

  const tabs = [{
    name: "About",
    key: 1
  }, {
    name: "Skills",
    key: 2
  },
  {
    name: "Portfolio",
    key: 3
  },
  {
    name: "Blog",
    key: 4
  },
  {
    name: "Contacts",
    key: 5
  }
  ];

  const scrollToContent = (key) => {
    setActiveTabKey(key);
  }

  return (
    <div className={styles.cloudy}>
      <Head>
        <title>Walter Kiprono</title>
        <meta name="description" content="Walter Kiprono Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar scrollToContent={scrollToContent} tabs={tabs} activeTabKey={activeTabKey} />
      {(activeTabKey == 1 && currentWeather) && <div>
        <About current_weather={currentWeather} />
      </div>}
      {activeTabKey == 2 && <div>
        <Skills />
      </div>}
      {activeTabKey == 3 && <div>
        <Work />
      </div>}
      {activeTabKey == 4 && <div>
        <Topics />
      </div>}
      {activeTabKey == 5 && <div>
        <Contacts />
      </div>}
      <Footer />
    </div>
  )
}
