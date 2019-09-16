const path = require('path')

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
    use: ['style-loader', 'css-loader', 'sass-loader'],
  })

  config.resolve.extensions.push('.ts', '.tsx')

  return config
}
