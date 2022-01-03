function DeleteOffer(offers,ID) {
    let offersDeleted = {}

    let keys = Object.keys(offers)
    for (let key of keys){
        if (key != ID){
            offersDeleted[key] = offers[key]
        }
        else{
            //console.log("pls")
        }
    }
    console.log("here")
    console.log(offersDeleted==offers)
    console.log(Object.keys(offersDeleted).length)
    console.log(Object.keys(offers).length)

    return(offersDeleted)
}

export default DeleteOffer