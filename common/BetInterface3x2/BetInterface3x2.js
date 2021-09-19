import React, { Component } from 'react';
import Link from 'next/dist/client/link';

const BetInterface3x2 = ({oddsdata, num}) => {
  const gamedata = JSON.parse(oddsdata.data.raw)
  const keys = Object.keys(gamedata)
  const game = gamedata[keys[num]]

  const game1 = [
    {
      team: game.home_team,
      h2h: addplus(game.odds.h2h_home),
      spread: addplus(game.odds.spread_home_line) + ": " + addplus(game.odds.spread_home),
      overunder: game.odds.totals_line + "o" + ": " + addplus(game.odds.totals_over),
    },
    {
      team: game.away_team,
      h2h: addplus(-game.odds.h2h_home),
      spread: addplus(-game.odds.spread_home_line) + ": " + addplus(-game.odds.spread_home),
      overunder: game.odds.totals_line + "u" + ": " + addplus(-game.odds.totals_over),
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
                num = {0}
                game = {game1}
              />
              <Line
                away = {1}
                num = {0}
                game = {game1}
              />


              {/* {game1.map((data) => {
                return (
                  <Line 
                    team={data.team}
                    h2h={data.h2h}
                    spread= {data.spread}
                    overunder={data.overunder}
                    num = {num}
                  />
                );
              })} */}
            </tbody>
        </table>
      </div>
    </div>
    // <div>yes</div>
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

const Line = ({ away , num, game }) => {
  if (!game) return <tr />;
  return (
    <tr>
      <td>{game[away]["team"]}</td>
      <CellButton 
        away={away}
        type={"h2h"}
        num={num}
        game={game}
      />
      <CellButton 
        away={away}
        type={"spread"}
        num={num}
        game={game}
      />
      <CellButton 
        away={away}
        type={"overunder"}
        num={num}
        game={game}
      />
    </tr>
  );
};

const CellButton = ({ away, type, num, game }) => {
  if (!type) return <td />;
  return (
    <td>
      <button class="btn">
        <Link
            href={{
                pathname: "/SubmitBet/[gameID]/[bettype]",
                query: {
                    gameID: {num},
                    bettype: 1
                }
            }}
            as={`/SubmitBet/${num}/1`}
        passHref>
          {game[away][type]}
        </Link>
      </button>
    </td>
  );
};

function addplus(oddsnum) {
  if (oddsnum < 0) {
    var oddsstring = oddsnum.toString()
  } else {
    var oddsstring = "+" + oddsnum.toString()
  }
  return (oddsstring)
}

export default BetInterface3x2