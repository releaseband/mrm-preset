const path = require('path');
const { packageJson, install, copyFiles } = require('mrm-core');
const { installPeerDeps } = require('../utils');

const configFile = 'prettier.config.js';

const configPackage = '@releaseband/prettier-config';

module.exports = function task() {
  copyFiles(path.join(__dirname, 'templates'), configFile);

  const pkg = packageJson();
  pkg.appendScript('format', 'prettier . --write --ignore-unknown --ignore-path ./.gitignore');
  pkg.save();

  install(configPackage);

  installPeerDeps(configPackage);
};

module.exports.description = 'Adds prettier';
