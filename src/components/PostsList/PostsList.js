import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

const PostsList = () => {
  const data = useStaticQuery(graphql`
    query PostsQuery {
      allMdx {
        nodes {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  `)

  return (
    <ul>
      {data.allMdx.nodes.map(post => (
        <li>
          <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default PostsList
