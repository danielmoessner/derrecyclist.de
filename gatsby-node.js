const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Create the animal pages
  const result = await graphql(`
    query {
      allBikesYaml {
        nodes {
          id
          slug
        }
      }
    }
  `);
  result.data.allBikesYaml.nodes.forEach((node) => {
    createPage({
      path: `versand-anfragen/${node.slug}/`,
      component: path.resolve(`./src/templates/shippment.jsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
        id: node.id,
      },
    });
  });
};
