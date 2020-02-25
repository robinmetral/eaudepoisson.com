import React from "react"
import { css } from "@emotion/core"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const FeaturedImage = ({ src, alt, animate }) => {
  const data = useStaticQuery(graphql`
    query FeaturedImagesQuery {
      images: allS3Object {
        nodes {
          Key
          localFile {
            childImageSharp {
              fluid(maxHeight: 400, maxWidth: 1024, cropFocus: ENTROPY) {
                ...GatsbyImageSharpFluid
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
    <div
      css={theme => css`
        overflow: hidden;
        margin: 0 -${theme.sizes[0]};
      `}
    >
      <Img
        fluid={image.localFile.childImageSharp.fluid}
        alt={alt}
        css={
          animate &&
          css`
            transition: transform 0.4s ease 0s;
            &:hover {
              transform: scale(1.05);
            }
          `
        }
      />
    </div>
  )
}

export default FeaturedImage