import theme from './src/styles/theme';

module.exports = {
  siteMetadata: {
    siteUrl: 'https://jjjjonathan.github.io',
    title: 'Jonathan Horn | Full Stack Web Developer',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Jonathan Horn',
        description: 'Jonathan Horn is a Full Stack Web Developer',
        lang: 'en',
        start_url: '/',
        icon: 'src/images/icon.png',
        background_color: theme.colors.light,
        theme_color: theme.colors.dark,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-yaml',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: './src/content/projects',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'bio',
        path: './src/content/bio.md',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/content/skills.yaml',
      },
    },
  ],
};
