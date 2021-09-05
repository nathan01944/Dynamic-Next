import Collapsecard from "../../common/Cards/Collapsecard";
import React from "react";

function BetHistory() {
    return (
        <div class="col-lg-12">
            <div class="card shadow mb-4">
                <a href="#collapseCardExample" class="d-block card-header py-3" data-toggle="collapse"
                    role="button" aria-expanded="true" aria-controls="collapseCardExample">
                    <h6 class="m-0 font-weight-bold text-primary">Bet History</h6>
                </a>
                <div class="collapse show" id="collapseCardExample">
                    <div class="card-body">
                        content
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BetHistory

