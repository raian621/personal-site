import Head from 'next/head'
import styles from 'styles/Home.module.css'
import { Inter } from '@next/font/google'
import { useState } from 'react'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { AboutMe, Contact, Projects } from 'components/home'
import { Box, Modal } from 'components';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [ showAboutMe, setShowAboutMe ] = useState(false);
  const [ showProjects, setShowProjects ] = useState(false);
  const [ showContact, setShowContact ] = useState(false);

  const toggleAboutMe = () => setShowAboutMe(!showAboutMe);
  const toggleProjects = () => setShowProjects(!showProjects);
  const toggleContact = () => setShowContact(!showContact);

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>      <div className={styles.menu}>
      <div className={styles.menuSocials}>
        <a href="https://github.com/raian621"><FaGithubSquare size={50} color="#161b22"/></a>
        <a href="https://www.linkedin.com/in/ryan-z-bell/"><FaLinkedin size={50} color="#0a66c2"/></a>
        <a href="https://twitter.com/ryanbell621"><FaTwitterSquare size={50} color="#1d9bf0"/></a>
      </div>
      <Box backgroundColor="white" width="100%" height="2px"/>
      <h1 className={styles.menuTitle}>Ryan Bell</h1>
      <h2 className={styles.menuSubTitle}>College Student, Budding Software Developer</h2>
      <Box backgroundColor="white" width="100%" height="2px"/>
      <p className={styles.menuText}>
        I have a broad range of expertise in multiple programming languages, including Python, Java, JavaScript, C, and C++, and possess the skills necessary to develop complex software solutions for a wide range of industries. 
        <br/>
        <br/>
        I have experience building websites and microservices using popular frameworks such as Flask, Django, Next JS, and React JS.
        With my experience in full-stack development, I can create web apps that are both functional and visually appealing.
      </p>
      <Box backgroundColor="white" width="100%" height="2px"/>
      <div className={styles.menuBar}>
        <button onClick={toggleAboutMe}>about me</button>
        <Box backgroundColor="white" width="2px" height="100%"/>
        <button onClick={toggleProjects}>projects</button>
        <Box backgroundColor="white" width="2px" height="100%"/>
        <button onClick={toggleContact}>contact</button>
      </div>
    </div>
    {showAboutMe && 
      <Modal 
        heading="About Me" 
        toggleVisible={toggleAboutMe} 
        visible={showAboutMe}
      >
        <AboutMe/>
      </Modal>
    }
    {showProjects && 
      <Modal 
        heading="Projects" 
        toggleVisible={toggleProjects} 
        visible={showProjects}
      >
        <Projects/>
      </Modal>
    }
    {showContact && 
      <Modal 
        heading="Contact Me" 
        toggleVisible={toggleContact} 
        visible={showContact}
      >
        <Contact/>
      </Modal>}
    </>
  )
}
