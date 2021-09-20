import useSWR from 'swr';
import BetInterface3x2 from '../common/BetInterface3x2'

const BetCard = ({ gameID, oddsdata }) => {
    return (
        <div class="col-xl-6 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <BetInterface3x2  
                            gameID={gameID}
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
    // const { data, error } = useSWR('/api/Odds', fetcher)
    const { data, error } = useSWR('/api/Odds/houseodds', fetcher)

    if (error) return <div>{error.message}</div>
    if (!data) return <div>Loading...</div>
    //let gameIDs = await Object.keys(JSON.parse(data.data.raw))

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
                            
                            <div class="row">

                                {[...Array(4)].map((x, i) =>
                                    <BetCard 
                                        gameID={Object.keys(JSON.parse(data.data.raw))[i]} 
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

export default FeaturedBets;