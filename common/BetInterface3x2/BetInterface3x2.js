import React, { Component } from 'react';
import Link from 'next/dist/client/link';
//import oddsdata from '../../data/formatted.json'

const BetInterface3x2 = ({oddsdata, num}) => {
  const gamedata = JSON.parse(oddsdata.data.raw)
  const keys = Object.keys(gamedata)
  const game = gamedata[keys[0]]

  console.log(keys[num])

  const game1 = [
    {
      team: game.home_team,
      h2h: addplus(game.odds.h2h_home),
      spread: addplus(game.odds.spread_home_line) + ": " + addplus(game.odds.spread_home),
      overunder: game.odds.totals_line + ": " + addplus(game.odds.totals_over) + "o",
    },
    {
      team: game.away_team,
      h2h: addplus(game.odds.h2h_away),
      spread: addplus(game.odds.spread_away_line) + ": " + addplus(game.odds.spread_away),
      overunder: game.odds.totals_line + ": " + addplus(game.odds.totals_under) + "u",
    }
  ]


  return (
    <div>
      <Description 
        home_team = {game1[0].team}
        away_team= {game1[1].team}
        date={game.commence_time[num]}
      />

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
          here
      </Link>

      <div class="mb-0 text-s text-gray-800">
        <table class="table-bordered" id="dataTable" width="100%" cellSpacing="10">
            <thead>
                <tr>
                    <th>Team</th>
                    <th>Spread</th>
                    <th>Moneyline</th>
                    <th>Over/Under</th>
                </tr>
            </thead>
            <tbody>
              {game1.map((data, key) => {
                return (
                  <Line
                    team={data.team}
                    h2h={data.h2h}
                    spread= {data.spread}
                    overunder={data.overunder}
                    num = {num}
                  />
                );
              })}
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
      <div class="text-s font-weight-bold text-primary mb-1">
        {home_team} vs {away_team}
      </div>
      <div class="text-s font-weight-bold text-primary mb-1">
        {month}/{day} @ {hour}:{mins}
      </div>
    </div>
  );
};

const Line = ({ h2h, team, spread, overunder,num }) => {
  if (!h2h) return <div />;
  return (
    <tr>
      <td>{team}</td>
      <td>{spread}</td>
      <td>{h2h}</td>
      <td>{overunder}</td>
    </tr>
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