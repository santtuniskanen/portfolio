import Image from 'next/image'
import Head from 'next/head'
import '../styles/globals.css'
import Navbar from '../components/navbar'

export default function Home() {
    return (
      <div>
        <Head>
          <title>Santtu Niskanen - Software Engienering</title>
        </Head>
        <Navbar />
      </div>
    )
  }
