import React from "react"
import { useStaticQuery } from "gatsby"
import { render } from "test-utils"

import Banner from "./Banner"
import bannerStaticQuery from "./__fixtures__/bannerStaticQuery"

beforeEach(() => {
  useStaticQuery.mockImplementation(() => bannerStaticQuery)
})

describe("Banner", () => {
  it("should match the snapshots", () => {
    const banner = render(<Banner />)

    expect(banner).toMatchSnapshot()
  })

  it.skip("should navigate to the homepage", () => {})
})
