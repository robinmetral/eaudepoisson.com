import React from "react"
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

  // todo delete this console.log after the migration
  if (!image) {
    console.log(`image not found at ${src}`)
  }

  return (
    <figure>
      <Img fluid={image.localFile.childImageSharp.fluid} alt={alt} />
      {title && <figcaption>{title}</figcaption>}
    </figure>
  )
}

export default Image
