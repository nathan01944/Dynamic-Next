import BetInterface3x2 from '.'

const SubmitBetCard = ({ gameID, oddsdata, market, team }) => {
    return (
      <div class="col-md-6 mb-3">
        <div class="card border-left-primary shadow p-1 ">
          <div class="card-body pt-3 pb-3">
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