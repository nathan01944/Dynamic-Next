const TakeOfferTable = ({ gameID, oddsdata, market, team }) => {
  return (
    <div class="text-gray-800 col-md-12 justify-content-center">
      <table class="table-bordered th" id="dataTable" width="100%" cellSpacing="20">
          <thead>
              <tr>
                  <th class="font-weight-medium bg-gray-600 text-gray-100 col-xl-auto">User</th>
                  <th class="font-weight-medium bg-gray-600 text-gray-100 col-xl-auto">Odds</th>
                  <th class="font-weight-medium bg-gray-600 text-gray-100 col-xl-auto">Wager</th>
              </tr>
          </thead>
          <tbody class="text-gray-600">
            <tr>
                <td class="p-2"> Usuer1LongNameEven</td>
                <td class="p-2"> +120</td>
                <td class="p-2"> $120</td>
            </tr>
            <tr>
                <td class="p-2"> Usuer1LongNameEven</td>
                <td class="p-2"> +120</td>
                <td class="p-2"> $120</td>
            </tr>
            <tr>
                <td class="p-2"> Usuer1LongNameEven</td>
                <td class="p-2"> +120</td>
                <td class="p-2"> $120</td>
            </tr>
          </tbody>
      </table>
    </div>
  );
};



export default TakeOfferTable