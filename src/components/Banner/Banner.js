import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "eaudepoisson-banner.png" }) {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Link to={`/`}>
      <Img
        css={css`
          max-width: 512px;
        `}
        fluid={data.file.childImageSharp.fluid}
        alt="Eau de poisson"
      />
    </Link>
  )
}

export default Banner
