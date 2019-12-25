// wraps all tests with the emotion theme provider
// from https://testing-library.com/docs/react-testing-library/setup#custom-render

import React from "react"
import { render } from "@testing-library/react"
import { ThemeProvider } from "emotion-theming"

import theme from "./src/theme"
import GlobalStyles from "./src/components/GlobalStyles"

const ThemeWrapper = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: ThemeWrapper, ...options })

// re-export everything
export * from "@testing-library/react"

// override render method
export { customRender as render }
