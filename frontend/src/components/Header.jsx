import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-100 shadow-md py-5 px-10">
      <div className="flex justify-between items-center">
        <div>
          <NavLink to="/" className="text-xl font-bold text-gray-800 font-Outfit">
            Logo
          </NavLink>
        </div>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <NavLink
                to="/"
                className="text-gray-800 hover:text-blue-600 transition-colors duration-300 font-Outfit"
                activeClassName="text-blue-600"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className="text-gray-800 hover:text-blue-600 transition-colors duration-300 font-Outfit"
                activeClassName="text-blue-600"
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className="text-gray-800 hover:text-blue-600 transition-colors duration-300 font-Outfit"
                activeClassName="text-blue-600"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className="text-gray-800 hover:text-blue-600 transition-colors duration-300 font-Outfit"
                activeClassName="text-blue-600"
              >
                Cart (0)
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
