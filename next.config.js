const withReactSvg = require('next-react-svg');
const path = require('path');

const { i18n } = require('./next-i18next.config');

module.exports = withReactSvg({
  i18n,
  include: path.resolve(__dirname, 'icons'),
  webpack(webpackConfig) {
    return webpackConfig;
  },
});
