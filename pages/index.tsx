import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Box from '../components/Box'
import { useState } from 'react'
import Revealer from '../components/Revealer'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [ showAboutMe, setShowAboutMe ] = useState(false);
  const [ showProjects, setShowProjects ] = useState(false);
  const [ showContact, setShowContact ] = useState(false);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.menu}>
        <div className={styles.menuSocials}>
          <a href="https://github.com/raian621"><FaGithubSquare size={50} color="#161b22"/></a>
          <a href="https://www.linkedin.com/in/ryan-z-bell/"><FaLinkedin size={50} color="#0a66c2"/></a>
          <a href="https://twitter.com/ryanbell621"><FaTwitterSquare size={50} color="#1d9bf0"/></a>
        </div>
        <Box backgroundColor="white" width="100%" height="2px"/>
        <h1 className={styles.menuTitle}>Ryan Bell</h1>
        <Box backgroundColor="white" width="100%" height="2px"/>
        <p className={styles.menuText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Box backgroundColor="white" width="100%" height="2px"/>
        <div className={styles.menuBar}>
          <Revealer setVisible={setShowAboutMe}>
            <button>about me</button>
          </Revealer>
          <Box backgroundColor="white" width="2px" height="100%"/>
          <Revealer setVisible={setShowProjects}>
            <button>projects</button>
          </Revealer>
          <Box backgroundColor="white" width="2px" height="100%"/>
          <Revealer setVisible={setShowContact}>
            <button>contact</button>
          </Revealer>     
        </div>
      </div>
      {showAboutMe && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>}
      {showProjects && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>}
      {showContact && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>}
    </>
  )
}
