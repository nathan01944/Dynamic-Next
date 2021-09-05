import React from "react";
import SmallCardGreen from "../../common/Cards/SmallCard";

const TotalWagers = ({ }) => {
    return (
        <div class="col-xl-4 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                Total Wagered</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">$300</div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const TotalWinnings = ({ }) => {
    return (
        <div class="col-xl-4 col-md-6 mb-4">
            <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                Total Winnings </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">$350</div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const PendingWagers = ({ }) => {
    return (
        <div class="col-xl-4 col-md-6 mb-4">
            <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                Pending Wagers </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">$50</div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function AccountDetails() {
    return (
        <div class = "row col-xl-12">
            <TotalWagers />
            <TotalWinnings />
            <PendingWagers />
        </div>
    )
}

export default AccountDetails

