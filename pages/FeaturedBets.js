import BetInterface3x2 from '../common/BetInterface3x2'
import MLBdata from '../data/formatted.json'

const BetCard = ({ num, oddsdata }) => {
    return (
        <div class="col-xl-6 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <BetInterface3x2  
                            num={num}
                            oddsdata={oddsdata}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
  };
  

function FeaturedBets() {
    return(
        <div class="container-fluid"> 

            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Featured Bets</h1>
                <a href="#" class="btn btn-primary btn-icon-split">
                    <span class="icon text-white-50">
                        <i class="fas fa-arrow-right"></i>
                    </span>
                    <span class="text">Invite Friends</span>
                </a>
            </div>


            <div class="row">
                <div class="card shadow mb-4">

                    <a href="#collapseCardExample" class="d-block card-header py-3" data-toggle="collapse"
                        role="button" aria-expanded="true" aria-controls="collapseCardExample">
                        <h6 class="m-0 font-weight-bold text-primary">Featured Bets</h6>
                    </a>

                    <div class="collapse show" id="collapseCardExample">
                        <div class="card-body">
                            
                            <div class="row">

                                {[...Array(10)].map((x, i) =>
                                    <BetCard 
                                        num={i} 
                                        oddsdata = {MLBdata}
                                    />
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedBets;