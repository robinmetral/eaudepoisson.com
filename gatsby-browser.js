import React from "react"
import { ThemeProvider } from "emotion-theming"

import theme from "./src/theme"
import GlobalStyles from "./src/components/GlobalStyles"

// load custom fonts
require("typeface-merriweather")
require("typeface-open-sans")

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
