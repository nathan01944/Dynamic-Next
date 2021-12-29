import Redis from 'ioredis'
import { addplus, wager_and_win_to_odds_american } from '../../../common/oddsMath';

let redis = new Redis("rediss://:1ab8f665ce744567ba3c4ee12ed4c869@us1-upward-lioness-34844.upstash.io:34844");

// export default function handler(req, res) {
//     if (req.method !== 'POST') {
//       res.status(405).send({ message: 'Only POST requests allowed' })
//       return
//     }

//     const body = JSON.parse(req.body)

//     res.status(200).json({ message: "success" })
//   }

export default async function user(req, res) {
    let userID = "000001"
    let offerID = userID + "-" + Date.now().toString() + "-" + Math.random().toString(10).substr(2)

    let offer = {}
    offer.gameID = req.body.game_id
    offer.market = req.body.market
    offer.offerID = offerID
    offer.home = req.body.team==0 ? "home" : "away"
    //offer.team = (market=="total") ? "Over" : game.home_team
    offer.odds = wager_and_win_to_odds_american(req.body.wager,req.body.win)
    offer.line = req.body.line
    offer.wager = req.body.wager
    offer.win = req.body.win

    const body = JSON.stringify(offer)
    //console.log(body) // {"name":"Kieran","age":26}
    //console.log(typeof(body))
    // console.log(req.query) // {} in our example
    // console.log(req.method); // POST
    // console.log(req.headers.host); // localhost:3000
    // console.log(req.url); // /api/user

    redis.hset('userOffers',offerID,body)

    res.status(200).json({ message: "success" })
}
//console.log(typeof(body))