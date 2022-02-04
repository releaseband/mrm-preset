const path = require('path');
const { install, copyFiles } = require('mrm-core');
const { installPeerDeps } = require('../utils');

const configFile = '.releaserc.js';
const releaseWorkflowFile = '.github/workflows/release.yml';

const configPackage = '@releaseband/semantic-release-npm-github-config';

module.exports = function task() {
  copyFiles(path.join(__dirname, 'templates'), [configFile, releaseWorkflowFile]);

  install(configPackage);

  installPeerDeps(configPackage);
};

module.exports.description = 'Adds semantic-release';
