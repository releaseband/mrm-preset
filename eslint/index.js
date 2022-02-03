const path = require('path');
const { packageJson, install, copyFiles } = require('mrm-core');
const { installPeerDeps } = require('../utils');

const configFile = '.eslintrc.js';

const configPackage = '@releaseband/eslint-config';

module.exports = function task() {
  copyFiles(path.join(__dirname, 'templates'), configFile);

  const pkg = packageJson();
  pkg.appendScript('lint', 'eslint . --ext .js --fix --ignore-path ./.gitignore');
  pkg.save();

  install(configPackage);

  installPeerDeps(configPackage);
};

module.exports.description = 'Adds eslint';
