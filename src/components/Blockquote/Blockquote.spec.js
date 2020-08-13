import React from "react";
import { render } from "test-utils";
import { matchers } from "jest-emotion";

import Blockquote from "./Blockquote";

// import emotion matchers
expect.extend(matchers);

describe("Blockquote", () => {
  it("should render the blockquote text", () => {
    const { getByTestId } = render(<Blockquote>Blockquote</Blockquote>);

    expect(getByTestId("blockquote")).toHaveTextContent("Blockquote");
  });

  describe("large blockquote", () => {
    it("should have typeface merriweather", () => {
      const { getByTestId } = render(<Blockquote large>Blockquote</Blockquote>);

      expect(getByTestId("blockquote")).toHaveStyleRule(
        "font-family",
        '"Merriweather",serif',
      );
    });
  });
});
