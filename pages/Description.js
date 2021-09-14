// function HouseWinnings() {
//     return (
//         <div class= "justify-content-center">
//             <div class="col-xl-3 col-md-6 mb-4">
//                 <div class="card border-left-success shadow h-100 py-2">
//                     <div class="card-body">
//                         <div class="row no-gutters align-items-center">
//                             <div class="col mr-2">
//                                 <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
//                                     Total House Profits Returned To Bettors</div>
//                                 <div class="h5 mb-0 font-weight-bold text-gray-800">$100</div>
//                             </div>
//                             <div class="col-auto">
//                                 <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
        
//     )
// }

function Description() {
    return (
        <div class="container-fluid"> 
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800"> </h1>
                <a href="#" class="btn btn-primary btn-icon-split">
                    <span class="icon text-white-50">
                        <i class="fas fa-arrow-right"></i>
                    </span>
                    <span class="text">Invite Friends</span>
                </a>
            </div>

            <div class="row mb-4 text-center justify-content-center">
                <h1 class="h1 mb-0 text-gray-800 justify-content-center">Bet Big No Vig</h1>
            </div>

            <div class="row mb-4 text-center justify-content-center">
                <h3 class="h3 mb-0 text-gray-800 justify-content-center">The House Never Wins</h3>
            </div>

            <div class="row mb-4 text-center justify-content-center">
                <h4 class="h4 mb-0 text-gray-800 justify-content-center">Bet in Solana and get paid in Solana (Ethereum Coming Soon!)</h4>
            </div>

            {/* <HouseWinnings /> */}
        </div>
    )
    
}

export default Description;