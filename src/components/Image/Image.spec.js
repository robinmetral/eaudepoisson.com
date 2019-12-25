import React from "react"
import { useStaticQuery } from "gatsby"
import { render } from "test-utils"

import Image from "./Image"
import imageStaticQuery from "./__fixtures__/imageStaticQuery"

beforeEach(() => {
  useStaticQuery.mockImplementation(() => imageStaticQuery)
})

describe("Image", () => {
  it("should match the snapshots", () => {
    const image = render(<Image />)

    expect(image).toMatchSnapshot()
  })
})
