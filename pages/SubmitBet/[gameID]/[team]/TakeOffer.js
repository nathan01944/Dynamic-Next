import TakeOfferTable from "./TakeOfferTable";
import TakeOfferInput from "./TakeOfferInput";

const TakeOffer = ({ gameID, oddsdata, market, team }) => {
  return (
    <div class="container-fluid"> 

      <div class="card shadow mb-6">

        <a href="" class="d-block card-header py-3" data-toggle="collapse"
            role="button" aria-expanded="true" aria-controls="collapseCardExample">
            <h6 class="m-0 font-weight-bold text-primary">Take Offers</h6>
        </a>

        <div class="collapse show" id="collapseCardExample">
          <div class="card-body">

            
            <TakeOfferInput />

            <div class="text-gray-800 font-weight-bold pl-3 pb-2">
              Available Offers
            </div>

            <TakeOfferTable />

          </div>
        </div>
      </div>
    </div>
  );
};



export default TakeOffer