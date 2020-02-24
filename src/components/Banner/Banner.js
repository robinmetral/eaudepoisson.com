import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "eaudepoisson-banner.png" }) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid_tracedSVG
            presentationWidth
          }
        }
      }
    }
  `)
  return (
    <Link to={`/`}>
      <Img
        css={theme => css`
          width: 75vw;
          max-width: ${data.file.childImageSharp.fluid.presentationWidth}px;
          margin: ${theme.space[3]} auto;
        `}
        fluid={data.file.childImageSharp.fluid}
        alt="eau de poisson, par robin et clara"
      />
    </Link>
  )
}

export default Banner
