import type { NextPage } from 'next'
import Head from 'next/head'
import {Header} from "../components/Header";
import {Welcome} from "../components/Welcome";
import {Attractions} from "../components/attractions/Attractions";
import {Tours} from "../components/tours/Tours";
import {Contacts} from "../components/Contacts";
import {Footer} from "../components/Footer";

const Home: NextPage = () => {
  return (
      <section>
          <Head>
              <meta name="viewport" content="width=device-width, user-scalable=yes"/>
              <title>Хакасия</title>
          </Head>
          <Header />
          <Welcome />
          <Attractions />
          <Tours />
          <Contacts />
          <Footer />
      </section>
  )
}

export default Home
