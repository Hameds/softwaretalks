const utils = require('./scripts/utils')
const fontMagician = require('postcss-font-magician')

module.exports = {
  plugins: [fontMagician({ custom: utils.customFontFoundries })],
}
