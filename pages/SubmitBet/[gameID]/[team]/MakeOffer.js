import MakeOfferInput from "./MakeOfferInput";
import MakeOfferTable from "./MakeOfferTable";

const MakeOffer = ({ gameID, oddsdata, market, team }) => {
  return (
    <div class="container-fluid"> 

      <div class="card shadow mb-6">

        <a href="" class="d-block card-header py-3" data-toggle="collapse"
            role="button" aria-expanded="true" aria-controls="collapseCardExample">
            <h6 class="m-0 font-weight-bold text-primary">Submit Order (Make Offer)</h6>
        </a>

        <div class="collapse show" id="collapseCardExample">
          <div class="card-body">

            
            <MakeOfferInput />

            <div class="text-gray-800 font-weight-bold pl-3 pb-2">
              Competing Offers
            </div>
            <MakeOfferTable 
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



export default MakeOffer