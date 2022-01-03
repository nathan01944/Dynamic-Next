import Redis from 'ioredis'
import { addplus, american_to_pct_odds, wager_and_win_to_odds_american } from '../../../common/oddsMath';

let redis = new Redis("rediss://:1ab8f665ce744567ba3c4ee12ed4c869@us1-upward-lioness-34844.upstash.io:34844");

export default async function user(req, res) {
    redis.del("userOffers") //TO DELETE
    
    let userID = "000001"
    let offerID = userID + "-" + Date.now().toString() + "-" + Math.random().toString(10).substr(2)

    let offer = {}
    offer.gameID = req.body.gameID
    offer.market = req.body.market
    offer.offerID = offerID
    //offer.home = req.body.team==0 ? "home" : "away" //opposite so that it reflects what someone taking this offer would expect
    offer.home = req.body.team==0 ? "away" : "home"
    offer.odds = 1 - american_to_pct_odds(wager_and_win_to_odds_american(req.body.wager,req.body.win))
    offer.line = req.body.line
    //offer.wager = req.body.wager
    offer.wager = Math.round((req.body.win - req.body.wager)*100)/100// opposite so that it reflects what someone taking this offer would expect
    offer.win = req.body.win*1

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
//redis.flushdb("userOffers")