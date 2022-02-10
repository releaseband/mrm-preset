const path = require('path');
const { packageJson, install, copyFiles, lines } = require('mrm-core');
const { installPeerDeps } = require('../utils');

const configFile = '.prettierrc.js';
const ignoreFile = '.prettierignore';

const configPackage = '@releaseband/prettier-config';

const ignore = [
  'node_modules/',
  '.idea/',
  '.vscode/',
  '.history/',
  '*.sublime-project',
  '*.sublime-workspace',
  '*.log',
  'package-lock.json',
  'yarn.lock',
  'pnpm-lock.yaml',
  'CHANGELOG.md',
];

module.exports = function task() {
  copyFiles(path.join(__dirname, 'templates'), [configFile], { overwrite: true });

  const pkg = packageJson();
  pkg.setScript('prettier', 'prettier . --write --ignore-unknown');
  pkg.save();

  install(configPackage);

  installPeerDeps(configPackage);

  lines(ignoreFile).add(ignore).save();
};

module.exports.description = 'Adds prettier';
