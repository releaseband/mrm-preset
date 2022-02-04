const path = require('path');
const { packageJson, install, copyFiles } = require('mrm-core');
const husky = require('husky');
const { installPeerDeps } = require('../utils');

const commitlintConfigFile = '.commitlintrc.js';
const commitizenConfigFile = '.cz.json';

const commitlintConfigPackage = '@releaseband/commitlint-config';

const packages = [commitlintConfigPackage, '@commitlint/cz-commitlint', 'commitizen'];

module.exports = function task() {
  copyFiles(path.join(__dirname, 'templates'), [commitlintConfigFile, commitizenConfigFile]);

  const pkg = packageJson();
  pkg.setScript('commit', 'cz');
  pkg.save();

  install(packages);

  installPeerDeps(commitlintConfigPackage);

  husky.add('.husky/commit-msg', 'npx --no -- commitlint --edit $1');
};

module.exports.description = 'Adds commitlint';
