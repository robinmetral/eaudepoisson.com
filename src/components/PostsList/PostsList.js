import React from "react"
import { css } from "@emotion/core"
import { graphql, useStaticQuery, Link } from "gatsby"

import Heading from "../Heading"
import Image from "../Image"
import { formatDate } from "../../helpers"

const PostsList = () => {
  const data = useStaticQuery(graphql`
    query PostsQuery {
      allMdx(sort: { order: DESC, fields: frontmatter___date }) {
        nodes {
          frontmatter {
            title
            date
            featured
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  `)

  return (
    <ul
      css={css`
        list-style-type: none;
        padding: 0;
      `}
    >
      {data.allMdx.nodes.map(post => (
        <li
          css={theme =>
            css`
              margin-bottom: ${theme.space[4]};
            `
          }
        >
          <Image
            src={post.frontmatter.featured}
            alt={post.frontmatter.title}
            featured
          />
          <Link
            to={post.fields.slug}
            css={css`
              color: inherit;
              text-decoration: none;
            `}
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
}

export default PostsList
