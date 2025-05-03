import { Link } from "react-router-dom";

const Admindashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-4xl shadow-lg rounded-2xl p-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Admin Dashboard
        </h2>

        {/* Mobile Dropdown */}
        <div className="lg:hidden mb-6">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn w-full bg-slate-600 text-white hover:bg-slate-700"
            >
              Menu
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
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
            </button>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-2 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/admin_route">Add Product</Link>
              </li>
              <li>
                <Link to="/addcategory">Add Category</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex justify-center gap-8">
          <Link
            to="/admin_route"
            className="btn btn-outline btn-warning text-lg px-6 py-2"
          >
            Add Product
          </Link>
          <Link
            to="/addcategory"
            className="btn btn-outline btn-warning text-lg px-6 py-2"
          >
            Add Category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Admindashboard;
