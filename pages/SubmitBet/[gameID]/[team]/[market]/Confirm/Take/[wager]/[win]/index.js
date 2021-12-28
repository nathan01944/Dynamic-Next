import Head from 'next/head'
import React from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
//components
import Sidebar from '../../../../../../../../../common/sidebar'
import Topbar from '../../../../../../../../../common/Topbar'
import Footer from '../../../../../../../../../common/footer'
import SubmitBetCard from '../../../../../../../../../common/BetInterface3x2/SubmitBetCard'
import BetStats from './stats'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function market() {
  const router = useRouter()
  const {
      query: { gameID, market, team, wager, win },
    } = router

  const { data, error } = useSWR('/api/Odds/offers', fetcher)

  if (error) return <div>{error.message} we ran into an error </div>
  if (!data) return <div>Loading...</div>
  
  return (
    <div class="p-0">
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



                <div class="row mb-4 text-center justify-content-center">
                    <h1 class="h1 p-4 text-gray-800 justify-content-center">Execute Bet </h1>
                  
                  <div class="col-lg-2 btn btn-success btn-icon-split">
                    <input type="submit" value="Confirm" class="btn btn-success btn-icon-split" />
                  </div>

                </div>
                
                <BetStats
                  gameID = {gameID}
                  team = {team}
                  market = {market}
                  win = {win}
                  wager = {wager} 
                  oddsdata = {data.offersdata}
                />

                <div class="row container card-body justify-content-center pt-0 pb-0">
                  <SubmitBetCard  
                      gameID = {gameID}
                      oddsdata={JSON.parse(data.marketodds.raw)}
                      market = {market}
                      team = {team}
                  />
                </div>
            </div>
          </div>
        </div>
      </body>

      <Footer />
    </div>
  )
}
