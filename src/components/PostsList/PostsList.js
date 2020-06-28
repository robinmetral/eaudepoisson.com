import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import Img from "gatsby-image";

import Heading from "../Heading";
import { formatDate } from "../../helpers";

const PostsList = ({ posts }) => (
  <ul
    css={(theme) => css`
      list-style-type: none;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(${theme.sizes[1]}, 1fr));
      grid-gap: ${theme.space[2]};
    `}
  >
    {posts.map((post) => (
      <li
        key={post.frontmatter.id}
        css={(theme) => css`
          box-shadow: ${theme.shadows[0]};
          transition: all ${theme.transitions.base};
          &:hover {
            transform: scale(102%);
            box-shadow: ${theme.shadows[1]};
          }
          &::after {
            /*
            * prerender the hover box-shadow and animate opacity for performance
            * see https://tobiasahlin.com/blog/how-to-animate-box-shadow/
            */
            box-shadow: ${theme.shadows[1]};
            opacity: 0;
            transition: opacity ${theme.transitions.base};
            &:hover {
              opacity: 1;
            }
          }
        `}
      >
        <Link
          to={post.fields.slug}
          css={css`
            color: inherit;
            text-decoration: none;
          `}
        >
          <Img
            fluid={post.frontmatter.featured.localFile.childImageSharp.fluid}
            alt={post.frontmatter.title}
            style={{
              // prevents the image from stretching above its width
              maxWidth:
                post.frontmatter.featured.localFile.childImageSharp.fluid
                  .presentationWidth,
              margin: "0 auto",
            }}
          />
          <div
            css={(theme) =>
              css`
                padding: 0 ${theme.space[2]};
              `
            }
          >
            <Heading
              h="2"
              center
              css={css`
                margin-bottom: 0;
              `}
            >
              {post.frontmatter.title}
            </Heading>
            <p
              css={(theme) => css`
                text-align: center;
                margin: 0;
                font-size: ${theme.fontSizes[1]};
              `}
            >
              {formatDate(post.frontmatter.date)}
            </p>
            <p>{post.excerpt}</p>
          </div>
        </Link>
      </li>
    ))}
  </ul>
);

export default PostsList;
