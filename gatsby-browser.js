import React from "react"
import { ThemeProvider } from "emotion-theming"

import theme from "./src/theme"
import GlobalStyles from "./src/components/GlobalStyles"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
