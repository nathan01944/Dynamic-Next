import Link from 'next/dist/client/link';

const SubmitButton = props => {
    console.log(props)
    console.log("her")

    return (
        // <button class="btn">
        //     <Link href="/MyAccount" passHref>
        //     </Link>
        // </button>
        <Link
            href={{
                pathname: "/SubmitBet/[gameID]/[team]/[market]",
                query: {
                    gameID: {props.gameID,
                    team: {props.team},
                    market: {props.market}
                }
            }}
            as={`/SubmitBet/${gameID}/${away}/${market}`}
            // as={`/SubmitBet/8e9ae629b30fdb1fe9430477f906eafd/0/h2h`}
        passHref>
            <div class="col-sm-2 btn btn-success btn-icon-split">
                <input type="submit" value="Submit" class="btn btn-success btn-icon-split" />
            </div>
        </Link>
    )
}

export default SubmitButton