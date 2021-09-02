import React from 'react';
//import oddsdata from '../../data/formatted.json'

const BetInterface3x2 = ({oddsdata, num}) => {
  const game1 = [
    {
      team: oddsdata.home_team[num],
      h2h: addplus(oddsdata.odds[num].h2h_home),
      spread: addplus(oddsdata.odds[num].spread_home_line) + ": " + addplus(oddsdata.odds[num].spread_home),
      overunder: oddsdata.odds[num].totals_line + ": " + addplus(oddsdata.odds[num].totals_over) + "o",
    },
    {
      team: oddsdata.away_team[num],
      h2h: oddsdata.odds[num].h2h_away,
      spread: addplus(oddsdata.odds[num].spread_away_line) + ": " + addplus(oddsdata.odds[num].spread_away),
      overunder: oddsdata.odds[num].totals_line + ": " + addplus(oddsdata.odds[num].totals_under) + "u",
    }
  ]

  return (
    <>
      <Description 
        home_team = {game1[0].team}
        away_team= {game1[1].team}
        date={oddsdata.commence_time[num]}
      />
      <div class="mb-0 text-s text-gray-800">
        <table class="table-bordered" id="dataTable" width="100%" cellspacing="0">
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
                  />
                );
              })}
            </tbody>
        </table>
      </div>
    </>
  );
};

const Description = ({ away_team, home_team, date }) => {
  //const date_num = Date.parse(date);
  const day = new Date(date).getDate()
  const month = new Date(date).getMonth()
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

const Line = ({ h2h, team, spread, overunder }) => {
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