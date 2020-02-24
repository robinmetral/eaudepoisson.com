import React from "react"
import { css } from "@emotion/core"

import Heading from "../Heading"
import Image from "../Image"
import { formatDate } from "../../helpers"

const ArticleHeader = ({ frontmatter: { title, date, featured } }) => (
  <header
    css={theme => css`
      margin: ${theme.space[3]} 0;
    `}
  >
    <Image src={featured} alt={title} featured />
    <Heading
      h="1"
      center
      css={css`
        margin-bottom: 0;
      `}
    >
      {title}
    </Heading>
    <p
      css={theme => css`
        text-align: center;
        font-size: ${theme.fontSizes[1]};
        /* reset p styles */
        margin: 0;
      `}
    >
      {formatDate(date)}
    </p>
  </header>
)

export default ArticleHeader
