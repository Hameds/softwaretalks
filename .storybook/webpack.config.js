const path = require('path')
const utils = require('../scripts/utils')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      'awesome-typescript-loader',
      {
        loader: 'react-docgen-typescript-loader',
        options: { setDisplayName: false },
      },
    ],
  })
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'postcss-loader',
      {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            includePaths: [utils.root('node_modules'), utils.root('src/scss')],
          },
        },
      },
    ],
  })

  config.resolve.extensions.push('.ts', '.tsx')

  return config
}
