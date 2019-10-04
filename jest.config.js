const utils = require('./scripts/utils')

module.exports = {
  preset: 'ts-jest',
  roots: [utils.root('src')],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
}
