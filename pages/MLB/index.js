import React from 'react';

function MLB() {
  return (
      <div class="container-fluid"> 
          content here
    </div>
  );
}

export default MLB;

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

const fetcher = (url) => fetch(url).then((res) => res.json());

function FeaturedBets() {
  //let { data, error } = useSWR('/api/Odds', fetcher)
  //const odds = data
  const { data, error } = useSWR('/api/Odds/houseodds', fetcher)
  //console.log(odds)
  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return(
      <div class="container-fluid"> 

          <div class="row">
              <div class="card shadow mb-4">

                  <a href="#collapseCardExample" class="d-block card-header py-3" data-toggle="collapse"
                      role="button" aria-expanded="true" aria-controls="collapseCardExample">
                      <h6 class="m-0 font-weight-bold text-primary">MLB Bets</h6>
                  </a>

                  <div class="collapse show" id="collapseCardExample">
                      <div class="card-body">
                          
                          <div class="row">

                              {[...Array(10)].map((x, i) =>
                                  <BetCard 
                                      num={i} 
                                      oddsdata = {data}
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
