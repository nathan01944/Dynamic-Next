export function pct_to_american_odds(odds_pct) {
    let odds_american = 99.9
    if (odds_pct>0.5) {
        odds_american = -100*odds_pct / (1-odds_pct)
    } else if (odds_pct < 0.5) {
        odds_american = 100/odds_pct - 100
    } else if (odds_pct = "nan") {
        odds_american = "nan"
    }
    else {
        odds_american = 100
    }
    return(odds_american)
}

export function american_to_pct_odds(odds_american) {
    let odds
    if (odds_american >= 100) {
        odds = 100/(odds_american+100)
    } else if (odds_american <= -100) {
        odds = (-odds_american)/((-odds_american)+100)
    }
    else {
        odds = "nan"
    }
    return(odds)
}

export function american_and_wager_to_win(odds_american,wager) {
    let odds_pct = american_to_pct_odds(odds_american)
    let win = Math.round(100*(wager / odds_pct))/100
    return(win)
}

export function wager_and_win_to_odds_american(wager,win) {
    let odds_pct = wager / win
    let odds_american = pct_to_american_odds(odds_pct)
    return(odds_american)
}

export function addplus(number) {
    if (number < 0) {
      var oddsstring = number.toString()
    } else if (number > 0) {
      var oddsstring = "+" + number.toString()
    }
    else {
        var oddsstring = null
    }
    return (oddsstring)
  }