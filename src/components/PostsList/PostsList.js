import React from "react"
import { css } from "@emotion/core"
import { graphql, useStaticQuery, Link } from "gatsby"

import Heading from "../Heading"
import FeaturedImage from "../FeaturedImage"
import { formatDate } from "../../helpers"

const PostsList = () => {
  const data = useStaticQuery(graphql`
    query PostsQuery {
      allMdx(sort: { order: DESC, fields: frontmatter___date }) {
        nodes {
          frontmatter {
            id
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
          key={post.frontmatter.id}
          css={theme =>
            css`
              margin-bottom: ${theme.space[4]};
            `
          }
        >
          <Link to={post.fields.slug}>
            <FeaturedImage
              src={post.frontmatter.featured}
              alt={post.frontmatter.title}
              animate
            />
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
}

export default PostsList
