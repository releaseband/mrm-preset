const path = require('path');
const { packageJson, install, copyFiles } = require('mrm-core');
const { installPeerDeps } = require('../utils');

const commitlintConfigFile = 'commitlint.config.js';
const commitizenConfigFile = '.cz.json';

const configPackage = '@releaseband/commitlint-config';

const packages = ['@commitlint/cz-commitlint', 'commitizen', configPackage];

module.exports = function task() {
  copyFiles(path.join(__dirname, 'templates'), [commitlintConfigFile, commitizenConfigFile]);

  const pkg = packageJson();
  pkg.appendScript('commit', 'cz');
  pkg.save();

  install(packages);

  installPeerDeps(configPackage);
};

module.exports.description = 'Adds commitlint';
