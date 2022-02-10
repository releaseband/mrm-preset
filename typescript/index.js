const path = require('path');
const { install, copyFiles, packageJson } = require('mrm-core');
const { installPeerDeps } = require('../utils');

const configFile = 'tsconfig.json';

const configPackage = '@releaseband/typescript-config';

module.exports = function task() {
  copyFiles(path.join(__dirname, 'templates'), configFile, { overwrite: true });

  const pkg = packageJson();
  pkg.setScript('type-check', 'tsc --noEmit');
  pkg.save();

  install(configPackage);

  installPeerDeps(configPackage);
};

module.exports.description = 'Adds typescript config';
