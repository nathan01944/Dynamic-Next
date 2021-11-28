import { addplus, american_and_wager_to_win } from "../../../../common/oddsMath";

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

function TableHeader({data,datakeys,i,market}) {
  if (market == "h2h") return (
    <tr>
      <th class="font-weight-medium bg-gray-600 text-gray-100 col-auto">Team</th>
      <th class="font-weight-medium bg-gray-600 text-gray-100 col-auto">Odds</th>
      <th class="font-weight-medium bg-gray-600 text-gray-100 col-auto">Your Wager</th>
      <th class="font-weight-medium bg-gray-600 text-gray-100 col-auto">Their Wager</th>
      <th class="font-weight-medium bg-gray-600 text-gray-100 col-auto">Win</th>
      <th class="font-weight-medium bg-gray-600 text-gray-100 col-auto pt-2 pb-2">
        <div class="btn btn-success btn-icon-split pl-1 pr-1">
          <input type="submit" value="Submit" class="btn btn-success btn-icon-split"/>
        </div></th>
    </tr>
  )
  else if (market == "spread") return (
    <tr>
      <th class="font-weight-medium bg-gray-600 text-gray-100 col-auto">Team</th>
      <th class="font-weight-medium bg-gray-600 text-gray-100 col-auto">Line</th>
      <th class="font-weight-medium bg-gray-600 text-gray-100 col-auto">Odds</th>
      <th class="font-weight-medium bg-gray-600 text-gray-100 col-auto">Your Wager</th>
      <th class="font-weight-medium bg-gray-600 text-gray-100 col-auto">Their Wager</th>
      <th class="font-weight-medium bg-gray-600 text-gray-100 col-auto">Win</th>
      <th class="font-weight-medium bg-gray-600 text-gray-100 col-auto pt-2 pb-2">
        <div class="btn btn-success btn-icon-split pl-1 pr-1">
          <input type="submit" value="Submit" class="btn btn-success btn-icon-split"/>
        </div></th>
    </tr>
  )
  else if (market == "total") return (
    <tr>
      <th class="font-weight-medium bg-gray-600 text-gray-100 col-auto">Over/Under</th>
      <th class="font-weight-medium bg-gray-600 text-gray-100 col-auto">Odds</th>
      <th class="font-weight-medium bg-gray-600 text-gray-100 col-auto">Your Wager</th>
      <th class="font-weight-medium bg-gray-600 text-gray-100 col-auto">Their Wager</th>
      <th class="font-weight-medium bg-gray-600 text-gray-100 col-auto">Win</th>
      <th class="font-weight-medium bg-gray-600 text-gray-100 col-auto pt-2 pb-2">
        <div class="btn btn-success btn-icon-split pl-1 pr-1">
          <input type="submit" value="Submit" class="btn btn-success btn-icon-split"/>
        </div></th>
    </tr>
  )
  else return (
    <tr> </tr>
  )
}


const AvailableOffers = ({ gameID, oddsdata, market, team }) => {
  let home = (team == 0) ? "home" : "away"

  let filteredoffers = findGameByID(oddsdata,gameID,home,market)
  const datakeys = Object.keys(filteredoffers);
  const numBets = datakeys.length

  return (
    <div class="container-fluid col-lg-10 pr-2 pl-2 pt-4 pb-2"> 
      <div class="card shadow mb-6">
        <a class="d-block card-header py-3"
            role="button" aria-expanded="true" aria-controls="collapseCardExample">
            <h6 class="m-0 font-weight-bold text-primary customtooltip"> 
              Available Offers &nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg>
              <span class="tooltiptext font-weight-normal text-secondary">Here is what other people are offering</span>
            </h6> 
        </a>

        
        <div class="text-gray-800 col-md-12 justify-content-center pt-2 pb-2">
          <table class="table-bordered th" id="dataTable" width="100%" cellSpacing="20">
              <thead>
                  <TableHeader 
                    market = {market}
                  />
              </thead>
              <tbody class="text-gray-600">
                {[...Array(numBets)].map((x, i) =>
                    <OfferRow 
                      data={filteredoffers} 
                      datakeys = {datakeys}
                      i = {i}
                      market = {market}
                    />
                )}
              </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};



export default AvailableOffers