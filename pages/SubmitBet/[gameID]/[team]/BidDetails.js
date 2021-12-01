import React from "react";
// import SmallCardGreen from "../../common/Cards/SmallCard";

const CurrentAsk = ({ }) => {
    return (
        <div class="col-xl-4  mb-4">
            <div class="card border-left-primary shadow">
                <div class="card-body py-3">
                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                        Current Ask</div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">$300</div>
                </div>
            </div>
        </div>
    )
}

const Midpoint = ({ }) => {
    return (
        <div class="col-xl-4  mb-4">
            <div class="card border-left-success shadow">
                <div class="card-body py-3">
                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                        Midpoint</div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">$300</div>
                </div>
            </div>
        </div>
    )
}

const CurrentBid = ({ }) => {
    return (
        <div class="col-xl-4  mb-4">
            <div class="card border-left-warning shadow">
                <div class="card-body py-3">
                    <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                        Current Bid</div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">$300</div>
                </div>
            </div>
        </div>
    )
}

function BidDetails() {
    return (
        <div class = "row col-xl-12">
            <CurrentAsk />
            <Midpoint />
            <CurrentBid />
        </div>
    )
}

export default BidDetails

