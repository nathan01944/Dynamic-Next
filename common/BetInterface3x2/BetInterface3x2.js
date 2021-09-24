import React, { Component } from 'react';
import Link from 'next/dist/client/link';

const BetInterface3x2 = ({oddsdata, gameID, market, team}) => {
  // const gamedata = JSON.parse(oddsdata.data.raw)
  // const game = gamedata[gameID]

  //const gamedata = JSON.parse(oddsdata.data.raw)
  const game = oddsdata[gameID]

  const game1 = [
    {
      team: game.home_team,
      h2h: addplus(game.odds.h2h_home),
      spread: addplus(game.odds.spread_home_line) + ": " + addplus(game.odds.spread_home),
      total: game.odds.totals_line + "o" + ": " + addplus(game.odds.totals_over),
    },
    {
      team: game.away_team,
      h2h: addplus(-game.odds.h2h_home),
      spread: addplus(-game.odds.spread_home_line) + ": " + addplus(-game.odds.spread_home),
      total: game.odds.totals_line + "u" + ": " + addplus(-game.odds.totals_over),
    }
  ]


  return (
    <div>
      <Description 
        home_team = {game1[0].team}
        away_team= {game1[1].team}
        date={game.commence_time}
      />

      <div class="mb-0 text-s text-gray-800">
        <table class="table-bordered th col-md-12" id="dataTable" width="100%" cellSpacing="10">
            <thead>
                <tr>
                    <th class="font-weight-medium bg-gray-600 text-gray-100 col-md-3">Team</th>
                    <th class="font-weight-medium bg-gray-600 text-gray-100 col-md-2">Moneyline</th>
                    <th class="font-weight-medium bg-gray-600 text-gray-100 col-md-2">Spread</th>
                    <th class="font-weight-medium bg-gray-600 text-gray-100 col-md-2">Over/Under</th>
                </tr>
            </thead>
            <tbody>
              <Line
                away = {0}
                gameID = {gameID}
                game = {game1}
                lineHighlight = {team == 0 ? market : ""}
              />
              <Line
                away = {1}
                gameID = {gameID}
                game = {game1}
                lineHighlight = {""}
                lineHighlight = {team == 1 ? market : ""}
              />
            </tbody>
        </table>
      </div>
    </div>
  );
};


const Description = ({ away_team, home_team, date }) => {
  const day = new Date(date).getDate()
  const month = new Date(date).getMonth() + 1
  const hour = new Date(date).getHours()
  var mins = new Date(date).getMinutes()
  if (mins < 10) {
    mins = mins.toString() + "0"
  } else {
    mins = mins.toString()
  }

  return (
    <div>
      <div class="text-s font-weight-bold text-gray-800 mb-1">
        {away_team} @ {home_team}
      </div>
      <div class="text-s font-weight-bold text-gray-800 mb-1">
        {month}/{day} @ {hour}:{mins} EST
      </div>
    </div>
  );
};

const Line = ({ away , gameID, game, lineHighlight }) => {
  if (!game) return <tr />;
  return (
    <tr>
      <td>{game[away]["team"]}</td>
      <CellButton 
        away={away}
        market={"h2h"}
        gameID={gameID}
        game={game}
        cellhighlight = {lineHighlight == "h2h" ? 1 : 0}
      />
      <CellButton 
        away={away}
        market={"spread"}
        gameID={gameID}
        game={game}
        cellhighlight = {lineHighlight == "spread" ? 1 : 0}
      />
      <CellButton 
        away={away}
        market={"total"}
        gameID={gameID}
        game={game}
        cellhighlight = {lineHighlight == "total" ? 1 : 0}
      />
    </tr>
  );
};

const CellButton = ({ away, market, gameID, game, cellhighlight }) => {
  if (!market) return <td />;
  return (
    <td class={cellhighlight === 1 ? "bg-gray-300" : ""}>
      <button class="btn">
        <Link
            href={{
                pathname: "/SubmitBet/[gameID]/[team]/[market]",
                query: {
                    gameID: {gameID},
                    team: away == 0 ? "home" : "away",
                    market: market
                }
            }}
            as={`/SubmitBet/${gameID}/${away}/${market}`}
        passHref>
          {game[away][market]}
        </Link>
      </button>
    </td>
  );
};

function addplus(oddsgameID) {
  if (oddsgameID < 0) {
    var oddsstring = oddsgameID.toString()
  } else {
    var oddsstring = "+" + oddsgameID.toString()
  }
  return (oddsstring)
}

export default BetInterface3x2