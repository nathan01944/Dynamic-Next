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
    let odds = -10000
    if (odds_american > 0) {
        odds = 100/(odds_american+100)
    } else if (odds_american < 0) {
        odds = (-odds_american)/((-odds_american)+100)
    }
    else {
        odds = "nan"
    }
    return(odds)
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