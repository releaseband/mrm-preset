const path = require('path');
const husky = require('husky');
const { install, copyFiles } = require('mrm-core');
const { installPeerDeps } = require('../utils');

const configFile = '.lintstagedrc.js';

const configPackage = '@releaseband/lint-staged-config';

module.exports = function task() {
  copyFiles(path.join(__dirname, 'templates'), configFile, { overwrite: true });

  install(configPackage);

  installPeerDeps(configPackage);

  husky.set('.husky/pre-commit', 'npx --no lint-staged');
};

module.exports.description = 'Adds lint-staged';
