import { addplus, american_and_wager_to_win } from "../../../../../common/oddsMath"

function OfferRow({data,datakeys,i,market}) {
    if (market == "h2h") return (
      <tr>
        <td class="p-2"> {data[datakeys[i]]["team"]}</td>
        <td class="p-2"> {addplus(data[datakeys[i]]["odds"])}</td>
        <td class="p-2"> {data[datakeys[i]]["wager"]}</td>
        <td class="p-2"> {(Math.round(100*(american_and_wager_to_win(data[datakeys[i]]["odds"],data[datakeys[i]]["wager"])- data[datakeys[i]]["wager"]))/100).toFixed(2)}</td>
        <td class="p-2"> {american_and_wager_to_win(data[datakeys[i]]["odds"],data[datakeys[i]]["wager"]).toFixed(2)}</td>
        <td class="p-2"> <input class="custom-checkbox" type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/> </td>
      </tr>
    )
    else if (market == "spread") return (
      <tr>
        <td class="p-2"> {data[datakeys[i]]["team"]}</td>
        <td class="p-2"> {addplus(data[datakeys[i]]["line"])} </td>
        <td class="p-2"> {addplus(data[datakeys[i]]["odds"])}</td>
        <td class="p-2"> {data[datakeys[i]]["wager"]}</td>
        <td class="p-2"> {(Math.round(100*(american_and_wager_to_win(data[datakeys[i]]["odds"],data[datakeys[i]]["wager"])- data[datakeys[i]]["wager"]))/100).toFixed(2)}</td>
        <td class="p-2"> {american_and_wager_to_win(data[datakeys[i]]["odds"],data[datakeys[i]]["wager"]).toFixed(2)}</td>
      </tr>
    )
    else if (market == "total") return (
      <tr>
        <td class="p-2"> {data[datakeys[i]]["team"] + " " + data[datakeys[i]]["line"]}</td>
        <td class="p-2"> {addplus(data[datakeys[i]]["odds"])}</td>
        <td class="p-2"> {data[datakeys[i]]["wager"]}</td>
        <td class="p-2"> {(Math.round(100*(american_and_wager_to_win(data[datakeys[i]]["odds"],data[datakeys[i]]["wager"])- data[datakeys[i]]["wager"]))/100).toFixed(2)}</td>
        <td class="p-2"> {american_and_wager_to_win(data[datakeys[i]]["odds"],data[datakeys[i]]["wager"]).toFixed(2)}</td>
    </tr>
    )
    else return (
      <tr></tr>
    )
  }

  export default OfferRow