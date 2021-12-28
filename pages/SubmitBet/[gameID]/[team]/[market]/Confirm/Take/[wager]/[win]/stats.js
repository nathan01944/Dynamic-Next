import { addplus, wager_and_win_to_odds_american } from "../../../../../../../../../common/oddsMath";

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
    console.log(props)
    let home = (props.team == 0) ? "home" : "away"
    let filteredoffers = findGameByID(props.oddsdata,props.gameID,home,props.market)
    let datakeys = Object.keys(filteredoffers);
    let betteam = filteredoffers[datakeys[0]]["team"]
    let betline = filteredoffers[datakeys[0]]["line"]
    let theirwager = props.win - props.wager

    if (props.market == "h2h") {
        return (
            <div class = "row p-4 ">
                <div class="row col-12 py-2">
                    Pay ${props.wager} now. If {betteam} wins you win ${props.win}.
                </div>
            </div>
        )
    }
    else if (props.market == "spread") {
           return (
            <div class = "row p-4 ">
                <table>
                    <tbody>
                        <tr> 
                            <td> Your Wager: </td>
                            <td> ${props.wager} </td>
                        </tr>
                        <tr> 
                            <td> Their Wager: </td>
                            <td> ${theirwager.toFixed(2)} </td>
                        </tr>
                        <tr> 
                            <td> Win: </td>
                            <td> ${props.win} </td>
                        </tr>
                        <tr> 
                            <td> Odds: </td>
                            <td> {addplus(wager_and_win_to_odds_american(props.wager,props.win).toFixed(0))} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    } 
    else {
        return (
            <div class = "row p-4 ">
                <div class="row col-12 py-2">
                    Pay ${props.wager} now. If both teams score at least {betline} points win ${props.win}.
                </div>
            </div>
        )
    }
}

export default BetStats