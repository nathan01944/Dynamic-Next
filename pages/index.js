import Head from 'next/head'
import Image from 'next/image'
//components
import FeaturedBets from './FeaturedBets'
import Sidebar from '../common/sidebar'
import Topbar from '../common/Topbar'
import Footer from '../common/footer'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Onyx</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body id="page-top">
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <div id="content-wrapper" class="d-flex flex-column">
                <Topbar />
                
              </div>
              <FeaturedBets />
            </div>
          </div>
        </div>
      </body>

      <Footer />
    </div>
  )
}
