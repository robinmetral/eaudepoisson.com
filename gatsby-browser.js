import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider } from "emotion-theming";

import ApolloClient from "./src/apollo/client";
import theme from "./src/theme";
import GlobalStyles from "./src/components/GlobalStyles";

// load custom fonts
require("@openfonts/merriweather_all");
require("@openfonts/open-sans_all");

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={ApolloClient}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
  </ApolloProvider>
);
