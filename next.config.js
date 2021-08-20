const withReactSvg = require('next-react-svg');
const path = require('path');

module.exports = withReactSvg({
  i18n: {
    localeDetection: false,
    defaultLocale: 'en',
    locales: ['en', 'ru'],
  },

  include: path.resolve(__dirname, 'icons'),
  webpack(webpackConfig) {
    return webpackConfig;
  },
});
