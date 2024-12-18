import React from "react";
import { NavLink } from "react-router-dom";
import shopping from "../assets/online-shopping.png";

const Header = () => {
  return (
    <header className="bg-gray-100 shadow-md py-5 px-24">
      <div className="flex justify-between items-center">
        <div>
          <NavLink
            to="/"
            className="flex gap-2 items-center text-3xl font-bold text-gray-800 font-Outfit"
          >
            <img src={shopping} alt="" className="w-9" />
            BuyHive
          </NavLink>
        </div>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <NavLink
                to="/"
                className="text-lg text-gray-800 hover:text-blue-600 transition-colors duration-300 font-Outfit"
                activeClassName="text-blue-600"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className="text-lg text-gray-800 hover:text-blue-600 transition-colors duration-300 font-Outfit"
                activeClassName="text-blue-600"
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className="text-lg text-gray-800 hover:text-blue-600 transition-colors duration-300 font-Outfit"
                activeClassName="text-blue-600"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className="text-lg text-gray-800 hover:text-blue-600 transition-colors duration-300 font-Outfit"
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
