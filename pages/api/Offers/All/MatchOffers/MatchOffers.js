import DeleteOffer from "./DeleteOffer"
import FilterOffers from "./FilterOffers"
import FindGameIDs from "./FindGameIDs"

function MatchOffers(offers) {
    let matchedOffers = {}
    let allOffersAfterMatch = {}
    let offerMidpoints = {}

    //returns array of gameIDs
    let gameIDs = FindGameIDs(offers)

    let workingMatched = {}
    let workingAllOffersAfterMatch = offers
    let workingMidpoints = {}

    let markets = ["h2h","spread","total"]
    for (let gameID of gameIDs) {
        for (let market of markets){
            let midpointKey = gameID.concat("-",market)
            let midpointObs = {}

            //best home and away odds
            let bestHomeKey = FilterOffers(offers,gameID,market,"home")
            let bestAwayKey = FilterOffers(offers,gameID,market,"away")
            
            //add to midpoint data
            midpointObs.gameID = gameID
            midpointObs.market = market
            midpointObs.homeKey = bestHomeKey
            midpointObs.awayKey = bestAwayKey
            midpointObs.homeOdds = offers[bestHomeKey].odds
            midpointObs.awayOdds = offers[bestAwayKey].odds
            midpointObs.homeWin = offers[bestHomeKey].win
            midpointObs.awayWin = offers[bestAwayKey].win
            workingMidpoints[midpointKey] = midpointObs

            //if odds overlap to 100, add to matchedOffers
            if ((midpointObs.homeOdds + midpointObs.awayOdds) < 1.001) {  
                let minWin = Math.min(offers[bestAwayKey].win,offers[bestHomeKey].win)

                //home
                let matchedHome = offers[bestHomeKey]
                matchedHome.minWin = minWin
                //if they are for the same win amount
                if (Math.round((matchedHome.win - minWin)*1000)/1000==0) {
                    workingMatched[bestHomeKey] = matchedHome
                    //delete offer
                    workingAllOffersAfterMatch = DeleteOffer(workingAllOffersAfterMatch,bestHomeKey)
                    console.log(bestHomeKey)
                } 
                //else part of the offer will remain
                else {
                    let remainingHome = offers[bestHomeKey]
                }

                //away
                let matchedAway = offers[bestAwayKey]
                matchedAway.minWin = minWin
                //if they are for the same win amount
                if (Math.round((matchedAway.win - minWin)*1000)/1000==0) {
                    workingMatched[bestAwayKey] = matchedAway
                    //delete offer
                    //workingAllOffersAfterMatch = DeleteOffer(workingAllOffersAfterMatch,bestAwayKey)
                } 
                //else part of the offer will remain
                else {
                    let newKey = bestAwayKey.concat("-1")
                    workingAllOffersAfterMatch[newKey] = offers[bestAwayKey]
                }

                //remove from allOffers
                //workingMatched[midpointObs.homeKey] = offer[midpointObs.homeKey]
            }
            //otherwise add to workingMatched
            else {
                //workingAllOffersAfterMatch[bestHomeKey] = midpointObs
            }
            
        }
    }
    matchedOffers = workingMatched
    allOffersAfterMatch = workingAllOffersAfterMatch
    offerMidpoints = workingMidpoints

    //get best offer on each side for each game
    // let keys = Object.keys(offers)
    // let workingOffers = offers
    // for (let key of keys){
    //     //content here
    // }

    return([matchedOffers,allOffersAfterMatch,offerMidpoints])
}

export default MatchOffers