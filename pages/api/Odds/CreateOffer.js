import {pct_to_american_odds, american_to_pct_odds} from '/common/oddsMath.js'

export default function CreateOffer(game,vig,wager,market) {
    let mktodds = null
    if (market == "h2h") {mktodds = game.odds.h2h_home}
    else if (market == "spread") {mktodds = game.odds.spread_home}
    else if (market == "total") {mktodds = game.odds.totals_over}

    let line_home = null
    let line_away = null
    if (market == "h2h") {
        line_home = null
        line_away = null
    }
    else if (market == "spread") {
        line_home = game.odds.spread_home_line
        line_away = - game.odds.spread_home_line
    }
    else if (market == "total") {
        line_home = game.odds.totals_line
        line_away = game.odds.totals_line
    }

    let offerhome = {}
    offerhome.gameID = game.game_id
    offerhome.market = market
    offerhome.offerID = "000000" + "-" + Date.now().toString() + "-" + Math.random().toString(10).substr(2)
    offerhome.home = "home"
    offerhome.team = (market=="total") ? "Over" : game.home_team
    offerhome.odds = Math.round(pct_to_american_odds(american_to_pct_odds(mktodds) + vig))
    offerhome.line = line_home
    offerhome.wager = wager

    let offeraway = {}
    offeraway.gameID = game.game_id
    offeraway.market = market
    offeraway.offerID = "000000" + "-" + Date.now().toString() + "-" + Math.random().toString(10).substr(2)
    offeraway.home = "away"
    offeraway.team = (market=="total") ? "Under" : game.away_team 
    offeraway.odds = Math.round(pct_to_american_odds(1-american_to_pct_odds(mktodds) + vig))
    offeraway.line = line_away
    offeraway.wager = wager

    return[offerhome,offeraway]
}