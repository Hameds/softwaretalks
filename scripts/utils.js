const path = require('path')

function root(...args) {
  return path.resolve(__dirname, '..', ...args)
}

module.exports = { root }
