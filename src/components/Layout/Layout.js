import React from "react";
import PropTypes from "prop-types";

import Banner from "../Banner";
import Nav from "../Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Banner />
      <Nav />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
