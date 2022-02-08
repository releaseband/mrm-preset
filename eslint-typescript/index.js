const eslint = require('../eslint');

module.exports = function task() {
  eslint({ eslintConfig: '@releaseband/eslint-config-typescript' });
};

module.exports.description = 'Adds eslint';
