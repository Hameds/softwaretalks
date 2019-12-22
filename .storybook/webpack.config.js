const path = require('path')
const utils = require('../scripts/utils')

module.exports = ({ config }) => {
  // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
  config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]
  // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
  config.module.rules[0].use[0].loader = require.resolve('babel-loader')
  // use @babel/preset-react for JSX and env (instead of staged presets)
  config.module.rules[0].use[0].options.presets = [
    require.resolve('@babel/preset-react'),
    require.resolve('@babel/preset-env'),
  ]
  config.module.rules[0].use[0].options.plugins = [
    // use @babel/plugin-proposal-class-properties for class arrow functions
    require.resolve('@babel/plugin-proposal-class-properties'),
    // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    require.resolve('babel-plugin-remove-graphql-queries'),
  ]
  // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
  config.resolve.mainFields = ['browser', 'module', 'main']

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
