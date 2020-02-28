import React from "react"
import { MDXProvider } from "@mdx-js/react"
import PropTypes from "prop-types"

import Seo from "../Seo"
import Layout from "../Layout"
import Column from "../Column"
import Heading from "../Heading"
import Image from "../Image"
import CommentsSection from "../CommentsSection"
import ArticleHeader from "../ArticleHeader"

/*
 * This layout builds on top of the main Layout component
 * It adds:
 *  - the MDX provider to map markdown elements to components
 *  - built-in Seo based on Frontmatter
 *  - the comments section for articles
 * Eventually, pages will use a different layout and this component will be
 * simplified to handle only articles.
 */

const PostsLayout = ({ pageContext, children }) => {
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
      <Layout>
        <Column>
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
          {isArticle && <CommentsSection articleId={frontmatter.id} />}
        </Column>
      </Layout>
    </MDXProvider>
  )
}

PostsLayout.propTypes = {
  pageContext: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
    }).isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
}

export default PostsLayout