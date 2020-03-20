import React from "react"
import { css } from "@emotion/core"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Image = ({ src, alt, title }) => {
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
    <figure>
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
            // prevents fluid images from stretching above their width
            maxWidth: image.localFile.childImageSharp.fluid.presentationWidth,
            margin: "0 auto",
          }}
        />
      </div>
      {title && (
        <figcaption
          css={theme => css`
            text-align: center;
            margin-top: ${theme.space[1]};
          `}
        >
          <em>{title}</em>
        </figcaption>
      )}
    </figure>
  )
}

export default Image
