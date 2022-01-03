import useSWR from 'swr';
import BetInterface3x2 from '../common/BetInterface3x2'
import SubmitBetCard from '../common/BetInterface3x2/SubmitBetCard';

const fetcher = (url) => fetch(url).then((res) => res.json());

function FeaturedBets() {

    const { data, error } = useSWR('/api/Odds/offers', fetcher)

    if (error) return <div>{error.message}</div>
    if (!data) return <div>Loading...</div>

    return(
        <div class="container-fluid"> 

            <div class="row">
                <div class="card shadow mb-4">

                    <a href="#collapseCardExample" class="d-block card-header py-3" data-toggle="collapse"
                        role="button" aria-expanded="true" aria-controls="collapseCardExample">
                        <h6 class="m-0 font-weight-bold text-primary">Featured Bets</h6>
                    </a>

                    <div class="collapse show" id="collapseCardExample">
                        <div class="card-body">
                            
                            <div class="row p-1">

                                {[...Array(6)].map((x, i) =>
                                    <SubmitBetCard  
                                        gameID = {Object.keys(JSON.parse(data.marketodds.raw))[i]}
                                        oddsdata={JSON.parse(data.marketodds.raw)}
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