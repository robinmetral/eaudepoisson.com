/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Seo from "../Seo"
import Banner from "../Banner"
import Column from "../Column"

const Layout = ({ pageContext: { frontmatter }, children }) => (
  <>
    <Seo title={frontmatter.title} />
    <Banner />
    <Column>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </Column>
  </>
)

Layout.propTypes = {
  frontmatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
