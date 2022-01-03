function FilterOffers(offers,gameID,market,home) {
    let bestOfferKey
    let bestOffer = 1000

    let keys = Object.keys(offers)
    for (let key of keys){
        if (offers[key].gameID == gameID){
            if (offers[key].market == market){
                if (offers[key].home == home){
                    if (offers[key].odds < bestOffer) {
                        bestOffer = offers[key].odds
                        bestOfferKey = key
                    }
                }
            }
        }
    }

    return(bestOfferKey)
}

export default FilterOffers