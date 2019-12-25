import { createGlobalStyles } from "./GlobalStylesService"

describe("GlobalStylesService", () => {
  it("should return the global styles", () => {
    const actual = createGlobalStyles()
    expect(actual.styles).toMatchSnapshot()
  })
})
