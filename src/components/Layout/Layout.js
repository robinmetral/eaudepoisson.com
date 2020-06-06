import React from "react";
import PropTypes from "prop-types";

import Banner from "../Banner";

const Layout = ({ children }) => {
  return (
    <>
      <Banner />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
