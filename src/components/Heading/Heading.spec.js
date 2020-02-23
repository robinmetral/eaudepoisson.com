import React from "react"
import { render } from "test-utils"
import { matchers } from "jest-emotion"

import Heading from "./Heading"

// import emotion matchers
expect.extend(matchers)

describe("Heading", () => {
  it("should render the title text", () => {
    const { getByTestId } = render(<Heading h="1">Title</Heading>)

    expect(getByTestId("header")).toHaveTextContent("Title")
  })

  it("should have typeface merriweather", () => {
    const { getByTestId } = render(<Heading h="1">Title</Heading>)

    expect(getByTestId("header")).toHaveStyleRule(
      "font-family",
      '"Merriweather",serif'
    )
  })

  describe("centering", () => {
    it("should be centered with the the center prop", () => {
      const { getByTestId } = render(
        <Heading h="1" center>
          Title
        </Heading>
      )

      expect(getByTestId("header")).toHaveStyleRule("text-align", "center")
    })

    it("should not be centered without the the center prop", () => {
      const { getByTestId } = render(<Heading h="1">Title</Heading>)

      expect(getByTestId("header")).toHaveStyleRule("text-align", "left")
    })
  })

  describe("element", () => {
    it("should render an h1 element", () => {
      const h2 = render(<Heading h="1">Title</Heading>)

      expect(h2.getByTestId("header")).toContainHTML("<h1")
    })

    it("should render an h2 element", () => {
      const h2 = render(<Heading h="2">Title</Heading>)

      expect(h2.getByTestId("header")).toContainHTML("<h2")
    })

    it("should render an h3 element", () => {
      const h3 = render(<Heading h="3">Title</Heading>)

      expect(h3.getByTestId("header")).toContainHTML("<h3")
    })
  })
})
