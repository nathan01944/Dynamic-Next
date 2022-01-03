import Redis from 'ioredis'
import CreateHouseOffers from './CreateHouseOffers';
import MatchOffers from './MatchOffers/MatchOffers';

let redis = new Redis("rediss://:1ab8f665ce744567ba3c4ee12ed4c869@us1-upward-lioness-34844.upstash.io:34844");

export default async (req, res) => {
    let start = Date.now();
    let userOffers = await redis.hgetall("userOffers")
    let marketodds = await redis.hgetall("marketodds")
    let latencyredis = Date.now() - start;
 
    let marketoddsJSON =  JSON.parse(marketodds.raw)
    let houseOffers = CreateHouseOffers(marketoddsJSON)

    //append both
    let allOffers = houseOffers
    let keys = Object.keys(userOffers)
    for (const key of keys) {
        let offer = JSON.parse(userOffers[key])
        allOffers[key] = offer
    }

    //Market Match
    let [matchedOffers,allOffersAfterMatch,offerMidpoints] = MatchOffers(allOffers)
    
    let result = {}
    if (userOffers) {
        console.log("loading from cache")
        result.allOffers = allOffers
        result.allOffersAfterMatch = allOffersAfterMatch
        result.matchedOffers = matchedOffers
        result.offerMidpoints = offerMidpoints
        result.userOffers = userOffers
        result.type = "redis"
        result.latency = Date.now() - start;
        result.latencyredis = latencyredis
        return res.status(200).json(result)
    } else {
        res.status(404).json({ message: `Data not found.` })
    }
 }