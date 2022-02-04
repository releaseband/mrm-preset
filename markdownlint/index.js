const path = require('path');
const { install, copyFiles, packageJson } = require('mrm-core');
const { installPeerDeps } = require('../utils');

const configFile = '.markdownlint.json';
const ignoreFile = '.markdownlintignore';

const configPackage = '@releaseband/markdownlint-config';

module.exports = function task() {
  copyFiles(path.join(__dirname, 'templates'), [configFile, ignoreFile], { overwrite: true });

  const pkg = packageJson();
  pkg.removeScript('markdownlint');
  pkg.appendScript('markdownlint', "markdownlint '**/*.md' --fix");
  pkg.save();

  install(configPackage);

  installPeerDeps(configPackage);
};

module.exports.description = 'Adds markdownlint';
