const path = require('path');
const { packageJson, install, copyFiles } = require('mrm-core');
const { installPeerDeps } = require('../utils');

const configFile = '.eslintrc.js';
const ignoreFile = '.eslintignore';

const configPackage = '@releaseband/eslint-config';

module.exports = function task() {
  copyFiles(path.join(__dirname, 'templates'), [configFile, ignoreFile], { overwrite: true });

  const pkg = packageJson();
  pkg.setScript('lint', 'eslint . --ext .js --fix');
  pkg.save();

  install(configPackage);

  installPeerDeps(configPackage);
};

module.exports.description = 'Adds eslint';
