import React from "react";
import { useStaticQuery } from "gatsby";
import { render } from "test-utils";

import Banner from "./Banner";
import bannerStaticQuery from "./__fixtures__/bannerStaticQuery";

beforeEach(() => {
  useStaticQuery.mockImplementationOnce(() => bannerStaticQuery);
});

describe("Banner", () => {
  it("should match the snapshots", () => {
    const banner = render(<Banner />);

    expect(banner).toMatchSnapshot();
  });
});
