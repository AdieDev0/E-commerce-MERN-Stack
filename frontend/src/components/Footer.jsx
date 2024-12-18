import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 px-10 text-center mt-auto">
      <h1 className="text-lg font-semibold mb-4">By Adie | DevAdie</h1>
      <p className="text-gray-600">
        <Link to="/about" className="text-blue-600 hover:underline mx-2">
          About
        </Link>
        <Link to="/contact" className="text-blue-600 hover:underline mx-2">
          Contact
        </Link>
        <Link to="/policy" className="text-blue-600 hover:underline mx-2">
          Privacy Policy
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
