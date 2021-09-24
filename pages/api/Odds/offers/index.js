import Redis from 'ioredis'
import {pct_to_american_odds, american_to_pct_odds} from '/common/oddsMath.js'
import CreateHouseOffers from '../CreateHouseOffers.js'

let redis = new Redis("rediss://:1ab8f665ce744567ba3c4ee12ed4c869@us1-upward-lioness-34844.upstash.io:34844");

export default async (req, res) => {
   let start = Date.now();
   let marketodds = await redis.hgetall("marketodds")
   let latencyredis = Date.now() - start;

   let marketoddsJSON =  JSON.parse(marketodds.raw)
   let HouseAndUserOffers = CreateHouseOffers(marketoddsJSON)
   
   let result = {}
   if (marketodds) {
       console.log("loading from cache")
       result.offersdata = HouseAndUserOffers
       result.marketodds = marketodds
       result.type = "redis"
       result.latency = Date.now() - start;
       result.latencyredis = latencyredis
       return res.status(200).json(result)
   } else {
    res.status(404).json({ message: `Data not found.` })
  }
}