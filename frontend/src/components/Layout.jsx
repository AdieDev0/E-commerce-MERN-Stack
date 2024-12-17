import React from "react";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const layout = (porps) => {
  return (
    <div>
      <Header />
      <main>{porps.children}</main>
      <Footer />
    </div>
  );
};

export default layout;
