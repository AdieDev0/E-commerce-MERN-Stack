import React from "react";
import Footer from "../components/Footer.jsx";

const Footer = (porps) => {
  return (
    <div>
      
      <main>{porps.children}</main>
      <Footer />
    </div>
  );
};

export default layout;
