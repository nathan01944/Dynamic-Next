
import CreateOffer from './CreateOffer'

function CreateHouseOffers(odds) {
    let offers = {}

    let keys = Object.keys(odds)
    for (let key of keys){
        let game = odds[key]
        
        let vigs = [0.02,0.025,0.03]
        let amts = [10,10,10]

        for (var i = 0; i < vigs.length; i++) {
            let markets = ["h2h","spread","total"]

            for (let market of markets) {
                let [offer1,offer2] = CreateOffer(game,vigs[i],amts[i],market)
                offers[offer1.offerID] = offer1
                offers[offer2.offerID] = offer2
            }

        }
        
    }

    return(offers)
}

export default CreateHouseOffers