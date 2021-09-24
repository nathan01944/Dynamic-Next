import Head from 'next/head'
import React from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
//components
import Sidebar from '../../../../common/sidebar'
import Topbar from '../../../../common/Topbar'
import Footer from '../../../../common/footer'
import SubmitBetCard from './SubmitBetCard'
import MakeOffer from './MakeOffer'
import TakeOffer from './TakeOffer'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function market() {
  const router = useRouter()
  const {
      query: { gameID, market, team },
    } = router

  // const { data, error } = useSWR('/api/Odds/marketodds', fetcher)
  const { data, error } = useSWR('/api/Odds/offers', fetcher)

  if (error) return <div>{error.message} fuck </div>
  if (!data) return <div>Loading...</div>
  
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
              
              <div class="row container card-body justify-content-center p-3">
                <SubmitBetCard  
                    gameID = {gameID}
                    oddsdata={JSON.parse(data.marketodds.raw)}
                    market = {market}
                    team = {team}
                />
              </div>
              
              <div class="row">
                <div class="col-lg-6 p-0 pb-3">
                  <TakeOffer />
                </div>

                <div class="col-lg-6 p-0 pb-3">
                  <MakeOffer 
                    gameID = "683a81f7a04ef99d7016476829682b6c"
                    oddsdata = {data.offersdata}
                    market = "h2h"
                    team = "home"
                  />
                </div>

              </div>

              
            </div>
          </div>
        </div>
      </body>

      <Footer />
    </div>
  )
}
