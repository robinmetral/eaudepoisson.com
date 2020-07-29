import React from "react";
import { MDXProvider } from "@mdx-js/react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import Seo from "../Seo";
import Layout from "../Layout";
import Heading from "../Heading";
import Image from "../Image";

const PageLayout = ({ pageContext, children }) => {
  const { frontmatter } = pageContext;
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
      <Seo title={frontmatter.title} />
      <Layout>
        {frontmatter.title && (
          <Heading h="1" center>
            {frontmatter.title}
          </Heading>
        )}
        {children}
      </Layout>
    </MDXProvider>
  );
};

PageLayout.propTypes = {
  pageContext: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
    }).isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default PageLayout;
