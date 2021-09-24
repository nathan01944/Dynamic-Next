import { addplus } from "../../../../common/oddsMath";

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

function OfferRow2({data,datakeys,i,market}) {
  console.log(data[datakeys[i]])
  if (market == "h2h") return (
    <tr>
      <td class="p-2"> {data[datakeys[i]]["team"]}</td>
      <td class="p-2"> {addplus(data[datakeys[i]]["odds"])}</td>
      <td class="p-2"> {data[datakeys[i]]["wager"]}</td>
    </tr>
  )
  else if (market == "spread") return (
    <tr>
      <td class="p-2"> {data[datakeys[i]]["team"]}</td>
      <td class="p-2"> {addplus(data[datakeys[i]]["line"])} </td>
      <td class="p-2"> {addplus(data[datakeys[i]]["odds"])}</td>
      <td class="p-2"> {data[datakeys[i]]["wager"]}</td>
    </tr>
  )
  else if (market == "total") return (
    <tr>
      <td class="p-2"> {data[datakeys[i]]["team"]}</td>
      <td class="p-2"> {addplus(data[datakeys[i]]["odds"])}</td>
      <td class="p-2"> {data[datakeys[i]]["wager"]}</td>
  </tr>
  )
  else return (
    <tr></tr>
  )
}

function TableHeader({data,datakeys,i,market}) {
  if (market == "h2h") return (
    <tr>
      <th class="font-weight-medium bg-gray-600 text-gray-100 col-xl-auto">Team</th>
      <th class="font-weight-medium bg-gray-600 text-gray-100 col-xl-auto">Odds</th>
      <th class="font-weight-medium bg-gray-600 text-gray-100 col-xl-auto">Wager</th>
    </tr>
  )
  else if (market == "spread") return (
    <tr>
      <th class="font-weight-medium bg-gray-600 text-gray-100 col-xl-auto">Team</th>
      <th class="font-weight-medium bg-gray-600 text-gray-100 col-xl-auto">Line</th>
      <th class="font-weight-medium bg-gray-600 text-gray-100 col-xl-auto">Odds</th>
      <th class="font-weight-medium bg-gray-600 text-gray-100 col-xl-auto">Wager</th>
    </tr>
  )
  else if (market == "total") return (
    <tr>
      <th class="font-weight-medium bg-gray-600 text-gray-100 col-xl-auto">Over/Under</th>
      <th class="font-weight-medium bg-gray-600 text-gray-100 col-xl-auto">Odds</th>
      <th class="font-weight-medium bg-gray-600 text-gray-100 col-xl-auto">Wager</th>
    </tr>
  )
  else return (
    <tr> </tr>
  )
}


const MakeOfferTable = ({ gameID, oddsdata, market, home }) => {
  home = "away"
  market = "total"
  gameID = "683a81f7a04ef99d7016476829682b6c"

  let filteredoffers = findGameByID(oddsdata,gameID,home,market)
  const datakeys = Object.keys(filteredoffers);
  const numBets = datakeys.length

  // let MakeOfferRowsProps = {}
  // MakeOfferRowsProps.data = filteredoffers
  // MakeOfferRowsProps.team = "henry"

  return (
    <div class="text-gray-800 col-md-12 justify-content-center">
      <table class="table-bordered th" id="dataTable" width="100%" cellSpacing="20">
          <thead>
              {/* <tr>
                  <th class="font-weight-medium bg-gray-600 text-gray-100 col-xl-auto">Team</th>
                  <th class="font-weight-medium bg-gray-600 text-gray-100 col-xl-auto">Odds</th>
                  <th class="font-weight-medium bg-gray-600 text-gray-100 col-xl-auto">Wager</th>
              </tr> */}
              <TableHeader 
                market = {market}
              />
          </thead>
          <tbody class="text-gray-600">
            {/* {console.log(filteredoffers[datakeys[1]])} */}
            {/* {offerRow(
              filteredoffers[datakeys[1]]["team"],filteredoffers[datakeys[1]]["team"])} */}
            {[...Array(numBets)].map((x, i) =>
                <OfferRow2 
                  data={filteredoffers} 
                  datakeys = {datakeys}
                  i = {i}
                  market = {market}
                />
            )}
          </tbody>
      </table>
    </div>
  );
};



export default MakeOfferTable