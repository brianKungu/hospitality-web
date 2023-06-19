import Header from './sections/Header'
import Contact from './sections/Contact'
import Services from './sections/Services'
import Head from 'next/head'
import Gallery from './sections/Gallery'

export default function Home() {
  return (
   <>
   <Head><title>Hospitality web</title></Head>
   <Header />
   <Services />
   <Gallery />
   <Contact />
   </>
  )
}
