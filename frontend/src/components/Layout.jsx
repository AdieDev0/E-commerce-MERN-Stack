import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { ToastContainer } from "react-toastify";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <ToastContainer /> 
      <Footer />
    </div>
  );
};

export default Layout;
