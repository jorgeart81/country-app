require('dotenv').config();

const targetUrl = process.env['RESCOUNTRIES_API_URL'];
const apiKey = process.env['API_KEY'];

const PROXY_CONFIG = {
  '/api': {
    target: targetUrl,
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      '^/api': '',
    },
    headers: apiKey
      ? {
          // If your service uses Authorization: Bearer, x-api-key, or another header, configure it here:
          Authorization: `Bearer ${apiKey}`,
          'x-api-key': apiKey,
        }
      : {},
  },
};

module.exports = PROXY_CONFIG;
