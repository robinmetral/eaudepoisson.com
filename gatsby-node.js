// generate slugs for mdx posts
const { createFilePath } = require("gatsby-source-filesystem");
exports.onCreateNode = ({ node, actions: { createNodeField }, getNode }) => {
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: "slug",
      node,
      value,
    });
  }
};

// foreign-key relationship for featured images
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MdxFrontmatter implements Node {
      featured: S3Object @link(by: "Key")
    }
  `;
  createTypes(typeDefs);
};

// create pages for posts
exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `);
  result.data.allMdx.nodes.forEach((post, index) => {
    createPage({
      path: post.fields.slug,
      // we need to require the component file because Gatsby tries to read a query on the directory
      component: require.resolve(`./src/components/PostLayout/PostLayout.js`),
      context: { id: post.id },
    });
  });
};
