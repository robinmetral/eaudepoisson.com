import React from "react"
import { render } from "test-utils"

import GlobalStyles from "./GlobalStyles"
import { createGlobalStyles } from "./GlobalStylesService"

jest.mock("./GlobalStylesService", () => ({
  createGlobalStyles: jest.fn(),
}))

describe("GlobalStyles", () => {
  it("should call createGlobalStyles", () => {
    render(<GlobalStyles />)

    expect(createGlobalStyles).toHaveBeenCalled()
  })
})
