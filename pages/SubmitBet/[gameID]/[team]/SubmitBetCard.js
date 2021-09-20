import BetInterface3x2 from '../../../../common/BetInterface3x2'

const SubmitBetCard = ({ gameID, oddsdata, market, team }) => {
    return (
      <div class="col-md-6 mb-4">
        <div class="card border-left-primary shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <BetInterface3x2  
                gameID={gameID}
                oddsdata={oddsdata}
                market = {market}
                team = {team}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

export default SubmitBetCard