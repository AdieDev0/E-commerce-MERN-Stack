import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-slate-300 py-7 px-14">
      <div className="flex justify-between">
        <div>
          <p className="cursor-pointer">Logo</p>
        </div>
        <div>
          <ul className="flex gap-5">
            <li className="cursor-pointer">
              <NavLink to="/" />
              Home
            </li>
            <li className="cursor-pointer">
              <NavLink to="/" />
              Register
            </li>
            <li className="cursor-pointer">
              <NavLink to="/" />
              Login
            </li>
            <li className="cursor-pointer">
              <NavLink to="/" />
              Cart(0)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
