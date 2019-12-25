import React from "react"
import { render } from "test-utils"

import Column from "./Column"

describe("Column", () => {
  it("should render its content", () => {
    const { getByTestId } = render(
      <Column>
        <div data-testid="content">Some content</div>
      </Column>
    )

    expect(getByTestId("content")).toHaveTextContent("Some content")
  })
  it("should match the snapshots", () => {
    const column = render(<Column>Some content</Column>)

    expect(column).toMatchSnapshot()
  })
})
