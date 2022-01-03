function FindGameIDs(offers) {
    let GameIDs = []

    let keys = Object.keys(offers)
    for (let key of keys){
        GameIDs.push(offers[key].gameID)
    }

    const unique = Array.from(new Set(GameIDs))

    return(unique)
}


export default FindGameIDs