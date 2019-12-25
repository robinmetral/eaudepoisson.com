import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import Column from "../Column"

const Header = ({ siteTitle }) => (
  <header
    css={theme => css`
      background: ${theme.colors.primary};
    `}
  >
    <Column>
      <h1
        css={css`
          margin: 0;
        `}
        data-testid="title"
      >
        <Link
          to="/"
          css={theme => css`
            color: ${theme.colors.white};
            text-decoration: none;
          `}
        >
          {siteTitle}
        </Link>
      </h1>
    </Column>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
