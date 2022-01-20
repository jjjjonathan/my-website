// Create 'sourceName' field on MarkdownRemark nodes
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    createNodeField({
      node,
      name: 'sourceName',
      value: fileNode.sourceInstanceName,
    });
  }
};

// Load all required/imported gif files into ./gifs directory
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.gif$/,
          loader: 'file-loader',
          options: { name: '[name].[ext]', outputPath: 'gifs' },
        },
      ],
    },
  });
};
