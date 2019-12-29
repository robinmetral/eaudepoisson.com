import React from "react"
import PropTypes from "prop-types"

import Seo from "../Seo"
import Banner from "../Banner"
import Column from "../Column"

const Layout = ({ pageContext: { frontmatter }, children }) => (
  <>
    <Seo title={frontmatter.title} />
    <Column>
      <Banner />
      <main>
        <h1>{frontmatter.title}</h1>
        {children}
      </main>
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
