import React from "react";
import { render, fireEvent } from "test-utils";

import Search from "./Search";
import postsPageQuery from "./__fixtures__/postsPageQuery";

const MOCK_POST_TITLES = postsPageQuery.map((post) => post.frontmatter.title);

// mock matomo's window._paq
global._paq = {
  push: jest.fn,
};

describe("Search", () => {
  describe("before filtering", () => {
    it.each(MOCK_POST_TITLES)("should render post %#, %s", (title) => {
      const { queryByText } = render(<Search posts={postsPageQuery} />);

      expect(queryByText(title)).toBeInTheDocument();
    });
  });

  describe("when filtering", () => {
    it("should render filtered posts", () => {
      const { getByPlaceholderText, queryByText } = render(
        <Search posts={postsPageQuery} />,
      );

      const input = getByPlaceholderText("Chercher un article");

      // this string should match mock articles 0 and 1
      fireEvent.change(input, { target: { value: "art" } });

      expect(queryByText(MOCK_POST_TITLES[0])).toBeInTheDocument();
      expect(queryByText(MOCK_POST_TITLES[1])).toBeInTheDocument();
      expect(queryByText(MOCK_POST_TITLES[2])).not.toBeInTheDocument();
    });
  });
});
