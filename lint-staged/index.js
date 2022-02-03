const path = require('path');
const { install, copyFiles } = require('mrm-core');
const husky = require('husky');
const { installPeerDeps } = require('../utils');

const configFile = 'lint-staged.config.js';

const configPackage = '@releaseband/lint-staged-config';

module.exports = function task() {
  copyFiles(path.join(__dirname, 'templates'), configFile);

  install(configPackage);

  installPeerDeps(configPackage);

  // Install husky
  husky.install();
  // Set lint-staged config
  husky.add('.husky/pre-commit', 'npx lint-staged');
};

module.exports.description = 'Adds lint-staged';