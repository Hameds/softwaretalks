const path = require('path')

const customFontFoundries = {
  'Iran Yekan': {
    variants: {
      normal: {
        100: {
          local: [
            'IRANYekan-Thin',
            'IRANYekan Thin',
            'IRANYekanWeb-Thin',
            'IRANYekanWeb Thin',
          ],
          url: {
            woff: '../assets/fonts/iran-yekan-web-100.woff',
            ttf: '../assets/fonts/iran-yekan-web-100.ttf',
            eot: '../assets/fonts/iran-yekan-web-100.eot',
            svg: '../assets/fonts/iran-yekan-web-100.svg',
          },
        },
        300: {
          local: [
            'IRANYekan-Light',
            'IRANYekan Light',
            'IRANYekanWeb-Light',
            'IRANYekanWeb Light',
          ],
          url: {
            woff: '../assets/fonts/iran-yekan-web-300.woff',
            ttf: '../assets/fonts/iran-yekan-web-300.ttf',
            eot: '../assets/fonts/iran-yekan-web-300.eot',
            svg: '../assets/fonts/iran-yekan-web-300.svg',
          },
        },
        400: {
          local: [
            'IRANYekan-Regular',
            'IRANYekan Regular',
            'IRANYekan',
            'IRANYekanWeb-Regular',
            'IRANYekanWeb Regular',
            'IRANYekanWeb',
          ],
          url: {
            woff: '../assets/fonts/iran-yekan-web-400.woff',
            ttf: '../assets/fonts/iran-yekan-web-400.ttf',
            eot: '../assets/fonts/iran-yekan-web-400.eot',
            svg: '../assets/fonts/iran-yekan-web-400.svg',
          },
        },
        500: {
          local: [
            'IRANYekan-Medium',
            'IRANYekan Medium',
            'IRANYekanWeb-Medium',
            'IRANYekanWeb Medium',
          ],
          url: {
            woff: '../assets/fonts/iran-yekan-web-500.woff',
            ttf: '../assets/fonts/iran-yekan-web-500.ttf',
            eot: '../assets/fonts/iran-yekan-web-500.eot',
            svg: '../assets/fonts/iran-yekan-web-500.svg',
          },
        },
        700: {
          local: [
            'IRANYekan-Bold',
            'IRANYekan Bold',
            'IRANYekanWeb-Bold',
            'IRANYekanWeb Bold',
          ],
          url: {
            woff: '../assets/fonts/iran-yekan-web-700.woff',
            ttf: '../assets/fonts/iran-yekan-web-700.ttf',
            eot: '../assets/fonts/iran-yekan-web-700.eot',
            svg: '../assets/fonts/iran-yekan-web-700.svg',
          },
        },
        800: {
          local: [
            'IRANYekan-ExtraBold',
            'IRANYekan ExtraBold',
            'IRANYekanWeb-ExtraBold',
            'IRANYekanWeb ExtraBold',
          ],
          url: {
            woff: '../assets/fonts/iran-yekan-web-800.woff',
            ttf: '../assets/fonts/iran-yekan-web-800.ttf',
            eot: '../assets/fonts/iran-yekan-web-800.eot',
            svg: '../assets/fonts/iran-yekan-web-800.svg',
          },
        },
        900: {
          local: [
            'IRANYekan-Black',
            'IRANYekan Black',
            'IRANYekanWeb-Black',
            'IRANYekanWeb Black',
          ],
          url: {
            woff: '../assets/fonts/iran-yekan-web-900.woff',
            ttf: '../assets/fonts/iran-yekan-web-900.ttf',
            eot: '../assets/fonts/iran-yekan-web-900.eot',
            svg: '../assets/fonts/iran-yekan-web-900.svg',
          },
        },
        950: {
          local: [
            'IRANYekan-ExtraBlack',
            'IRANYekan ExtraBlack',
            'IRANYekanWeb-ExtraBlack',
            'IRANYekanWeb ExtraBlack',
          ],
          url: {
            woff: '../assets/fonts/iran-yekan-web-950.woff',
            ttf: '../assets/fonts/iran-yekan-web-950.ttf',
            eot: '../assets/fonts/iran-yekan-web-950.eot',
            svg: '../assets/fonts/iran-yekan-web-950.svg',
          },
        },
      },
    },
  },
}

function root(...args) {
  return path.resolve(__dirname, '..', ...args)
}

function getYAMLDataTypeFromFile(file) {
  return file.relativePath.split('/')[0]
}

function getGuestSlugFromFile(file) {
  return file.relativePath.split('/')[1]
}

function getEpisodeSlugFromFile(file) {
  const directoryIndex = getEpisodeTypeFromFile(file) === 0 ? 2 : 3

  return file.relativePath.split('/')[directoryIndex]
}

function getEpisodeTypeFromFile(file) {
  switch (file.relativePath.split('/')[1].toLowerCase()) {
    case 'live':
      return 0
    case 'meetup':
      return 1
    default:
      throw new Error('Unknown episode type!')
  }
}

function getEpisodeSeasonFromFile(file) {
  if (getEpisodeTypeFromFile(file) === 0) {
    return undefined
  }

  return parseInt(
    file.relativePath
      .split('/')[2]
      .toLowerCase()
      .replace(/season\-/i, '')
  )
}

module.exports = {
  root,
  customFontFoundries,
  getYAMLDataTypeFromFile,
  getGuestSlugFromFile,
  getEpisodeSlugFromFile,
  getEpisodeTypeFromFile,
  getEpisodeSeasonFromFile,
}
