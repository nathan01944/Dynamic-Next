import TakeOfferTable from "./TakeOfferTable";
import OfferInput from "./Common/OfferInput";

const TakeOffer = ({ gameID, oddsdata, market, team }) => {
  return (
    <div class="container-fluid col-lg-6 pr-2"> 

      <div class="card shadow mb-6">

        <a href="" class="d-block card-header py-3" data-toggle="collapse"
            role="button" aria-expanded="true" aria-controls="collapseCardExample">
            <h6 class="m-0 font-weight-bold text-primary">Execute Order (Take Offer)</h6>
        </a>

        <div class="collapse show" id="collapseCardExample">
          <div class="card-body">

            
            <OfferInput />

            <div class="text-gray-800 font-weight-bold pl-3 pb-2">
              Available Offers
            </div>

            <TakeOfferTable 
              oddsdata = {oddsdata}
              market = {market}
              team = {team}
              gameID = {gameID}
            />

          </div>
        </div>
      </div>
    </div>
  );
};



export default TakeOffer