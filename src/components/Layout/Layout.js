import React from "react"
import { MDXProvider } from "@mdx-js/react"
import PropTypes from "prop-types"

import Seo from "../Seo"
import Banner from "../Banner"
import Column from "../Column"
import Heading from "../Heading"
import Image from "../Image"
import CommentsSection from "../CommentsSection"
import ArticleHeader from "../ArticleHeader"

const Layout = ({ pageContext, children }) => {
  const { frontmatter } = pageContext
  const isArticle = !!frontmatter.id
  return (
    <MDXProvider
      // note: the provider is only necessary because we're customizing components
      // https://www.gatsbyjs.org/docs/mdx/customizing-components/
      components={{
        h2: props => <Heading {...props} h="2" />,
        h3: props => <Heading {...props} h="3" />,
        img: props => <Image {...props} />,
      }}
    >
      <Seo title={frontmatter.title} />
      <Column>
        <Banner />
        <main>
          {isArticle ? (
            <ArticleHeader frontmatter={frontmatter} />
          ) : (
            frontmatter.title && (
              <Heading h="1" center>
                {frontmatter.title}
              </Heading>
            )
          )}
          {children}
        </main>
        {isArticle && <CommentsSection articleId={frontmatter.id} />}
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
