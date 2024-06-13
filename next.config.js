const withReactSvg = require('next-react-svg');
const path = require('path');

const { i18n } = require('./next-i18next.config');

module.exports = withReactSvg({
  i18n,
  include: path.resolve(__dirname, 'icons'),
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  env: {
    I18NEXUS_API_KEY_HOME: process.env.I18NEXUS_API_KEY_HOME,
    I18NEXUS_API_KEY_FRONTEND: process.env.I18NEXUS_API_KEY_FRONTEND,
    I18NEXUS_API_KEY_DESIGN: process.env.I18NEXUS_API_KEY_DESIGN,
    I18NEXUS_API_KEY_COMMON: process.env.I18NEXUS_API_KEY_COMMON,
    I18NEXUS_API_KEY_ML: process.env.I18NEXUS_API_KEY_ML,
    I18NEXUS_API_KEY_EMBEDDED: process.env.I18NEXUS_API_KEY_EMBEDDED,
    METRICS_ENABLED: process.env.METRICS_ENABLED,
  },
  webpack(webpackConfig) {
    webpackConfig.resolve.fallback = { fs: false };

    return webpackConfig;
  },
});
