import React from "react";
import { css } from "@emotion/core";
import Img from "gatsby-image";

const FeaturedImage = ({ src, alt, animate }) => (
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
      fluid={src.localFile.childImageSharp.fluid}
      alt={alt}
      style={{
        // prevents the image from stretching above its width
        maxWidth: src.localFile.childImageSharp.fluid.presentationWidth,
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
);

export default FeaturedImage;
