import React from "react";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const layout = (children) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default layout;
