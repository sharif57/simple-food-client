import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);  // Getting user and logOut from context

  // Function to handle logout
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log('Logout successful');
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <div className="navbar bg-base-100 border-4">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Home</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <Link to={'/'} className="btn text-xl size-1/4">
            <img src="/logo.png" alt="Logo" />
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/menus'}>Our menus</NavLink></li>
            <li><NavLink to={'/meal-plans'}>Meal plans</NavLink></li>
            <li><NavLink to={'/catering'}>Catering</NavLink></li>
            <li><NavLink to={'/how'}>How it works</NavLink></li>
            <li><NavLink to={'/testimonials'}>Testimonials</NavLink></li>
            <li><NavLink to={'/faq'}>FAQ</NavLink></li>
            {/* Display user's email if logged in */}
            {user && <li><NavLink to={'/profile'}>{user.email}</NavLink></li>}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          {/* If user is not logged in, show login and register buttons */}
          {user ? (
            <>
              <Link to={'/login'} className="btn btn-success mr-6 btn-outline">Log in</Link>
              <Link to={'/register'} className="btn btn-success">Sign up</Link>
            </>
          ) : (
            <>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    {/* Show user's profile picture if available */}
                    <img alt="User Avatar" src={user?.photoURL || '/default-avatar.png'} />
                  </div>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  <li><a className="justify-between">Profile</a></li>
                  <li><a>Settings</a></li>
                  <li><a onClick={handleLogOut}>Logout</a></li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
