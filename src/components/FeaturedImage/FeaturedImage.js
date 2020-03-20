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
        fluid={image.localFile.childImageSharp.fluid}
        alt={alt}
        style={{
          // prevents the image from stretching above its width
          maxWidth: image.localFile.childImageSharp.fluid.presentationWidth,
          margin: "0 auto",
        }}
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
