const withReactSvg = require('next-react-svg');
const path = require('path');

module.exports = withReactSvg({
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  include: path.resolve(__dirname, 'icons'),
  webpack(webpackConfig) {
    return webpackConfig;
  },
});
