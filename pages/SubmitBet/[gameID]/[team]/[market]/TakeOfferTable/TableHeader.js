function TableHeader({data,datakeys,i,market}) {
    if (market == "h2h") return (
      <tr>
        <th class="font-weight-medium bg-gray-600 text-gray-100 col-auto">Team</th>
        <th class="font-weight-medium bg-gray-600 text-gray-100 col-auto">Odds</th>
        <th class="font-weight-medium bg-gray-600 text-gray-100 col-auto">Your Wager</th>
        <th class="font-weight-medium bg-gray-600 text-gray-100 col-auto">Their Wager</th>
        <th class="font-weight-medium bg-gray-600 text-gray-100 col-auto">Win</th>
        <th class="font-weight-medium bg-gray-600 text-gray-100 col-auto">Take Offer</th>
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
        <th class="font-weight-medium bg-gray-600 text-gray-100 col-auto">Take Offer</th>
      </tr>
    )
    else if (market == "total") return (
      <tr>
        <th class="font-weight-medium bg-gray-600 text-gray-100 col-auto">Over/Under</th>
        <th class="font-weight-medium bg-gray-600 text-gray-100 col-auto">Odds</th>
        <th class="font-weight-medium bg-gray-600 text-gray-100 col-auto">Your Wager</th>
        <th class="font-weight-medium bg-gray-600 text-gray-100 col-auto">Their Wager</th>
        <th class="font-weight-medium bg-gray-600 text-gray-100 col-auto">Win</th>
        <th class="font-weight-medium bg-gray-600 text-gray-100 col-auto">Take Offer</th>
      </tr>
    )
    else return (
      <tr> </tr>
    )
  }

  export default TableHeader