import Link from 'next/dist/client/link';

const SubmitButton = props => {
    return (
        // <button class="btn">
        //     <Link href="/MyAccount" passHref>
        //     </Link>
        // </button>
        <Link
            href={{
                pathname: "/SubmitBet/[gameID]/[team]/[market]/Confirm/Take/[wager]/[win]/[line]",
                query: {
                    // gameID: {props.gameID},
                    // team: {props.team},
                    // market: {props.market}
                }
            }}
            as={`/SubmitBet/${props.gameID}/${props.team}/${props.market}/Confirm/Take/${props.wager}/${props.win}/${props.line}`}
            // as={`/SubmitBet/8e9ae629b30fdb1fe9430477f906eafd/${props.gameID}/h2h`}
        passHref>
            <div class="col-sm-2 btn btn-success btn-icon-split">
                <input type="submit" value="Submit" class="btn btn-success btn-icon-split" />
            </div>
        </Link>
    )
}

export default SubmitButton