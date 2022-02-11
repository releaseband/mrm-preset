const path = require('path');
const { install, copyFiles, packageJson, lines } = require('mrm-core');
const { installPeerDeps } = require('../utils');

const configFile = '.markdownlint.json';
const ignoreFile = '.markdownlintignore';

const configPackage = '@releaseband/markdownlint-config';

const ignore = ['node_modules/', 'coverage/', '.idea/', '.vscode/', '.history/', 'CHANGELOG.md'];

module.exports = function task() {
  copyFiles(path.join(__dirname, 'templates'), [configFile], { overwrite: true });

  const pkg = packageJson();
  pkg.setScript('markdownlint', "markdownlint '**/*.md' --fix");
  pkg.save();

  install(configPackage);

  installPeerDeps(configPackage);

  lines(ignoreFile).add(ignore).save();
};

module.exports.description = 'Adds markdownlint';
