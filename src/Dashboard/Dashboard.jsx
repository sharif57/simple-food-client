
// import { Link } from "react-router-dom";

// const Dashboard = () => {

//     return (
//         <div>
//             {/* Render the Navbar at the top */}

//             <div className="flex">
//                 {/* Dashboard Sidebar */}
//                 <div className="w-64 min-h-screen bg-[#fdfdfd] pt-6  border-2">


//                     <Link to={'/dashboard/allMenus'}
//                         className={"btn  hover:btn-success w-full"}>
//                         Manage Menu
//                     </Link>
//                 </div>


//             </div>
//         </div>
//     );
// };

// export default Dashboard;


import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            {/* Your Navbar */}
            <div className="navbar bg-base-100 max-w-7xl shadow-lg mx-auto">
                <div className="navbar bg-base-100 max-w-7xl  shadow-lg mx-auto">
                    <div className="flex-1">
                        <Link to={'/'} className="btn text-xl size-20">
                            <img src="/logo.png" alt="Logo" />
                        </Link>
                    </div>
                    <div className="flex-none gap-2">
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex">
                {/* Sidebar */}
                <div className="w-64 min-h-screen bg-[#fdfdfd] pt-6 border-2">
                    <Link to={'/dashboard/allMenus'}
                        className={"btn hover:btn-success w-full"}>
                        Manage Menu
                    </Link>
                </div>

                {/* Main content area where nested routes will be rendered */}
                <div className="flex-grow p-6 bg-gray-100">
                    <Outlet /> 
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
