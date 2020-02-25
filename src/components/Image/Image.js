import React from "react"
import { css } from "@emotion/core"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Image = ({ src, alt, title, featured }) => {
  const data = useStaticQuery(graphql`
    query ImagesQuery {
      images: allS3Object {
        nodes {
          Key
          localFile {
            childImageSharp {
              fluid(maxWidth: 1024) {
                ...GatsbyImageSharpFluid
                presentationWidth
              }
            }
          }
        }
      }
    }
  `)

  // filter images until we get variables in static queries
  // https://github.com/gatsbyjs/gatsby/issues/10482
  const image = data.images.nodes.find(image => image.Key === src)

  return (
    <figure
      css={theme =>
        featured &&
        css`
          margin: ${theme.space[3]} 0;
        `
      }
    >
      <Img
        fluid={image.localFile.childImageSharp.fluid}
        alt={alt}
        style={{
          // prevents fluid images from stretching above their width
          maxWidth: image.localFile.childImageSharp.fluid.presentationWidth,
          margin: "0 auto",
        }}
      />
      {title && <figcaption>{title}</figcaption>}
    </figure>
  )
}

export default Image
