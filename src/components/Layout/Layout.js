import React from "react"
import { MDXProvider } from "@mdx-js/react"
import PropTypes from "prop-types"

import Seo from "../Seo"
import Banner from "../Banner"
import Column from "../Column"
import Heading from "../Heading"

const Layout = ({ pageContext, children }) => {
  const { title } = pageContext.frontmatter
  return (
    <MDXProvider
      // note: the provider is only necessary because we're customizing components
      // https://www.gatsbyjs.org/docs/mdx/customizing-components/
      components={{
        h2: props => <Heading {...props} h="2" />,
        h3: props => <Heading {...props} h="3" />,
      }}
    >
      <Seo title={title} />
      <Column>
        <Banner />
        <main>
          <Heading h="1">{title}</Heading>
          {children}
        </main>
      </Column>
    </MDXProvider>
  )
}

Layout.propTypes = {
  pageContext: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
