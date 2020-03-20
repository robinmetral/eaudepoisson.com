import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Heading from "../Heading"
import { formatDate } from "../../helpers"

const PostsList = ({ posts }) => (
  <ul
    css={css`
      list-style-type: none;
      padding: 0;
    `}
  >
    {posts.map(post => (
      <li
        key={post.frontmatter.id}
        css={theme =>
          css`
            margin-bottom: ${theme.space[4]};
          `
        }
      >
        <Link to={post.fields.slug}>
          <div
            css={css`
              /* this container is full width, the image size will be
              limited by the maxWidth from the GraphQL query */
              width: 100vw;
              position: relative;
              left: 50%;
              right: 50%;
              margin-left: -50vw;
              margin-right: -50vw;
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
              css={css`
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
                transition: all 0.4s ease 0s;
                &:hover {
                  transform: scale(1.05);
                  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.3);
                }
                &::after {
                  /*
                    * prerender the hover box-shadow and animate opacity for performance
                    * see https://tobiasahlin.com/blog/how-to-animate-box-shadow/
                    */
                  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.3);
                  opacity: 0;
                  transition: opacity 0.3s ease-in-out;
                  &:hover {
                    opacity: 1;
                  }
                }
              `}
            />
          </div>
        </Link>
        <Link
          to={post.fields.slug}
          css={css`
            color: inherit;
            text-decoration: none;
          `}
        >
          <Heading
            h="1"
            center
            css={css`
              margin-bottom: 0;
            `}
          >
            {post.frontmatter.title}
          </Heading>
        </Link>
        <p
          css={theme => css`
            text-align: center;
            margin: 0;
            font-size: ${theme.fontSizes[1]};
          `}
        >
          {formatDate(post.frontmatter.date)}
        </p>
        <p>{post.excerpt}</p>
      </li>
    ))}
  </ul>
)

export default PostsList
