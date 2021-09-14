import Link from 'next/link'

function Sidebar() {
    return (
        <div>
            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                
                <Link href="/" passHref>
                    <a class="sidebar-brand d-flex align-items-center justify-content-center">
                        <div class="sidebar-brand-icon rotate-n-15">
                            <i class="fas fa-laugh-wink"></i>
                        </div>
                        <div class="sidebar-brand-text mx-3">BetSol</div>
                    </a>
                </Link>

                <hr class="sidebar-divider my-0"/>

                <Link href="/MyAccount" passHref>
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">
                            <i class="fas fa-fw fa-tachometer-alt"></i>
                            <span>My Account</span>
                        </a>
                    </li>
                </Link>


                <hr class="sidebar-divider"/>

                <div class="sidebar-heading">
                    Find Bets
                </div>

                <Link href="/NFL" passHref>
                    <li class="nav-item">
                        <a class="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <span>NFL</span>
                        </a>
                    </li>
                </Link>

                <Link href="/MLB" passHref>
                    <li class="nav-item">
                        <a class="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <span>MLB</span>
                        </a>
                    </li>
                </Link>

                <Link href="/NBA" passHref>
                    <li class="nav-item">
                        <a class="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <span>NBA</span>
                        </a>
                    </li>
                </Link>

                <hr class="sidebar-divider d-none d-md-block"/>

                <div class="text-center d-none d-md-inline">
                    <button class="rounded-circle border-0" id="sidebarToggle"></button>
                </div>
            </ul>
        </div>
    );
  }
  
  export default Sidebar;