
import Image from 'next/image'
import Head from 'next/head'
import '../styles/globals.css'
import Navbar from '../components/Navbar.jsx'
import Main from '../components/Main.jsx'
import About from '../components/About.jsx'

export default function Home() {
    return (
      <div>
        <Head>
          <title>Santtu Niskanen - Software Engienering</title>
        </Head>
        <Navbar />
        <Main/>
        <About />
      </div>
    )
  }
