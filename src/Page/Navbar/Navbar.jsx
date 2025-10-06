import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/Authprovider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handlelogout = () => {
    logOut()
      .then(() => {
        console.log("logOut");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="">
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/fidback">Feedback</Link>
              </li>
            </ul>
          </div>
          <div className="btn btn-ghost text-xl font-semibold tracking-wide hover:scale-105 transition-all duration-300 mb-4">
            <span className="text-6xl font-bold text-orange-400 drop-shadow-sm">
              N
            </span>
            <span className="text-gray-700 pl-1">
              ibhriti<span className="text-sm text-yellow-500">.com</span>
            </span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-xl ">
              <Link to="/">Home</Link>
            </li>

            <li className="text-xl ">
              <Link to="/About">About</Link>
            </li>

            <li className="text-xl ">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="text-xl ">
              <Link to="/fidback">Feedback</Link>
            </li>
            <li className="text-xl ">
              <Link to="/otp">otp</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button>
            {" "}
            <h1 className=""> {user && <span>{user.displayName}</span>}</h1>
            {user ? (
              <span className="text-blue-400">
                {user.email}{" "}
                <button className="text-black text-xl" onClick={handlelogout}>
                  LogOut
                </button>
              </span>
            ) : (
              <Link to="/login">
                <span className="text-xl ">LogIn</span>
              </Link>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
