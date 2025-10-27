// In the name of Allah
import { User } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-base-100 w-11/12 mx-auto ">
      <div className=" mx-auto py-3 flex justify-between items-center">
        {/* Left Section - Logo or Name */}
        <h1 className="text-xl font-semibold text-gray-800">MyWebsite</h1>

        {/* Middle Section - Nav Links */}
        <ul className="flex gap-8 text-gray-700 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-colors ${isActive ? "text-secondary font-semibold" : "hover:text-secondary"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition-colors ${isActive ? "text-secondary font-semibold" : "hover:text-secondary"}`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/career"
              className={({ isActive }) =>
                `transition-colors ${isActive ? "text-secondary font-semibold" : "hover:text-secondary"}`
              }
            >
              Career
            </NavLink>
          </li>
        </ul>

        {/* Right Section - Login */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
            <User size={20} className="text-gray-700" />
          </div>
          <button className="bg-gray-800 text-white px-5 py-2 rounded-md hover:bg-gray-700 transition-colors">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
