// generate slugs for mdx posts
const { createFilePath } = require("gatsby-source-filesystem");
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: "slug",
      node,
      value,
    });
  }
};

// foreign-key relationship for featured image
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MdxFrontmatter implements Node {
      featured: S3Object @link(by: "Key")
    }
  `;
  createTypes(typeDefs);
};
