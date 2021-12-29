import { addplus, wager_and_win_to_odds_american } from "../../../../../../../../../../common/oddsMath";

function findGameByID(data, gameID,home,market) {
    //to add sort
    let filtered = {}
    const datakeys = Object.keys(data);
    for (var i = 0; i < datakeys.length; i++) {
      if (data[datakeys[i]].gameID == gameID) {
        if (data[datakeys[i]].home == home) {
          if (data[datakeys[i]].market == market) {
            filtered[datakeys[i]] = data[datakeys[i]]
          };
        };
      };
    }
    return filtered
  }

const BetStats = props => {
    let home = (props.team == 0) ? "home" : "away"
    let filteredoffers = findGameByID(props.oddsdata,props.gameID,home,props.market)
    let datakeys = Object.keys(filteredoffers);
    let betteam = filteredoffers[datakeys[0]]["team"]
    let betline = filteredoffers[datakeys[0]]["line"]
    let fewerVsAtLeast = (props.team == 0) ? "at least" : "fewer than"
    let winningVsLosing = (betline <= 0) ? "win by at least" : "win or if they lose by fewer than"
    let theirwager = props.win - props.wager

    if (props.market == "h2h") {
        return (
            <div class = "row p-4 ">
                <div class="row col-12 py-2">
                    Pay ${props.wager} now. Win ${props.win} if {betteam} wins.
                </div>
            </div>
        )
    }
    else if (props.market == "spread") {
           return (
            <div class = "row p-4 ">
                <div class="row col-12 py-2">
                    Pay ${props.wager} now. Win ${props.win} if the {betteam} {winningVsLosing} {Math.abs(betline)} points.
                </div>
            </div>
        )
    } 
    else {
        return (
            <div class = "row p-4 ">
                <div class="row col-12 py-2">
                    Pay ${props.wager} now. Win ${props.win} if both teams score {fewerVsAtLeast} {betline} points.
                </div>
            </div>
        )
    }
}

export default BetStats