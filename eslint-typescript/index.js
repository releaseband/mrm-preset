const eslint = require('../eslint');

module.exports = function task() {
  eslint({ eslintConfig: 'eslint-config-typescript' });
};

module.exports.description = 'Adds eslint';
