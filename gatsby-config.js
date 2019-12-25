const path = require('path')
const utils = require('./scripts/utils')
const postCSSConfig = require('./postcss.config')

module.exports = {
  siteMetadata: {
    title: 'SoftwareTalks - Next Version',
    description: 'The next version of SoftwareTalks website.',
    author:
      'Mohammad Hasani <thebrodmann@gmail.com> (https://github.com/thebrodmann)',
    licenseSpecLink: 'https://opensource.org/licenses/GPL-3.0',
    socialLinks: {
      youtube: 'https://youtube.com/softwaretalks',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: postCSSConfig.plugins,
        includePaths: [utils.root('node_modules'), utils.root('src/scss')],
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        include: /assets\/icons/i,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: utils.root('src/data'),
      },
    },
    {
      resolve: 'gatsby-transformer-yaml',
      options: {
        typeName({ node }) {
          switch (utils.getYAMLDataTypeFromFile(node)) {
            case 'guests':
              return 'GuestYAML'
            case 'episodes':
              return 'EpisodeYAML'
            default:
              throw new Error('Unknown YAML entity.')
          }
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: utils.root('src/images'),
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
