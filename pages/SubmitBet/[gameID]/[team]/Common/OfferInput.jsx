import { ArrowRight } from 'react-bootstrap-icons';



let OfferInput = ({ gameID, oddsdata, market, team }) => {

  return (

    <div class="container-fluid p-2"> 

      <form class="p-0">  
        <div class="form-group row">
            <div class="col-sm-3 text-gray-800">
              <div class="customtooltip"> 
                Wager &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
                <span class="tooltiptext"> Lose this amount</span>
              </div> 
              <input type="text" class="form-control form-control-user" id="exampleFirstName" placeholder="" />
            </div>

            <div class="col-sm-3 text-gray-800">
              <div class="customtooltip"> 
                Odds &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
                <span class="tooltiptext"> Odds of your bet</span>
              </div> 
              <input type="text" class="form-control form-control-user" id="exampleFirstName" placeholder="" />
            </div>

            <div class="col-sm-3 text-gray-800">
              <div class="customtooltip"> 
                Win &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
                <span class="tooltiptext"> Win this amount, and get your wager back</span>
              </div> 
              <input type="text" class="form-control form-control-user" id="exampleFirstName" placeholder="" />
            </div>
            
            <div class="col-sm-2">
              <div class="text-gray-100"> submit</div>
              <a href="#" class="btn btn-success btn-icon-split">
                <span class="text">Submit</span>
              </a>
            </div>
        </div>
      </form>
    </div>
  );
};



export default OfferInput