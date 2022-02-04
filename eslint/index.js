const path = require('path');
const { packageJson, install, copyFiles, lines } = require('mrm-core');
const { installPeerDeps } = require('../utils');

const configFile = '.eslintrc.js';
const ignoreFile = '.eslintignore';

const configPackage = '@releaseband/eslint-config';

const ignore = ['node_modules/', '.idea/', '.vscode/', '.history/'];

module.exports = function task() {
  copyFiles(path.join(__dirname, 'templates'), [configFile], { overwrite: true });

  const pkg = packageJson();
  pkg.setScript('lint', 'eslint . --ext .js --fix');
  pkg.save();

  install(configPackage);

  installPeerDeps(configPackage);

  lines(ignoreFile).add(ignore).save();
};

module.exports.description = 'Adds eslint';
