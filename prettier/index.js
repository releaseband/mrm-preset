const path = require('path');
const { packageJson, install, copyFiles } = require('mrm-core');
const { installPeerDeps } = require('../utils');

const configFile = '.prettierrc.js';
const ignoreFile = '.prettierignore';

const configPackage = '@releaseband/prettier-config';

module.exports = function task() {
  copyFiles(path.join(__dirname, 'templates'), [configFile, ignoreFile], { overwrite: true });

  const pkg = packageJson();
  pkg.appendScript('prettier', 'prettier . --write --ignore-unknown');
  pkg.save();

  install(configPackage);

  installPeerDeps(configPackage);
};

module.exports.description = 'Adds prettier';
