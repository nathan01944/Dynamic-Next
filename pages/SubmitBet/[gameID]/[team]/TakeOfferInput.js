import { BsCheck } from 'react-bootstrap-icons';

let TakeOfferInput = ({ gameID, oddsdata, market, team }) => {

  return (

    <div class="container-fluid p-2"> 

      <form class="p-0">  
          <div class="form-group row">
              <div class="col-sm-3 pr-0">
                  <div class="text-gray-800 pl-2">Amt to Risk</div>
                  <input type="text" class="form-control form-control-user" id="exampleFirstName"
                      placeholder="Risk" />
              </div>
              <div class="col-sm-3 pr-0">
                <div class="text-gray-800 pl-2">Odds </div>
                <input type="text" class="form-control form-control-user" id="exampleLastName"
                    placeholder="Odds"/>
              </div>
              <div class="col-sm-3 pr-0">
                <div class="text-gray-800 pl-2">Amt to Win </div>
                <input type="text" class="form-control form-control-user" id="exampleLastName"
                    placeholder="Win"/>
              </div>
              
              <div class="col-sm-2 p-0 pl-2">
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



export default TakeOfferInput