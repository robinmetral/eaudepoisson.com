import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { css } from "@emotion/core";

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
  `);
  return (
    <Img
      css={(theme) => css`
        width: 75vw;
        max-width: ${data.file.childImageSharp.fluid.presentationWidth}px;
        margin: ${theme.space[3]} auto;
      `}
      fluid={data.file.childImageSharp.fluid}
      alt="Eau de poisson, par Clara et Robin"
    />
  );
};

export default Banner;
