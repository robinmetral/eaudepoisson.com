import React from "react"
import { useStaticQuery } from "gatsby"
import { render } from "test-utils"

import Layout from "./Layout"
import layoutStaticQuery from "./__fixtures__/layoutStaticQuery"

beforeEach(() => {
  useStaticQuery.mockImplementation(() => layoutStaticQuery)
})

const mockPageContext = {
  frontmatter: {
    title: "Home",
  },
}

describe("Layout", () => {
  it("should render its content", () => {
    const { getByTestId } = render(
      <Layout pageContext={mockPageContext}>
        <div data-testid="content">Page content</div>
      </Layout>
    )

    expect(getByTestId("content")).toHaveTextContent("Page content")
  })

  it("should match the snapshots", () => {
    const layout = render(
      <Layout pageContext={mockPageContext}>
        <div>Page content</div>
      </Layout>
    )

    expect(layout).toMatchSnapshot()
  })
})
