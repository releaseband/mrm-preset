const path = require('path');
const { install, copyFiles } = require('mrm-core');

const configFile = 'release.config.js';
const releaseWorkflowFile = '.github/workflows/release.yml';

const configPackage = '@releaseband/semantic-release-npm-github-config';

module.exports = function task() {
  copyFiles(path.join(__dirname, 'templates'), [configFile, releaseWorkflowFile]);

  install(configPackage);
};

module.exports.description = 'Adds semantic-release';
