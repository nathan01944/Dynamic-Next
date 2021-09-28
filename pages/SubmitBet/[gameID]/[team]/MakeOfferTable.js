import { addplus } from "../../../../common/oddsMath";

function findGame(data, gameID,home,market) {
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

function LineRow({market, line}) {
  if (market=="spread") {
    return (
      <td class="p-2"> {line} </td>
    )
  }
  else { 
    return (
      null
    )
  }
}

function OverUnderTeam({market, team, line}) {
  if (market=="total") {
    return (
      <td class="p-2"> {team} {line}</td>
    )
  }
  else { 
    return (
      <td class="p-2"> {team}</td>
    )
  }
}

function OfferRow({data,datakeys,i,market}) {
  return (
    <tr>
      {/* <td class="p-2"> {data[datakeys[i]]["team"]}</td> */}
      <OverUnderTeam 
        market = {market}
        line = {data[datakeys[i]]["line"]}
        team = {data[datakeys[i]]["team"]}
      />
      <td class="p-2"> {addplus(data[datakeys[i]]["odds"])}</td>
      <LineRow
        market = {market}
        line =  {addplus(data[datakeys[i]]["line"])}
      />
      <td class="p-2"> {data[datakeys[i]]["wager"]}</td>
    </tr>
  )

}

function SpreadHeader({market}) {
  if (market=="spread") {
    return (
      <th class="font-weight-medium bg-gray-600 text-gray-100 col-xl-auto">Line</th>
    )
  }
  else { 
    return (
      null
    )
  }
}

function TableHeader({data,datakeys,i,market}) {
  return (
    <tr>
      <th class="font-weight-medium bg-gray-600 text-gray-100 col-xl-auto">Team</th>
      <SpreadHeader 
        market = {market} 
      />
      <th class="font-weight-medium bg-gray-600 text-gray-100 col-xl-auto">Odds</th>
      <th class="font-weight-medium bg-gray-600 text-gray-100 col-xl-auto">Wager</th>
    </tr>
  )
}


const MakeOfferTable = ({ gameID, oddsdata, market, team }) => {
  let home = (team == 0) ? "home" : "away"
  gameID = "683a81f7a04ef99d7016476829682b6c"

  let filteredoffers = findGame(oddsdata,gameID,home,market)
  const datakeys = Object.keys(filteredoffers);
  const numBets = datakeys.length

  return (
    <div class="text-gray-800 col-md-12 justify-content-center">
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
  );
};



export default MakeOfferTable