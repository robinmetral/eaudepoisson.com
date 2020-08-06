import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Seo from "../Seo";
import Layout from "../Layout";
import Column from "../Column";
import Heading from "../Heading";
import Image from "../Image";
import CommentsSection from "../CommentsSection";
import ArticleHeader from "../ArticleHeader";

/*
 * This layout builds on top of the main Layout component
 * It adds:
 *  - the MDX provider to map markdown elements to components
 *  - built-in Seo based on Frontmatter
 *  - the comments section for articles
 */
const PostLayout = ({ data: { mdx } }) => {
  return (
    <MDXProvider
      // note: the provider is only necessary because we're customizing components
      // https://www.gatsbyjs.org/docs/mdx/customizing-components/
      components={{
        h2: (props) => <Heading {...props} h="2" />,
        h3: (props) => <Heading {...props} h="3" />,
        img: (props) => <Image {...props} />,
        a: (props) => {
          // this replaces relative URLs with a Gatsby Link...
          if (props.href.startsWith("/")) {
            return <Link {...props} to={props.href} />;
          }
          // ...and renders a normal anchor for the rest
          return <a href={props.href}>{props.children}</a>;
        },
      }}
    >
      <Seo title={mdx.frontmatter.title} />
      <Layout>
        <Column>
          <ArticleHeader frontmatter={mdx.frontmatter} />
          <MDXRenderer>{mdx.body}</MDXRenderer>
          <CommentsSection articleId={mdx.frontmatter.id} />
        </Column>
      </Layout>
    </MDXProvider>
  );
};

export const postQuery = graphql`
  query PostQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        id
        title
        date
        featured {
          localFile {
            childImageSharp {
              fluid(maxHeight: 400, maxWidth: 1024, cropFocus: ENTROPY) {
                ...GatsbyImageSharpFluid
                presentationWidth
              }
            }
          }
        }
      }
      body
    }
  }
`;

PostLayout.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      frontmatter: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        featured: PropTypes.shape({
          localFile: PropTypes.shape({
            childImageSharp: PropTypes.object.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default PostLayout;
