import {pct_to_american_odds, american_to_pct_odds} from '/common/oddsMath.js'

export default function CreateOffer(game,vig,wager,market) {
    if (market == "h2h") {let mktodds = game.odds.h2h_home}
    else if (market == "spread") {let mktodds = game.spread_home}
    else if (market == "total") {let mktodds = game.totals_over}

    let line = null
    if (market == "h2h") {line = 0}
    else if (market == "spread") {line = game.spread_home_line}
    else if (market == "total") {line = game.totals_line}

    let offerhome = {}
    offerhome.game = game.game_id
    offerhome.market = market
    offerhome.offerID = "000000" + "-" + Date.now().toString() + "-" + Math.random().toString(10).substr(2)
    offerhome.team = "home"
    offerhome.odds = Math.round(pct_to_american_odds(american_to_pct_odds(game.odds.h2h_home) + vig))
    offerhome.line = line
    offerhome.wager = wager

    let offeraway = {}
    offeraway.game = game.game_id
    offeraway.market = market
    offeraway.offerID = "000000" + "-" + Date.now().toString() + "-" + Math.random().toString(10).substr(2)
    offeraway.team = "away"
    offeraway.odds = Math.round(pct_to_american_odds(1-american_to_pct_odds(game.odds.h2h_home) + vig))
    offeraway.line = -line
    offeraway.wager = wager

    return[offerhome,offeraway]
}