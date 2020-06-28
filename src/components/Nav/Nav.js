import React, { useState, useEffect } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { css } from "@emotion/core";

import Input from "../Input";

const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { order: DESC, fields: frontmatter___date }) {
        nodes {
          frontmatter {
            id
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  `);
  const posts = data.allMdx.nodes;
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const isFiltered = searchTerm.length >= 2;
  useEffect(() => {
    if (isFiltered) {
      const filtered = posts.filter((post) =>
        post.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts);
    }
  }, [posts, searchTerm, isFiltered]);

  const titleWithHighlight = (title) =>
    title.replace(
      new RegExp(searchTerm, "gi"),
      `<span class="highlight">$&</span>`, // $& preserves the case
    );

  return (
    <nav
      css={css`
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
      `}
    >
      <ul
        css={(theme) => css`
          list-style-type: none;
          padding: 0;
          display: flex;
          li {
            margin-right: ${theme.space[2]};
          }
        `}
      >
        <li>
          <Link to={"/"}>Accueil</Link>
        </li>
        <li>
          <Link to={"/a-propos/"}>À propos</Link>
        </li>
      </ul>
      <div
        css={css`
          position: relative;
        `}
      >
        <Input
          type="search"
          placeholder={"Chercher un article"}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {isFiltered && (
          <div
            css={(theme) => css`
              position: absolute;
              width: 100%;
              background: ${theme.colors.white};
              box-shadow: ${theme.shadows[1]};
              padding: ${theme.space[1]} ${theme.space[2]};
              z-index: 10;
              font-size: ${theme.fontSizes[1]};
            `}
          >
            <ul
              css={(theme) => css`
                li {
                  margin-bottom: ${theme.space[1]};
                  &:last-of-type {
                    margin-bottom: 0;
                  }
                }
                /* reset */
                list-style-type: none;
                padding: 0;
                margin: 0;
              `}
            >
              {filteredPosts.length ? (
                filteredPosts.map((post) => (
                  <li key={post.frontmatter.id}>
                    <Link
                      to={post.fields.slug}
                      dangerouslySetInnerHTML={{
                        __html: titleWithHighlight(post.frontmatter.title),
                      }}
                      css={(theme) => css`
                        /* highlight the search term */
                        .highlight {
                          background-color: ${theme.colors.secondary};
                        }
                      `}
                    />
                  </li>
                ))
              ) : (
                <p>Aucun article :(</p>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
